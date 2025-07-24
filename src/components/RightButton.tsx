import { usePomodoro } from "../providers/pomodoro-provider";

export default function RightButton() {
  const { reset, isRunning } = usePomodoro();

  if (isRunning) {
    // Invisible placeholder with fixed width to keep layout consistent
    return (
      <button
        className="bg-white rounded-[8px_18px_8px_18px] border-2 border-[#1B0B4C] shadow-[inset_-1px_-2px_4px_#5F5FB4] py-[7px] px-4 h-max w-[70px]  grid place-content-center"
        aria-hidden="true"
      >
        <span
          className="inline-block text-xs font-bold invisible"
          aria-hidden="true"
        >
          Reset
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={reset}
      className="bg-white rounded-[8px_18px_8px_18px] border-2 border-[#1B0B4C] shadow-[inset_-1px_-2px_4px_#5F5FB4] py-[7px] px-4 h-max w-[70px] grid place-content-center"
    >
      <span className="inline-block text-xs font-bold">Reset</span>
    </button>
  );
}
