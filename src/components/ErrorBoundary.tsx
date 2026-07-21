"use client";

import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
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

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: "24px", margin: "24px",
          background: "rgba(239, 68, 68, 0.1)",
          border: "1px solid rgba(239, 68, 68, 0.3)",
          borderRadius: "12px",
          fontFamily: "monospace",
          fontSize: "13px",
          color: "#e8edf5",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}>
          <h2 style={{ color: "#fb7185", marginBottom: "12px" }}>⚠️ Runtime Error</h2>
          <p style={{ color: "#94a3b8", marginBottom: "8px" }}>{this.state.error?.message}</p>
          <details>
            <summary style={{ cursor: "pointer", color: "#38bdf8" }}>Stack trace</summary>
            <pre style={{ marginTop: "8px", fontSize: "11px", color: "#64748b" }}>
              {this.state.error?.stack}
            </pre>
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}
