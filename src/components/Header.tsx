import { FiSettings } from "react-icons/fi";
import { usePomodoro } from "../providers/pomodoro-provider";

export default function Header() {
  const { intervalCount } = usePomodoro();

  return (
    <div className="flex justify-between p-2">
      <div className="flex gap-2">
        <h1 className="inline-block font-bold uppercase font-orbitron">
          Promodoro
        </h1>
        <span>|</span>
        <span className="inline-block font-bold uppercase font-orbitron">{intervalCount}</span>
      </div>
      <button>
        <FiSettings size={20} />
      </button>
    </div>
  );
}
