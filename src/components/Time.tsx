import { usePomodoro } from "../providers/pomodoro-provider";

export default function Time() {
  const { timeLeft } = usePomodoro();

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <span className="text-5xl font-orbitron">{formatTime(timeLeft)}</span>
    </div>
  );
}
