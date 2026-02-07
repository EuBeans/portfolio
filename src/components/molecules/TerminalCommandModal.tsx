import React from "react";
import { Box, Modal } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import "../../App.css";
import { contactLinks } from "../../const/constants";
import resumePdf from "../../assets/JeanPierre_Sfeir_Resume.pdf";

interface TerminalCommandModalProps {
  open: boolean;
  onClose: () => void;
}

interface CommandDefinition {
  command: string;
  description: string;
  run: () => void;
  closeOnRun?: boolean;
}

const TerminalCommandModal = ({ open, onClose }: TerminalCommandModalProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const suggestionsRef = React.useRef<HTMLDivElement | null>(null);
  const suggestionButtonsRef = React.useRef<Array<HTMLButtonElement | null>>([]);
  const [query, setQuery] = React.useState("/");
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [helpMode, setHelpMode] = React.useState(false);
  const [helpMessage, setHelpMessage] = React.useState("");

  const showHelp = React.useCallback(() => {
    setQuery("/");
    setSelectedIndex(0);
    setHelpMode(true);
    setHelpMessage("Use ↑↓ to navigate, Tab to autocomplete, Enter to run, Esc to close.");
    inputRef.current?.focus();
  }, []);

  const downloadResume = React.useCallback(() => {
    const anchor = document.createElement("a");
    anchor.href = resumePdf;
    anchor.download = "JeanPierre_Sfeir_Resume.pdf";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }, []);

  const commands = React.useMemo<CommandDefinition[]>(() => ([
    { command: "/home", description: "Go to home page", run: () => navigate("/") },
    { command: "/projects", description: "Open projects page", run: () => navigate("/projects") },
    { command: "/experience", description: "Open experience page", run: () => navigate("/experience") },
    { command: "/aboutme", description: "Open about me page", run: () => navigate("/aboutme") },
    { command: "/demos", description: "Open demos page", run: () => navigate("/demos") },
    { command: "/resume", description: "Download resume PDF", run: downloadResume },
    { command: "/github", description: "Open GitHub profile", run: () => window.open(contactLinks.github, "_blank", "noopener,noreferrer") },
    { command: "/contact", description: "Open contact email", run: () => { window.location.href = contactLinks.email; } },
    { command: "/email", description: "Open email composer", run: () => { window.location.href = contactLinks.email; } },
    { command: "/help", description: "Show command suggestions", run: showHelp, closeOnRun: false },
    { command: "/close", description: "Close command modal", run: onClose },
  ]), [downloadResume, navigate, onClose, showHelp]);

  React.useEffect(() => {
    if (!open) {
      return;
    }

    setQuery("/");
    setSelectedIndex(0);
    setHelpMode(false);
    setHelpMessage("");

    const focusTimeout = window.setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.setSelectionRange(1, 1);
    }, 10);

    return () => {
      window.clearTimeout(focusTimeout);
    };
  }, [open]);

  const filteredCommands = React.useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const getScore = (command: CommandDefinition) => {
      const commandText = command.command.toLowerCase();
      const descriptionText = command.description.toLowerCase();

      if (!normalized) {
        return 1;
      }
      if (commandText === normalized) {
        return 5;
      }
      if (commandText.startsWith(normalized)) {
        return 4;
      }
      if (commandText.includes(normalized)) {
        return 3;
      }
      if (descriptionText.includes(normalized)) {
        return 2;
      }
      return 0;
    };

    return commands
      .map((command) => ({ command, score: getScore(command) }))
      .filter((entry) => entry.score > 0)
      .sort((left, right) => {
        if (left.score !== right.score) {
          return right.score - left.score;
        }
        return left.command.command.localeCompare(right.command.command);
      })
      .map((entry) => entry.command);
  }, [commands, query]);

  const visibleCommands = React.useMemo(
    () => (helpMode ? filteredCommands : filteredCommands.slice(0, 6)),
    [filteredCommands, helpMode]
  );

  React.useEffect(() => {
    setSelectedIndex(0);
  }, [query, open]);

  React.useEffect(() => {
    if (!open || !visibleCommands.length) {
      return;
    }

    const container = suggestionsRef.current;
    const activeButton = suggestionButtonsRef.current[selectedIndex];
    if (!container || !activeButton) {
      return;
    }

    activeButton.scrollIntoView({ block: "nearest", behavior: "auto" });
  }, [open, selectedIndex, visibleCommands]);

  const executeCommand = React.useCallback((command: CommandDefinition | undefined) => {
    if (!command) {
      return;
    }

    command.run();
    if (command.closeOnRun !== false) {
      onClose();
    }
  }, [onClose]);

  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!visibleCommands.length) {
        return;
      }
      setSelectedIndex((current) => (current + 1) % visibleCommands.length);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!visibleCommands.length) {
        return;
      }
      setSelectedIndex((current) => (
        current - 1 < 0 ? visibleCommands.length - 1 : current - 1
      ));
      return;
    }

    if (event.key === "Tab") {
      if (visibleCommands.length) {
        event.preventDefault();
        setQuery(visibleCommands[selectedIndex]?.command ?? visibleCommands[0].command);
      }
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const normalized = query.trim().toLowerCase();
      const exactMatch = commands.find((command) => command.command === normalized);
      if (exactMatch) {
        executeCommand(exactMatch);
        return;
      }
      executeCommand(visibleCommands[selectedIndex] ?? visibleCommands[0]);
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="terminal-command-modal-backdrop">
        <Box className="terminal-command-modal" role="dialog" aria-modal="true" aria-label="Terminal command input">
          <span className="terminal-command-muted">terminal command mode | route: {location.pathname}</span>
          <Box className="terminal-command-input-wrap">
            <span className="terminal-prompt">jp@linux:~$</span>
            <input
              ref={inputRef}
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                if (helpMode) {
                  setHelpMode(false);
                  setHelpMessage("");
                }
              }}
              onKeyDown={onInputKeyDown}
              className="terminal-command-input terminal-focus-target"
              placeholder="/help"
              aria-label="Terminal command input"
            />
          </Box>

          <Box
            ref={suggestionsRef}
            className="terminal-command-suggestions terminal-stdout terminal-scrollbar-y"
          >
            {helpMode && (
              <span className="terminal-command-line terminal-command-line--system" aria-live="polite">
                <span className="terminal-command-muted">help</span>
                <span>{helpMessage}</span>
              </span>
            )}
            <span className="terminal-command-line terminal-command-line--system">
              <span className="terminal-command-muted">hint</span>
              <span>Try /resume or /contact</span>
            </span>
            {visibleCommands.map((command, index) => (
              <button
                ref={(element) => { suggestionButtonsRef.current[index] = element; }}
                type="button"
                key={command.command}
                className={`terminal-command-suggestion terminal-focus-target${index === selectedIndex ? " terminal-command-suggestion--active" : ""}`}
                onClick={() => executeCommand(command)}
              >
                <span className="terminal-command-muted">{command.command}</span>
                <span>{command.description}</span>
              </button>
            ))}
            {!visibleCommands.length && (
              <span className="terminal-command-line">
                <span className="terminal-command-muted">no match</span>
                <span>Try /help, /home, /projects, /resume, /contact</span>
              </span>
            )}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default TerminalCommandModal;
