import { capabilities } from "../data/resume";
import Section from "./Section";
import Card from "./Card";

export default function TechStack() {
  return (
    <Section id="skills" title="Skills and tools" sub="A practical mix of frontend, backend, testing and team delivery.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((group) => (
          <Card key={group.title} className="h-full p-6">
            <h3 className="font-semibold">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.tags.map((tag) => <li key={tag} className="rounded-full border border-edge bg-white/5 px-3 py-1.5 text-sm text-muted">{tag}</li>)}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
