import { FiSettings } from "react-icons/fi";

export default function Header() {
  return (
    <div className="flex justify-between p-2">
      <h1 className="inline-block font-bold uppercase font-orbitron">
        Promodoro
      </h1>
      <button>
        <FiSettings size={20} />
      </button>
    </div>
  );
}
