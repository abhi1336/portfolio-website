import { useEffect, useRef, useState } from "react";

export default function CountUp({ to, decimals = 0, suffix = "", duration = 1600 }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      if (reduce) return setValue(to);
      const start = performance.now();
      const tick = (t) => {
        const p = Math.min((t - start) / duration, 1);
        setValue(to * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
