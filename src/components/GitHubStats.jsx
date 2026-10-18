import { useEffect, useState } from "react";
import { profile } from "../data/resume";
import Section from "./Section";
import Reveal from "./Reveal";
import Card from "./Card";

export default function GitHubStats() {
  const user = profile.github;
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!user) return;
    (async () => {
      try {
        const [u, r] = await Promise.all([
          fetch(`https://api.github.com/users/${user}`).then((x) => x.json()),
          fetch(`https://api.github.com/users/${user}/repos?per_page=100`).then((x) => x.json()),
        ]);
        if (!u.login || !Array.isArray(r)) throw new Error("bad response");
        const langs = {};
        r.forEach((repo) => repo.language && (langs[repo.language] = (langs[repo.language] || 0) + 1));
        const top = Object.entries(langs).sort((a, b) => b[1] - a[1]).slice(0, 5);
        setData({
          repos: u.public_repos,
          followers: u.followers,
          stars: r.reduce((s, x) => s + x.stargazers_count, 0),
          top,
          total: top.reduce((s, [, n]) => s + n, 0),
        });
      } catch {
        setError(true);
      }
    })();
  }, [user]);

  const tiles = data && [
    ["Public repos", data.repos],
    ["Stars earned", data.stars],
    ["Followers", data.followers],
  ];

  return (
    <Section id="github" title="GitHub activity" sub="Open-source and side-project activity, pulled live from GitHub.">
      {!user ? (
        <Card className="p-8 text-muted">
          Add your GitHub username to <code className="font-mono text-white">profile.github</code> in <code className="font-mono text-white">src/data/resume.js</code> and this section will fill in automatically.
        </Card>
      ) : error ? (
        <Card className="p-8 text-muted">
          GitHub stats could not load right now. <a className="text-blue underline" href={`https://github.com/${user}`} target="_blank" rel="noreferrer">View my profile on GitHub</a>.
        </Card>
      ) : !data ? (
        <Card className="p-8 text-muted">Loading GitHub stats...</Card>
      ) : (
        <div className="grid gap-4 lg:grid-cols-3">
          {tiles.map(([label, value]) => (
            <Reveal key={label}>
              <Card className="p-7 text-center">
                <div className="text-gradient text-5xl font-semibold">{value}</div>
                <p className="mt-2 text-muted">{label}</p>
              </Card>
            </Reveal>
          ))}
          <Reveal className="lg:col-span-3">
            <Card className="p-7">
              <h3 className="font-semibold">Top languages</h3>
              <ul className="mt-5 space-y-3">
                {data.top.map(([lang, n]) => (
                  <li key={lang} className="flex items-center gap-4 text-sm">
                    <span className="w-28 text-muted">{lang}</span>
                    <span className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                      <span className="bg-gradient-brand block h-full rounded-full" style={{ width: `${(n / data.total) * 100}%` }} />
                    </span>
                    <span className="w-10 text-right font-mono text-muted">{n}</span>
                  </li>
                ))}
              </ul>
              <img className="mt-8 w-full rounded-lg" alt={`GitHub contribution chart for ${user}`} src={`https://ghchart.rshah.org/7c8cff/${user}`} loading="lazy" />
            </Card>
          </Reveal>
        </div>
      )}
    </Section>
  );
}
