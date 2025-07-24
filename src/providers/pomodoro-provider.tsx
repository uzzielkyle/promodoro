import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface PomodoroContextType {
  mode: "pomodoro" | "shortBreak" | "longBreak";
  timeLeft: number;
  isRunning: boolean;
  intervalCount: number;
  start: () => void;
  pause: () => void;
  reset: () => void;
  next: () => void;
  updateMode: (newMode: "pomodoro" | "shortBreak" | "longBreak") => void;
}

const PomodoroContext = createContext<PomodoroContextType | undefined>(
  undefined
);

// const POMODORO_TIME = 25 * 60;
const POMODORO_TIME = 5;
// const SHORT_BREAK_TIME = 5 * 60;
const SHORT_BREAK_TIME = 5;
// const LONG_BREAK_TIME = 15 * 60;
const LONG_BREAK_TIME = 5;
const INTERVAL = 4;

export function PomodoroProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"pomodoro" | "shortBreak" | "longBreak">(
    "pomodoro"
  );
  const [timeLeft, setTimeLeft] = useState<number>(POMODORO_TIME);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [intervalCount, setIntervalCount] = useState<number>(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Countdown effect
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerRef.current = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    } else if (isRunning && timeLeft === 0) {
      setIsRunning(false);
      next();
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isRunning, timeLeft]);

  const start = () => setIsRunning(true);

  const pause = () => {
    setIsRunning(false);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const reset = () => {
    pause();
    setIntervalCount(0); // optional: reset intervals on manual switch
    switch (mode) {
      case "pomodoro":
        setTimeLeft(POMODORO_TIME);
        break;
      case "shortBreak":
        setTimeLeft(SHORT_BREAK_TIME);
        break;
      case "longBreak":
        setTimeLeft(LONG_BREAK_TIME);
        break;
    }
  };

  const next = () => {
    pause();
    if (mode === "pomodoro") {
      const newCount = intervalCount + 1;
      setIntervalCount(newCount);

      if (newCount % INTERVAL === 0) {
        setMode("longBreak");
        setTimeLeft(LONG_BREAK_TIME);
      } else {
        setMode("shortBreak");
        setTimeLeft(SHORT_BREAK_TIME);
      }
    } else {
      setMode("pomodoro");
      setTimeLeft(POMODORO_TIME);
    }
  };

  const updateMode = (newMode: "pomodoro" | "shortBreak" | "longBreak") => {
    pause(); // stop timer if running
    setMode(newMode);
    switch (newMode) {
      case "pomodoro":
        setTimeLeft(POMODORO_TIME);
        break;
      case "shortBreak":
        setTimeLeft(SHORT_BREAK_TIME);
        break;
      case "longBreak":
        setTimeLeft(LONG_BREAK_TIME);
        break;
    }
  };

  const value: PomodoroContextType = {
    mode,
    timeLeft,
    isRunning,
    intervalCount,
    start,
    pause,
    reset,
    next,
    updateMode,
  };

  return (
    <PomodoroContext.Provider value={value}>
      {children}
    </PomodoroContext.Provider>
  );
}

export function usePomodoro() {
  const context = useContext(PomodoroContext);
  if (!context) {
    throw new Error("usePomodoro must be used within a PomodoroProvider");
  }
  return context;
}
