import { usePomodoro } from "../providers/pomodoro-provider";

export default function StateIndicator({
  label,
  mode,
  isActive = false,
}: {
  label: string;
  mode: "pomodoro" | "shortBreak" | "longBreak";
  isActive?: boolean;
}) {
  const { updateMode } = usePomodoro();

  const handleClick = () => {
    updateMode(mode);
  };

  const bgColor = isActive ? "bg-white" : "bg-[#D9D9D9]";
  const shadowColor = isActive
    ? "shadow-[0_2px_0_#1B0B4C]"
    : "shadow-[0_2px_0_#D9D9D9]";

  return (
    <button
      className={`rounded-[100%] border-2 border-[#1B0B4C] w-[73px] h-[22px] inline-grid place-content-center ${bgColor} ${shadowColor}`}
      onClick={handleClick}
    >
      <span className="text-[10px] font-bold">{label}</span>
    </button>
  );
}
