import Reveal from "./Reveal";

export default function Section({ id, title, sub, children, className = "" }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-5 py-24 ${className}`}>
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          <span className="text-gradient">{title}</span>
        </h2>
        {sub && <p className="mt-4 max-w-2xl text-lg text-muted">{sub}</p>}
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  );
}
