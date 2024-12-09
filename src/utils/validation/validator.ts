import { z } from 'zod';
import { ValidationError } from '../errors/AppError';
import { logger } from '../logging/logger';

export class Validator {
  static async validate<T extends z.ZodType>(
    schema: T,
    data: unknown,
    context?: string
  ): Promise<z.infer<T>> {
    try {
      const result = await schema.parseAsync(data);
      logger.debug('Validation successful', {
        context,
        validatedData: result,
      });
      return result;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const issues = error.issues.map((issue) => ({
          path: issue.path.join('.'),
          message: issue.message,
        }));

        logger.warn('Validation failed', {
          context,
          issues,
          inputData: data,
        });

        throw new ValidationError('Validation failed', { issues });
      }
      throw error;
    }
  }

  static validateSync<T extends z.ZodType>(
    schema: T,
    data: unknown,
    context?: string
  ): z.infer<T> {
    try {
      const result = schema.parse(data);
      logger.debug('Sync validation successful', {
        context,
        validatedData: result,
      });
      return result;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const issues = error.issues.map((issue) => ({
          path: issue.path.join('.'),
          message: issue.message,
        }));

        logger.warn('Sync validation failed', {
          context,
          issues,
          inputData: data,
        });

        throw new ValidationError('Validation failed', { issues });
      }
      throw error;
    }
  }
}
