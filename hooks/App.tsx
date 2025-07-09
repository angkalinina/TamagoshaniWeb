import { useEffect } from "react";
import { useTamagoshani } from "../useTamagoshani";

export default function App() {
  const { hunger, energy, feed, play, rest, isSleeping } = useTamagoshani();

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.MainButton.setText("Back to Menu");
      window.Telegram.WebApp.MainButton.show();
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-6">🐾 Tamagoshani</h1>

      <div className="w-full max-w-xs bg-gray-700 rounded mb-2">
        <div
          className="bg-orange-400 text-xs leading-none py-1 text-center text-white rounded"
          style={{ width: `${hunger}%` }}
        >
          Hunger: {hunger}
        </div>
      </div>

      <div className="w-full max-w-xs bg-gray-700 rounded mb-4">
        <div
          className="bg-blue-400 text-xs leading-none py-1 text-center text-white rounded"
          style={{ width: `${energy}%` }}
        >
          Energy: {energy}
        </div>
      </div>

      {isSleeping && (
        <div className="text-sm mb-2 italic text-purple-300">Zzz... Sleeping</div>
      )}

      <div className="flex gap-4">
        <button onClick={feed} className="bg-orange-500 px-4 py-2 rounded-xl shadow">
          Feed
        </button>
        <button
          onClick={play}
          className={`px-4 py-2 rounded-xl shadow ${isSleeping ? 'bg-gray-600' : 'bg-blue-500'}`}
          disabled={isSleeping}
        >
          Play
        </button>
        <button onClick={rest} className="bg-green-500 px-4 py-2 rounded-xl shadow">
          Rest
        </button>
      </div>
    </div>
  );
}
