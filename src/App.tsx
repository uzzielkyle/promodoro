import { invoke } from "@tauri-apps/api/core";
import { FiSettings } from "react-icons/fi";
import "./App.css";

function App() {
  const handleCloseButton = async () => {
    await invoke("close_window");
  };

  return (
    <main className="border-2 rounded-lg border-[#1B0B4C] bg-[#9E7AFF] px-2 pb-2 h-full grid grid-cols-1 grid-rows-[auto_1fr] text-[#1B0B4C] font-inter">
      <div
        data-tauri-drag-region
        className="w-full h-max py-1 flex items-center justify-end"
        id="titlebar"
      >
        <button
          onClick={handleCloseButton}
          className="border-2 border-[#1B0B4C] bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15l-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152l2.758 3.15a1.2 1.2 0 0 1 0 1.698"
            />
          </svg>
        </button>
      </div>
      <div
        className="h-full border-2 border-[#1B0B4C] grid grid-cols-1 grid-rows-[auto_1fr]"
        style={{
          background: `linear-gradient(to bottom, #FFFFFF 50%, #C0C0C0 100%)`,
        }}
      >
        <div className="flex justify-between p-2">
          <h1 className="inline-block font-bold uppercase font-orbitron">Promodoro</h1>
          <button>
            <FiSettings size={20} />
          </button>
        </div>
        <div className="w-full grid grid-cols-1 grid-rows-[auto_1fr] gap-0.5 place-items-center px-2 pb-2 pt-4">
          <div className="flex gap-3">
            <button className="rounded-[100%] bg-white border-2 border-[#1B0B4C] w-[73px] h-[22px] inline-grid place-content-center shadow-[0_2px_0_#1B0B4C]">
              <span className="text-[10px] font-bold">Pomodoro</span>
            </button>
            <button className="rounded-[100%] bg-[#D9D9D9] border-2 border-[#1B0B4C] w-[73px] h-[22px] inline-grid place-content-center shadow-[0_2px_0_#D9D9D9]">
              <span className="text-[10px] font-bold">Short Break</span>
            </button>
            <button className="rounded-[100%] bg-[#D9D9D9] border-2 border-[#1B0B4C] w-[73px] h-[22px] inline-grid place-content-center shadow-[0_2px_0_#D9D9D9]">
              <span className="text-[10px] font-bold">Long Break</span>
            </button>
          </div>
          <div className="flex w-full justify-between items-baseline">
            <button className="bg-white rounded-[18px_8px_18px_8px] border-2 border-[#1B0B4C] shadow-[inset_1px_-2px_4px_#5F5FB4] py-[7px] px-4 h-max grid place-content-center">
              <span className="inline-block text-xs font-bold">Start</span>
            </button>
            <div>
              <span className="text-5xl font-orbitron">25:00</span>
            </div>
            <button className="bg-white rounded-[8px_18px_8px_18px] border-2 border-[#1B0B4C] shadow-[inset_-1px_-2px_4px_#5F5FB4] py-[7px] px-4 h-max grid place-content-center">
              <span className="inline-block text-xs font-bold">Reset</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
