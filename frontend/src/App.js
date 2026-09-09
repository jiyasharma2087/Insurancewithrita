import { Component } from "react";
import "@/App.css";
import Landing from "@/pages/Landing";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-cream text-ink p-8 text-center">
          <div>
            <p className="font-display text-2xl">Something went wrong.</p>
            <button
              className="mt-4 rounded-full bg-ink text-cream px-6 py-3"
              onClick={() => window.location.reload()}
            >
              Refresh
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <Landing />
    </ErrorBoundary>
  );
}
