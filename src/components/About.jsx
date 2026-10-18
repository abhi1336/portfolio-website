import { about } from "../data/resume";
import Section from "./Section";
import Reveal from "./Reveal";
import Card from "./Card";

export default function About() {
  return (
    <Section id="about" title="About me" sub="From intern to lead in under four years, with the whole stack in view.">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          {about.story.map((p) => <p key={p}>{p}</p>)}
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {about.highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 80}>
              <Card className="h-full p-6">
                <h3 className="font-semibold">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{h.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
