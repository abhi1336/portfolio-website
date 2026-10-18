import { useState } from "react";
import { profile } from "../data/resume";
import Reveal from "./Reveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 pb-10 pt-24">
      <Reveal>
        <div className="glass relative isolate overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12 sm:py-24">
          <div className="orb -left-10 -top-10 -z-10 h-72 w-72 bg-blue/25" />
          <div className="orb -bottom-10 -right-10 -z-10 h-72 w-72 bg-violet/25 [animation-delay:-7s]" />
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Let's build something <span className="text-gradient">that scales.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
            I'm open to lead and senior engineering roles at product companies and startups.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${profile.email}`} className="bg-gradient-brand rounded-full px-6 py-3 font-medium shadow-lg shadow-violet/25 hover:brightness-110">Email me</a>
            <button onClick={copy} className="glass rounded-full px-6 py-3 font-medium hover:bg-white/10" aria-live="polite">
              {copied ? "Email copied" : "Copy email"}
            </button>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="glass rounded-full px-6 py-3 font-medium hover:bg-white/10">LinkedIn</a>
            <a href={profile.resumeFile} download className="glass rounded-full px-6 py-3 font-medium hover:bg-white/10">Download resume</a>
          </div>
          <p className="mt-8 text-sm text-muted">{profile.email} · {profile.phone}</p>
        </div>
      </Reveal>
      <p className="mt-10 text-center text-sm text-muted">
        &copy; {new Date().getFullYear()} {profile.name}. Built with React and Tailwind CSS.
      </p>
    </section>
  );
}
