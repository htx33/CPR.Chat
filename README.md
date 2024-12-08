# CPR.Chat

A modern, secure chat application built with React and TypeScript.

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or later)
- npm (v9 or later)
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/htx33/CPR.Chat.git
cd CPR.Chat
```

2. Install dependencies:
```bash
npm install
```

3. Copy the environment template:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`

5. Start the development server:
```bash
npm start
```

## 🔧 Environment Configuration

The application uses environment variables for configuration. See [Environment Configuration Guide](docs/environment.md) for detailed setup.

Key variables:
```env
# Server Configuration
PORT=3000
NODE_ENV=development

# API Configuration
REACT_APP_API_URL=http://localhost:3000/api
REACT_APP_API_KEY=your_api_key

# Authentication
REACT_APP_JWT_SECRET=your_jwt_secret
```

## 🏗️ Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── services/      # API and external service integrations
├── utils/         # Utility functions and helpers
├── hooks/         # Custom React hooks
├── context/       # React context providers
└── types/         # TypeScript type definitions
```

## 🧪 Testing

The project includes comprehensive testing:

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e

# Run load tests
npm run test:load
```

## 📚 API Documentation

API documentation is available at `/docs/api`. For local development:

1. Start the documentation server:
```bash
npm run docs:serve
```

2. Visit `http://localhost:3001/docs`

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

## 🔒 Security

- All dependencies are regularly scanned for vulnerabilities
- Security issues should be reported to security@cpr.chat
- See [Security Policy](SECURITY.md) for details

## 📦 Dependencies

Dependencies are managed through npm with strict version pinning. See [Dependency Management](docs/dependencies.md) for our update strategy.

## 🏛️ Architecture

The application follows a clean architecture pattern. See [Architecture Documentation](docs/architecture.md) for detailed design decisions and patterns.

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) for details.

## 🔄 Version History

See [CHANGELOG](CHANGELOG.md) for release history and migration guides.
