import React, { Component, ErrorInfo, ReactNode } from 'react';
import { errorHandler } from '../errors/errorHandler';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    errorHandler.logError(error, { componentStack: errorInfo.componentStack });
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="error-boundary">
          <h1>Something went wrong</h1>
          <p>{this.state.error?.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export const useErrorHandler = () => {
  const handleError = (error: unknown) => {
    if (error instanceof Error) {
      errorHandler.logError(error);
      throw error;
    }
    const genericError = new Error(String(error));
    errorHandler.logError(genericError);
    throw genericError;
  };

  return { handleError };
};
