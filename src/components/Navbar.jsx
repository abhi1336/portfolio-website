import { useState } from "react";
import { profile } from "../data/resume";

const links = [
  ["#about", "About"],
  ["#skills", "Skills"],
  ["#experience", "Experience"],
  ["#projects", "Projects"],
  ["#github", "GitHub"],
  ["#contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="glass mx-auto flex max-w-4xl items-center justify-between rounded-full px-5 py-2.5">
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <span className="bg-gradient-brand grid h-7 w-7 place-items-center rounded-full text-xs font-bold">AK</span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>
        <ul className="hidden gap-6 text-sm text-muted md:flex">
          {links.map(([href, label]) => (
            <li key={href}><a href={href} className="transition hover:text-white">{label}</a></li>
          ))}
        </ul>
        <a href={profile.resumeFile} download className="hidden rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black transition hover:bg-white/85 md:block">
          Resume
        </a>
        <button className="rounded-full border border-edge px-3 py-1 text-sm md:hidden" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      {open && (
        <ul className="glass mx-auto mt-2 max-w-4xl rounded-2xl p-3 md:hidden">
          {links.map(([href, label]) => (
            <li key={href}><a href={href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 hover:bg-white/5">{label}</a></li>
          ))}
          <li><a href={profile.resumeFile} download className="block rounded-lg px-3 py-2.5 font-medium text-blue">Download resume</a></li>
        </ul>
      )}
    </header>
  );
}
