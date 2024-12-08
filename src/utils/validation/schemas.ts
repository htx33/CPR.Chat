import { z } from 'zod';

// User-related schemas
export const userSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  role: z.enum(['user', 'admin']).default('user'),
});

// Authentication schemas
export const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(1, 'Password is required'),
});

// Message schemas
export const messageSchema = z.object({
  content: z.string().min(1, 'Message cannot be empty').max(1000, 'Message too long'),
  recipientId: z.string().uuid('Invalid recipient ID'),
  attachments: z
    .array(
      z.object({
        type: z.enum(['image', 'file', 'audio']),
        url: z.string().url('Invalid attachment URL'),
        size: z.number().max(10 * 1024 * 1024, 'File size must be less than 10MB'),
      })
    )
    .optional(),
});

// Search parameters schema
export const searchParamsSchema = z.object({
  query: z.string().min(1, 'Search query cannot be empty'),
  filters: z
    .object({
      dateFrom: z.string().datetime().optional(),
      dateTo: z.string().datetime().optional(),
      categories: z.array(z.string()).optional(),
    })
    .optional(),
  page: z.number().int().min(1).default(1),
  limit: z.number().int().min(1).max(100).default(20),
});

// API response schemas
export const paginatedResponseSchema = <T extends z.ZodType>(itemSchema: T) =>
  z.object({
    items: z.array(itemSchema),
    total: z.number().int(),
    page: z.number().int(),
    limit: z.number().int(),
    hasMore: z.boolean(),
  });

// Export types
export type User = z.infer<typeof userSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type Message = z.infer<typeof messageSchema>;
export type SearchParams = z.infer<typeof searchParamsSchema>;
