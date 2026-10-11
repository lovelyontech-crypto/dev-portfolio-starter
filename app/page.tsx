import { profile, links, architecture, experience, projects, skillGroups, domains, credentials, events } from "@/lib/site-data";

function initials(company: string) {
  return company.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase();
}

export default function Home() {
  return (
    <div className="container">
      {/* ---------- Header: photo + name ---------- */}
      <header id="dhead" className="row">
        <div id="dpic">
          {profile.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={profile.photo} alt={profile.name} />
          ) : (
            <span className="avatar-fallback" aria-label={profile.name}>{profile.initials}</span>
          )}
        </div>
        <div id="ddesc">
          <h1>{profile.name}</h1>
          <h2>{profile.title}. {profile.tagline}.</h2>
          <div className="icons">
            <a className="iico" href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
            <a className="iico" href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a className="iico" href={links.resume} target="_blank" rel="noreferrer" aria-label="Résumé"><DocIcon /></a>
            <a className="iico" href={`mailto:${links.email}`} aria-label="Email"><MailIcon /></a>
          </div>
          <div id="demail">{links.email}</div>
        </div>
      </header>

      <hr />

      {/* ---------- Solution architecture ---------- */}
      <section id="architecture" aria-label="Solution architecture">
        <p className="arch-statement">{architecture.statement}</p>
        <ul className="chips" aria-label="Core capabilities">
          {architecture.capabilities.map((c) => (
            <li key={c}><SkillIcon name={c} />{c}</li>
          ))}
        </ul>
        <div className="row cards">
          {architecture.areas.map((a, i) => (
            <div className="card arch-card" key={a.name} style={{ "--accent": ACCENTS[i % ACCENTS.length] } as React.CSSProperties}>
              <div className="arch-head">
                <span className="arch-icon"><SkillIcon name={a.name} /></span>
                <span className="card-num">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <b>{a.name}</b>
              <p>{a.summary}</p>
              <p className="evidence"><span className="label">In practice:</span> {a.evidence}</p>
            </div>
          ))}
        </div>
      </section>

      <hr />

      {/* ---------- Timeline ---------- */}
      <section aria-label="Experience">
        <div className="row intro">
          <div className="timespan">&nbsp;</div>
          <div className="ico" />
          <div className="desc"><p>{profile.summary}</p></div>
        </div>
        {experience.map((role) => (
          <div className="row" key={role.company + role.period}>
            <div className="timespan">{role.period.replace(" — ", " - ")}</div>
            <div className="ico">
              <div className="entry-dot" />
              {role.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={role.logo} alt={role.company} />
              ) : (
                <div className="logo-fallback" aria-hidden="true">{initials(role.company)}</div>
              )}
            </div>
            <div className="desc">
              <p>
                <b>{role.title}</b> at <b>{role.company}</b> — {role.focus}.
              </p>
              <ul>
                {role.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
              <div className="stack">{role.stack.join(" · ")}</div>
            </div>
          </div>
        ))}
      </section>

      {/* ---------- Projects ---------- */}
      <section id="projects">
        <div className="ctitle">Projects</div>
        <div className="row cards">
          {projects.map((p) => (
            <div className="card" key={p.name}>
              <b>{p.href ? <a href={p.href} target="_blank" rel="noreferrer">{p.name}</a> : p.name}</b>
              <p>{p.description}</p>
              <div className="stack">{p.stack.join(" · ")}</div>
              {p.source && <p style={{ marginTop: 6 }}><a href={p.source} target="_blank" rel="noreferrer">source</a></p>}
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Talks (hidden while empty) ---------- */}
      {events.length > 0 && (
        <section id="events">
          <div className="ctitle">Talks</div>
          <ul className="plain-list">
            {events.map((e) => (
              <li key={e.title + e.date}>
                {e.href ? <a href={e.href} target="_blank" rel="noreferrer">{e.title}</a> : e.title}
                <span className="label"> — {e.type}, {e.event}, {e.location}, {e.date}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ---------- Skills & domains ---------- */}
      <section id="skills">
        <div className="ctitle">Skills</div>
        <ul className="plain-list">
          {skillGroups.map((g) => (
            <li key={g.name}><span className="label">{g.name}:</span> {g.items.join(", ")}</li>
          ))}
          {domains.map((d) => (
            <li key={d.name}><span className="label">{d.name}:</span> {d.detail}</li>
          ))}
        </ul>
      </section>

      {/* ---------- Credentials ---------- */}
      <section id="credentials">
        <div className="ctitle">Education &amp; certifications</div>
        <ul className="plain-list">
          {credentials.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </section>

      <hr style={{ marginTop: 40 }} />
      <footer id="footer">
        Get in touch: <a href={`mailto:${links.email}`}>{links.email}</a> · <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> · <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
      </footer>
    </div>
  );
}

const ACCENTS = ["#2563eb", "#0891b2", "#7c3aed", "#059669", "#d97706"];

const ICON_PATHS: Record<string, React.ReactNode> = {
  layers: <><path d="M12 3 2 8l10 5 10-5-10-5Z" /><path d="m2 13 10 5 10-5" /><path d="m2 17.5 10 5 10-5" opacity=".6" /></>,
  nodes: <><rect x="9" y="2.5" width="6" height="5" rx="1" /><rect x="2.5" y="16.5" width="6" height="5" rx="1" /><rect x="15.5" y="16.5" width="6" height="5" rx="1" /><path d="M12 7.5v4.5M5.5 16.5V12h13v4.5" /></>,
  cloud: <path d="M7 18.5h10.5a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.6 9.1 4.75 4.75 0 0 0 7 18.5Z" />,
  shield: <><path d="M12 2.5 4 5.5v6c0 4.6 3.4 8.6 8 10 4.6-1.4 8-5.4 8-10v-6l-8-3Z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></>,
  database: <><ellipse cx="12" cy="5.5" rx="7.5" ry="3" /><path d="M4.5 5.5v13c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-13" /><path d="M4.5 12c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3" /></>,
  integration: <><path d="M4 8h13l-3.5-3.5" /><path d="M20 16H7l3.5 3.5" /></>,
  mesh: <><circle cx="12" cy="4" r="2" /><circle cx="4.5" cy="9.5" r="2" /><circle cx="19.5" cy="9.5" r="2" /><circle cx="7.5" cy="19" r="2" /><circle cx="16.5" cy="19" r="2" /><path d="M10.3 5.2 6.2 8.3M13.7 5.2l4.1 3.1M5.2 11.4l1.6 5.7M18.8 11.4l-1.6 5.7M9.5 19h5M6.5 9.5h11M12 6v11" opacity=".75" /></>,
  recovery: <><path d="M3.5 12a8.5 8.5 0 0 1 14.6-5.9L20.5 8.5" /><path d="M20.5 3.5v5h-5" /><path d="M20.5 12a8.5 8.5 0 0 1-14.6 5.9L3.5 15.5" /><path d="M3.5 20.5v-5h5" /></>,
  document: <><path d="M14 2.5H6.5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8l-5.5-5.5Z" /><path d="M14 2.5V8h5.5M8.5 13h7M8.5 17h5" /></>,
};

const SKILL_ICON: Record<string, string> = {
  "Solution Architecture": "layers",
  "System Design": "nodes",
  "Cloud Architecture": "cloud",
  "Security & IAM": "shield",
  "Data Architecture": "database",
  "Integration Patterns": "integration",
  "Service Mesh": "mesh",
  "Disaster Recovery & Failover": "recovery",
  "Architecture Decision Records": "document",
  "Solution & system design": "nodes",
  "Cloud & infrastructure architecture": "cloud",
  "Integration & data architecture": "database",
  "Security & non-functional requirements": "shield",
  "Architecture governance & communication": "document",
};

function SkillIcon({ name }: { name: string }) {
  const paths = ICON_PATHS[SKILL_ICON[name] ?? "layers"];
  return (
    <svg className="skill-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths}
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.63 1.21 3.27.93.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.61 5.21-5.1 5.49.4.35.76 1.02.76 2.06v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.5h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.6 4.77 6v5.56h-4v-4.93c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.62v5.01h-4v-11Z" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm7 1.5V9h5.5L13 3.5ZM8 13v1.5h8V13H8Zm0 3.5V18h8v-1.5H8Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.4 2 7.6 5.6L19.6 7H4.4ZM4 8.6V17h16V8.6l-8 5.9-8-5.9Z" />
    </svg>
  );
}
