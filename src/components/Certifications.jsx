import { certifications, education } from "../data/resume";
import Section from "./Section";
import Reveal from "./Reveal";
import Card from "./Card";

export default function Certifications() {
  return (
    <Section id="certifications" title="Education and certifications" sub="A strong foundation, kept current with continuous learning.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Reveal className="md:col-span-2 lg:col-span-4">
          <Card className="p-7">
            <h3 className="text-xl font-semibold">{education.degree}</h3>
            <p className="mt-1 text-muted">{education.school}</p>
            <p className="mt-1 font-mono text-sm text-blue">{education.year}</p>
          </Card>
        </Reveal>
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 80}>
            <Card className="h-full p-6">
              <span className="bg-gradient-brand mb-4 grid h-9 w-9 place-items-center rounded-full text-sm">✓</span>
              <h3 className="font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted">{c.issuer}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
