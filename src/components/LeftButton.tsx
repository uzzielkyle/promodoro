import { usePomodoro } from "../providers/pomodoro-provider";

export default function LeftButton() {
  const { isRunning, start, pause, timeLeft } = usePomodoro();

  const handleClick = () => {
    if (timeLeft === 0) return;
    if (isRunning) {
      pause();
    } else {
      start();
    }
  };

  const getLabel = () => {
    if (timeLeft === 0) return "Done";
    return isRunning ? "Pause" : "Start";
  };

  const isDisabled = timeLeft === 0;

  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      className={`bg-white rounded-[18px_8px_18px_8px] border-2 border-[#1B0B4C] shadow-[inset_1px_-2px_4px_#5F5FB4] py-[7px] px-4 h-max grid place-content-center w-[70px] ${
        isDisabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <span className="inline-block text-xs font-bold">
        {getLabel()}
      </span>
    </button>
  );
}
