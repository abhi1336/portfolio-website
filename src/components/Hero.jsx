import { useEffect, useState } from "react";
import { profile, roles, stats } from "../data/resume";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % roles.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative isolate overflow-hidden px-5 pb-20 pt-40 sm:pt-48">
      <div className="orb -left-24 top-10 -z-10 h-96 w-96 bg-blue/30" />
      <div className="orb -right-24 top-40 -z-10 h-[28rem] w-[28rem] bg-violet/30 [animation-delay:-6s]" />

      <div className="mx-auto max-w-4xl text-center">
        {profile.openToWork && (
          <Reveal>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
              Open to new opportunities
            </span>
          </Reveal>
        )}
        <Reveal delay={100}>
          <h1 className="mt-8 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">
            I build warehouse software that <span className="text-gradient">runs at scale.</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {profile.name}, {profile.title} at {profile.company}. I lead the teams, design the systems and ship the code behind enterprise WMS applications.
          </p>
          <p key={i} className="swap mt-4 h-7 font-mono text-sm text-blue">{roles[i]}</p>
        </Reveal>
        <Reveal delay={300} className="mt-9 flex flex-wrap justify-center gap-3">
          <a href="#projects" className="bg-gradient-brand rounded-full px-6 py-3 font-medium shadow-lg shadow-violet/25 transition hover:brightness-110">View my work</a>
          <a href="#contact" className="glass rounded-full px-6 py-3 font-medium transition hover:bg-white/10">Contact me</a>
        </Reveal>
      </div>

      <Reveal delay={400} className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="glass rounded-2xl p-5 text-center">
            <div className="text-gradient text-4xl font-semibold tracking-tight sm:text-5xl">
              <CountUp to={s.to} decimals={s.decimals} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-sm text-muted">{s.label}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
