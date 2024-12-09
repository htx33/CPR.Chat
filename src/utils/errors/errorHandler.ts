import { AppError } from './AppError';

interface ErrorResponse {
  message: string;
  statusCode: number;
  error: string;
  context?: Record<string, any>;
}

export const errorHandler = {
  handleError(error: Error | AppError): ErrorResponse {
    if (error instanceof AppError) {
      return {
        message: error.message,
        statusCode: error.statusCode,
        error: error.name,
        context: error.context,
      };
    }

    // Handle unknown errors
    console.error('Unhandled error:', error);
    return {
      message: 'An unexpected error occurred',
      statusCode: 500,
      error: 'InternalServerError',
    };
  },

  isOperationalError(error: Error): boolean {
    if (error instanceof AppError) {
      return error.isOperational;
    }
    return false;
  },

  logError(error: Error | AppError, additionalContext?: Record<string, any>): void {
    const timestamp = new Date().toISOString();
    const errorContext = error instanceof AppError ? error.context : {};
    const context = { ...errorContext, ...additionalContext };

    const logEntry = {
      timestamp,
      name: error.name,
      message: error.message,
      stack: error.stack,
      context,
    };

    // In production, you might want to use a proper logging service
    console.error('Error Log:', JSON.stringify(logEntry, null, 2));
  },
};
