import * as dotenv from 'dotenv';
import { z } from 'zod';

// Load environment variables from .env file
dotenv.config();

// Define configuration schema with Zod for validation
const configSchema = z.object({
  // Server configuration
  PORT: z.string().default('3000'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  
  // API keys and secrets
  API_KEY: z.string().min(1),
  JWT_SECRET: z.string().min(32),
  
  // Database configuration
  DB_HOST: z.string().min(1),
  DB_PORT: z.string(),
  DB_USER: z.string().min(1),
  DB_PASSWORD: z.string().min(1),
  DB_NAME: z.string().min(1),

  // AWS configuration (if using AWS Secrets Manager)
  AWS_REGION: z.string().optional(),
  AWS_SECRET_NAME: z.string().optional(),
});

// Type inference
type Config = z.infer<typeof configSchema>;

function validateConfig(config: Record<string, unknown>): Config {
  try {
    return configSchema.parse(config);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = error.issues.map(issue => issue.path.join('.'));
      throw new Error(`Missing or invalid environment variables: ${missingVars.join(', ')}`);
    }
    throw error;
  }
}

// Load and validate configuration
const config = validateConfig(process.env);

export default config;
