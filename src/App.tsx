import { invoke } from "@tauri-apps/api/core";
import {
  TitleBar,
  Window,
  Header,
  StateIndicator,
  Time,
  LeftButton,
  RightButton,
} from "./components";
import "./App.css";

const POMODORO_TIME = 25 * 60;
const SHORT_BREAK_TIME = 5 * 60;
const LONG_BREAK_TIME = 15 * 60;
const INTERVAL = 4;

function App() {
  const handleCloseButton = async () => {
    await invoke("close_window");
  };

  return (
    <main className="border-2 rounded-lg border-[#1B0B4C] bg-[#9E7AFF] px-2 pb-2 h-full grid grid-cols-1 grid-rows-[auto_1fr] text-[#1B0B4C] font-inter">
      <TitleBar action={handleCloseButton} />
      <Window>
        <Header />
        <div className="w-full grid grid-cols-1 grid-rows-[auto_1fr] gap-0.5 place-items-center px-2 pb-2 pt-4">
          <div className="flex gap-3">
            <StateIndicator label="Pomodoro" isActive={true} />
            <StateIndicator label="Short Break" isActive={false} />
            <StateIndicator label="Long Break" isActive={false} />
          </div>
          <div className="flex w-full justify-between items-baseline">
            {/* Application state running ? Stop : Start */}
            <LeftButton />
            <Time />
            {/* Application state running ? Pause : Reset */}
            <RightButton />
          </div>
        </div>
      </Window>
    </main>
  );
}

export default App;
