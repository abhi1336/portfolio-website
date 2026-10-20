import { profile, selectedWork } from "../data/resume";
import Section from "./Section";
import Reveal from "./Reveal";
import Card from "./Card";

export default function Projects() {
  return (
    <Section id="selected-work" title="Selected work at Addverb" sub={`Examples of work delivered as part of my roles at ${profile.company}.`}>
      <div className="grid gap-4 md:grid-cols-2">
        {selectedWork.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 100} className={p.wide ? "md:col-span-2" : ""}>
            <Card className="h-full p-7 sm:p-8">
              <span className="bg-gradient-brand inline-block rounded-full px-3 py-1 text-xs font-semibold">{p.metric}</span>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{p.text}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-full border border-edge bg-white/5 px-3 py-1 font-mono text-xs">{t}</li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
