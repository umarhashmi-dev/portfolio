import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '2rem',
          textAlign: 'center',
          color: '#fff',
          background: '#1e1e1e',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h2>Something went wrong.</h2>
          <button
            onClick={() => this.setState({ hasError: false })}
            style={{
              padding: '0.5rem 1rem',
              marginTop: '1rem',
              cursor: 'pointer',
              background: '#007acc',
              border: 'none',
              color: 'white',
              borderRadius: '4px'
            }}
          >
            Try clearly cache and reload
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
