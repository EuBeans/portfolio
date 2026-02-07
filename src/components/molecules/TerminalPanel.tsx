import React from "react";
import { Box } from "@mui/material";
import "../../App.css";
import { useLocation } from "react-router-dom";
import TerminalCommandModal from "./TerminalCommandModal";

interface TerminalPanelProps {
  title?: string;
  headerContent?: React.ReactNode;
  backgroundContent?: React.ReactNode;
  showHeader?: boolean;
  children: React.ReactNode;
}

interface TerminalStatusLine {
  label: string;
  value: string;
}

const getPathSeed = (pathname: string) => {
  return pathname.split("").reduce((total, char, index) => (
    total + (char.charCodeAt(0) * (index + 7))
  ), 0);
};

const buildStatusLines = (tick: number, pathname: string): TerminalStatusLine[] => {
  const seed = getPathSeed(pathname);
  const latency = 16 + ((seed + tick * 37) % 72);

  return [
    { label: "status", value: "ready" },
    { label: "net", value: `${latency}ms` }
  ];
};

const TerminalPanel = (props: TerminalPanelProps) => {
  const {
    title = "~/portfolio",
    headerContent,
    backgroundContent,
    showHeader = true,
    children
  } = props;
  const location = useLocation();
  const tickRef = React.useRef(0);
  const [statusLines, setStatusLines] = React.useState<TerminalStatusLine[]>(
    () => buildStatusLines(0, location.pathname)
  );
  const [footerClock, setFooterClock] = React.useState(
    () => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })
  );
  const [commandModalOpen, setCommandModalOpen] = React.useState(false);

  const netLine = React.useMemo(
    () => statusLines.find((line) => line.label === "net"),
    [statusLines]
  );
  const nonNetLines = React.useMemo(
    () => statusLines.filter((line) => line.label !== "net"),
    [statusLines]
  );

  React.useEffect(() => {
    tickRef.current = 0;
    setStatusLines(buildStatusLines(0, location.pathname));

    let cancelled = false;
    let timeoutId: number | undefined;

    const scheduleUpdate = () => {
      const nextTick = tickRef.current + 1;
      tickRef.current = nextTick;
      setStatusLines(buildStatusLines(nextTick, location.pathname));

      const seed = getPathSeed(location.pathname);
      const delay = 2000 + ((seed + nextTick * 53) % 2000);
      timeoutId = window.setTimeout(() => {
        if (!cancelled) {
          scheduleUpdate();
        }
      }, delay);
    };

    timeoutId = window.setTimeout(() => {
      if (!cancelled) {
        scheduleUpdate();
      }
    }, 2300);

    return () => {
      cancelled = true;
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [location.pathname]);

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTypingTarget = !!target && (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.isContentEditable
      );

      if (isTypingTarget) {
        return;
      }

      if (event.key === "/" && !event.shiftKey) {
        event.preventDefault();
        setCommandModalOpen(true);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setFooterClock(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

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
      <Box className="terminal-body terminal-scrollbar-y">
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
        <Box className="terminal-footer-inner terminal-scrollbar-x" aria-label="terminal status">
          {netLine && (
            <span className={`terminal-footer-token terminal-footer-token--${netLine.label}`}>
              {netLine.label}: {netLine.value}
            </span>
          )}
          {nonNetLines.map((line) => (
            <span key={line.label} className={`terminal-footer-token terminal-footer-token--${line.label}`}>
              {line.label}: {line.value}
            </span>
          ))}
          <span className="terminal-footer-token terminal-footer-clock">
            local: {footerClock}
          </span>
          <span className="terminal-footer-token terminal-footer-tip">
            press <strong>/</strong> for commands
          </span>
        </Box>
      </Box>
      <TerminalCommandModal
        open={commandModalOpen}
        onClose={() => setCommandModalOpen(false)}
      />
    </Box>
  );
};

export default TerminalPanel;
