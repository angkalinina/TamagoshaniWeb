// src/App.tsx
import { useState, useEffect } from "react";

export default function App() {
  const [hunger, setHunger] = useState(70);
  const [energy, setEnergy] = useState(50);

  const feed = () => setHunger(h => Math.min(100, h + 10));
  const play = () => setEnergy(e => Math.max(0, e - 10));

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-6">🐾 Tamagoshani</h1>
      <div className="text-lg mb-2"> Hunger: {hunger}</div>
      <div className="text-lg mb-4"> Energy: {energy}</div>
      <div className="flex gap-4">
        <button onClick={feed} className="bg-orange-500 px-4 py-2 rounded-xl shadow">Feed</button>
        <button onClick={play} className="bg-blue-500 px-4 py-2 rounded-xl shadow">Play</button>
      </div>
    </div>
  );
}
