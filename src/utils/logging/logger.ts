import winston from 'winston';
import 'winston-daily-rotate-file';
import { v4 as uuidv4 } from 'uuid';

// Custom log levels
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

// Log level colors
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

// Add colors to Winston
winston.addColors(colors);

// Create the logger configuration
const logger = winston.createLogger({
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
  levels,
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    winston.format.correlationId({ key: 'correlationId' }),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: {
    service: 'cpr-chat',
    environment: process.env.NODE_ENV,
  },
  transports: [
    // Error logs
    new winston.transports.DailyRotateFile({
      filename: 'logs/error-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
      level: 'error',
    }),
    // All logs
    new winston.transports.DailyRotateFile({
      filename: 'logs/combined-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});

// Add console transport in development
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.simple()
      ),
    })
  );
}

// Create a request context middleware
export const requestContext = () => {
  return (req: any, res: any, next: any) => {
    const correlationId = req.headers['x-correlation-id'] || uuidv4();
    const requestId = uuidv4();

    // Add correlation ID to response headers
    res.setHeader('x-correlation-id', correlationId);

    // Create a child logger with request context
    req.logger = logger.child({
      correlationId,
      requestId,
      method: req.method,
      url: req.url,
      ip: req.ip,
      userAgent: req.headers['user-agent'],
    });

    // Log request
    req.logger.http('Incoming request');

    // Log response on finish
    res.on('finish', () => {
      req.logger.http('Request completed', {
        statusCode: res.statusCode,
        responseTime: Date.now() - req._startTime,
      });
    });

    next();
  };
};

// Performance monitoring
export const measurePerformance = (operationName: string) => {
  const start = process.hrtime();
  return {
    end: () => {
      const [seconds, nanoseconds] = process.hrtime(start);
      const duration = seconds * 1000 + nanoseconds / 1e6; // Convert to milliseconds
      logger.debug(`Performance measurement - ${operationName}`, {
        operation: operationName,
        duration,
        timestamp: new Date().toISOString(),
      });
      return duration;
    },
  };
};

// Application lifecycle logging
export const appLogger = {
  startup: (config: any) => {
    logger.info('Application starting up', {
      timestamp: new Date().toISOString(),
      config: {
        ...config,
        secrets: '[REDACTED]', // Don't log sensitive information
      },
    });
  },

  shutdown: (reason: string) => {
    logger.info('Application shutting down', {
      timestamp: new Date().toISOString(),
      reason,
    });
  },
};

export { logger };
