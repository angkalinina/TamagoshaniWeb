import { useState, useEffect } from "react";

export function useTamagoshani() {
  const [hunger, setHunger] = useState(() => {
    const saved = localStorage.getItem("hunger");
    return saved ? Number(saved) : 70;
  });

  const [energy, setEnergy] = useState(() => {
    const saved = localStorage.getItem("energy");
    return saved ? Number(saved) : 50;
  });

  const [isSleeping, setIsSleeping] = useState(false);

  const feed = () => setHunger((h: number) => Math.min(100, h + 10));
const play = () => setEnergy((e: number) => Math.max(0, e - 10));
  const rest = () => {
    if (!isSleeping) {
      setIsSleeping(true);
      setTimeout(() => {
        setEnergy(e => Math.min(100, e + 30));
        setIsSleeping(false);
      }, 5000);
    }
  };

  // Автоуменьшение
  useEffect(() => {
    const interval = setInterval(() => {
      setHunger(h => Math.max(0, h - 1));
      setEnergy(e => Math.max(0, e - 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Сохранение
  useEffect(() => {
    localStorage.setItem("hunger", hunger.toString());
    localStorage.setItem("energy", energy.toString());
  }, [hunger, energy]);

  return { hunger, energy, feed, play, rest, isSleeping };
}
