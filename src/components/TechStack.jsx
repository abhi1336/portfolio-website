import { techStack } from "../data/resume";
import Section from "./Section";

function Row({ items, reverse }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee overflow-hidden py-1.5">
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {loop.map((t, i) => (
          <span key={i} className="glass whitespace-nowrap rounded-full px-5 py-2.5 font-mono text-sm">{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <Section id="stack" title="Tech stack" sub="The tools I reach for every day." className="!max-w-none px-0">
      <Row items={techStack[0]} />
      <Row items={techStack[1]} reverse />
    </Section>
  );
}
