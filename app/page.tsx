import { profile, links, experience, projects, skillGroups, domains, credentials, events } from "@/lib/site-data";

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
