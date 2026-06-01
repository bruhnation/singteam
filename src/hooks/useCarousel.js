import { useEffect, useState } from "react";

export function useCarousel(length, intervalMs = 5500) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (length <= 1) return undefined;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [length, intervalMs]);

  const goTo = (i) => setIndex((i + length) % length);

  return { index, goTo };
}
