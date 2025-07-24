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
import { usePomodoro } from "./providers/pomodoro-provider";

function App() {
  const { mode } = usePomodoro();

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
            <StateIndicator
              label="Pomodoro"
              mode={"pomodoro"}
              isActive={mode === "pomodoro"}
            />
            <StateIndicator
              label="Short Break"
              mode={"shortBreak"}
              isActive={mode === "shortBreak"}
            />
            <StateIndicator
              label="Long Break"
              mode={"longBreak"}
              isActive={mode === "longBreak"}
            />
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
