import React from "react";

export default function Window({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="h-full border-2 border-[#1B0B4C] grid grid-cols-1 grid-rows-[auto_1fr]"
      style={{
        background: `linear-gradient(to bottom, #FFFFFF 50%, #C0C0C0 100%)`,
      }}
    >
      {children}
    </div>
  );
}
