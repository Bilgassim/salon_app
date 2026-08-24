import React, { Component, ErrorInfo, ReactNode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Erreur d'exécution React:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "2rem", fontFamily: "sans-serif", color: "#1c0a0e", background: "#fff5f7", minHeight: "100vh" }}>
          <h2 style={{ color: "#e11d48", fontFamily: "serif" }}>Une interruption technique est survenue</h2>
          <p style={{ fontSize: "14px", color: "#705860" }}>
            Détail de l'incident :
          </p>
          <pre style={{ background: "#ffffff", padding: "1rem", borderRadius: "8px", border: "1px solid #fecdd3", overflow: "auto", fontSize: "12px" }}>
            {this.state.error?.toString()}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{ marginTop: "1rem", padding: "0.5rem 1.5rem", background: "#e11d48", color: "#ffffff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}
          >
            Actualiser l'application
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}