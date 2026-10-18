import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${shown ? "in" : ""} ${className}`}>
      {children}
    </div>
  );
}
