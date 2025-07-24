import { usePomodoro } from "../providers/pomodoro-provider";

export default function RightButton() {
  const { reset, isRunning } = usePomodoro();

  return (
    <button
      onClick={!isRunning ? reset : undefined}
      className="bg-white rounded-[8px_18px_8px_18px] border-2 border-[#1B0B4C] shadow-[inset_-1px_-2px_4px_#5F5FB4] py-[7px] px-4 h-max w-[64px] grid place-content-center"
      aria-hidden={isRunning}
    >
      <span
        className={`inline-block text-xs font-bold ${
          isRunning ? "invisible" : ""
        }`}
      >
        Reset
      </span>
    </button>
  );
}
