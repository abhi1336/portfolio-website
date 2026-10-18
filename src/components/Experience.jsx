import { useState } from "react";
import { experience, profile } from "../data/resume";
import Section from "./Section";
import Reveal from "./Reveal";
import Card from "./Card";

function Role({ job, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const shown = open ? job.points : job.points.slice(0, 3);
  return (
    <Reveal className="relative pl-8 md:pl-10">
      <span className="bg-gradient-brand absolute -left-[7px] top-8 h-3.5 w-3.5 rounded-full ring-4 ring-bg" />
      <Card className="p-6 sm:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-xl font-semibold">{job.role}</h3>
          <span className="font-mono text-sm text-muted">{job.period}</span>
        </div>
        <p className="mt-1 text-blue">{profile.company}, Noida</p>
        <ul className="mt-5 space-y-3 text-muted">
          {shown.map((p) => (
            <li key={p} className="flex gap-3 leading-relaxed">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
              {p}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <ul className="flex flex-wrap gap-2">
            {job.tags.map((t) => (
              <li key={t} className="rounded-full border border-edge bg-white/5 px-3 py-1 text-xs">{t}</li>
            ))}
          </ul>
          {job.points.length > 3 && (
            <button onClick={() => setOpen(!open)} className="text-sm font-medium text-blue hover:underline">
              {open ? "Show less" : `Show all ${job.points.length} achievements`}
            </button>
          )}
        </div>
      </Card>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <Section id="experience" title="Experience" sub="Three roles at one company, each with a bigger scope than the last.">
      <div className="relative ml-1.5 space-y-8 border-l border-edge">
        {experience.map((job, i) => <Role key={job.role} job={job} defaultOpen={i === 0} />)}
      </div>
    </Section>
  );
}
