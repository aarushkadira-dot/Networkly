import { Component, ReactNode } from 'react';
import { Button } from './ui/button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-dark-navy flex items-center justify-center px-6">
          <div className="max-w-md w-full rounded-3xl border border-white/10 bg-white/10 p-8 text-center space-y-4 text-white">
            <h2 className="text-2xl font-semibold">Something went wrong</h2>
            <p className="text-white/80">
              We encountered an unexpected error. Please try refreshing the page.
            </p>
            {this.state.error && (
              <details className="text-left text-sm text-white/60 bg-white/5 p-4 rounded-lg">
                <summary className="cursor-pointer mb-2">Error details</summary>
                <pre className="mt-2 text-xs overflow-auto">
                  {this.state.error.message}
                </pre>
              </details>
            )}
            <div className="flex flex-col gap-3">
              <Button
                onClick={() => {
                  this.setState({ hasError: false, error: null });
                  window.location.reload();
                }}
              >
                Refresh Page
              </Button>
              <a
                href="/"
                className="text-sm text-white/70 underline-offset-4 hover:underline"
              >
                Return to home
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
