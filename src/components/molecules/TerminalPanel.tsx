import React from "react";
import { Box } from "@mui/material";
import "../../App.css";

interface TerminalPanelProps {
  title?: string;
  headerContent?: React.ReactNode;
  backgroundContent?: React.ReactNode;
  showHeader?: boolean;
  children: React.ReactNode;
}

const TerminalPanel = (props: TerminalPanelProps) => {
  const {
    title = "~/portfolio",
    headerContent,
    backgroundContent,
    showHeader = true,
    children
  } = props;

  return (
    <Box className={`terminal-window${showHeader ? "" : " terminal-window-no-header"}`}>
      {showHeader && (
        <Box className="terminal-header">
          <Box className="terminal-lights">
            <span className="terminal-light terminal-light-red" />
            <span className="terminal-light terminal-light-yellow" />
            <span className="terminal-light terminal-light-green" />
          </Box>
          <Box className="terminal-title">
            <span className="terminal-title-text">{title}</span>
            <span className="terminal-title-meta">tty1 • 1920x1080</span>
          </Box>
          <Box className="terminal-actions">
            {headerContent}
          </Box>
        </Box>
      )}
      <Box className="terminal-body">
        <Box className="terminal-body-content">
          {backgroundContent && (
            <Box className="terminal-body-bg">
              {backgroundContent}
            </Box>
          )}
          {children}
        </Box>
      </Box>
      <Box className="terminal-footer">
        <span>status: online</span>
        <span>theme: terminal</span>
        <span>mode: public</span>
      </Box>
    </Box>
  );
};

export default TerminalPanel;
