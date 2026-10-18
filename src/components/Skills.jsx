import { capabilities } from "../data/resume";
import Section from "./Section";
import Reveal from "./Reveal";
import Card from "./Card";

export default function Skills() {
  return (
    <Section id="skills" title="What I bring" sub="Six areas where I deliver, each backed by production work.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c, i) => (
          <Reveal key={c.title} delay={(i % 3) * 90}>
            <Card className="h-full p-6">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.text}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <li key={t} className="rounded-full border border-edge bg-white/5 px-3 py-1 text-xs text-white/85">{t}</li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
