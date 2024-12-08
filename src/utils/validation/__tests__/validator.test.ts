import { z } from 'zod';
import { Validator } from '../validator';
import { ValidationError } from '../../errors/AppError';
import fc from 'fast-check';

describe('Validator', () => {
  // Unit test
  describe('validate', () => {
    const schema = z.object({
      email: z.string().email(),
      age: z.number().min(18),
    });

    it('should validate correct data', async () => {
      const data = { email: 'test@example.com', age: 25 };
      const result = await Validator.validate(schema, data);
      expect(result).toEqual(data);
    });

    it('should throw ValidationError for invalid data', async () => {
      const data = { email: 'invalid-email', age: 15 };
      await expect(Validator.validate(schema, data)).rejects.toThrow(ValidationError);
    });

    // Property-based test
    it('should validate any valid email and age combination', () => {
      fc.assert(
        fc.property(
          fc.emailAddress(),
          fc.integer({ min: 18, max: 100 }),
          async (email, age) => {
            const data = { email, age };
            const result = await Validator.validate(schema, data);
            expect(result).toEqual(data);
          }
        )
      );
    });
  });
});
