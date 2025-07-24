export default function StateIndicator({
  label,
  isActive = false,
}: {
  label: string;
  isActive?: boolean;
}) {
  const bgColor = isActive ? "bg-white" : "bg-[#D9D9D9]";
  const shadowColor = isActive
    ? "shadow-[0_2px_0_#1B0B4C]"
    : "shadow-[0_2px_0_#D9D9D9]";

  return (
    <div
      className={`rounded-[100%] border-2 border-[#1B0B4C] w-[73px] h-[22px] inline-grid place-content-center ${bgColor} ${shadowColor}`}
    >
      <span className="text-[10px] font-bold">{label}</span>
    </div>
  );
}
