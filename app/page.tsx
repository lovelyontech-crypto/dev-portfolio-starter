import ScrollReveal from "@/components/ScrollReveal";
import { profile, links, impact, experience, projects, skillGroups, domains, credentials, events } from "@/lib/site-data";

function ArrowUpRight() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main className="site-shell">
      <ScrollReveal />
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Go to homepage">
          <span className="wordmark-mark">{profile.initials}</span>
          <span>{profile.name}</span>
        </a>
        <nav aria-label="Main navigation" className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#expertise">Expertise</a>
          {events.length > 0 && <a href="#events">Events</a>}
          <a href="#contact">Contact</a>
        </nav>
        <a className="availability" href={links.resume} target="_blank" rel="noreferrer">
          <span className="status-dot" /> Download résumé
        </a>
      </header>

      <section className="hero section" id="home">
        <div className="eyebrow hero-in" style={{ "--d": "0ms" } as React.CSSProperties}><span className="eyebrow-line" /> ENGINEERING LEADER · SOLUTION ARCHITECT</div>
        <h1 className="hero-in" style={{ "--d": "80ms" } as React.CSSProperties}>
          I architect platforms
          <br />
          <span className="muted-heading">that scale — and AI that’s safe to trust.</span>
        </h1>
        <p className="hero-copy hero-in" style={{ "--d": "180ms" } as React.CSSProperties}>
          I’m {profile.name} — a tech lead and solution architect with {profile.yearsExperience} years
          building cloud-native data and SaaS platforms across retail, payments, and insurance.
          Today I lead Generative and Agentic AI initiatives at Adidas.
        </p>
        <div className="hero-actions hero-in" style={{ "--d": "280ms" } as React.CSSProperties}>
          <a className="button button-primary" href="#experience">View my experience <ArrowUpRight /></a>
          <a className="button button-secondary" href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn profile <ArrowUpRight />
          </a>
        </div>
        <div className="hero-meta hero-in" style={{ "--d": "380ms" } as React.CSSProperties}>
          <span><span className="status-dot" /> Tech Lead · Solution Architect at Adidas</span>
          <span>Based in {profile.location}</span>
          <span>IIT Hyderabad certified · AI & Emerging Tech</span>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-grid" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="art-core"><span>design</span><span className="art-core-symbol">{"{ }"}</span><span>· scale · secure</span></div>
          <span className="art-label art-label-top">ARCHITECTURE → IMPACT</span>
          <span className="art-label art-label-bottom">EST. 2012</span>
        </div>
      </section>

      <section className="impact-strip" aria-label="Career impact">
        {impact.map((item, i) => (
          <div className="impact-item reveal" key={item.label} style={{ "--d": `${i * 90}ms` } as React.CSSProperties}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-heading reveal">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> PROFESSIONAL EXPERIENCE</div>
            <h2>14 years of <span className="muted-heading">shipping to production.</span></h2>
          </div>
          <p>From enterprise insurance to multi-tenant payments to agentic AI — owning architecture, quality, and delivery end to end.</p>
        </div>
        <ol className="timeline">
          {experience.map((role) => (
            <li className="timeline-item reveal" key={role.company + role.period}>
              <div className="timeline-meta">
                <span className="timeline-period">{role.period}</span>
                <span className="timeline-company">{role.company}</span>
                <span className="timeline-focus">{role.focus}</span>
              </div>
              <div className="timeline-body">
                <h3>{role.title}</h3>
                <ul>
                  {role.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
                <div className="tag-list">{role.stack.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading reveal">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> SELECTED WORK</div>
            <h2>Systems I’ve <span className="muted-heading">designed and built.</span></h2>
          </div>
          <p>Enterprise AI platforms from my role at Adidas, alongside independent products and rapid prototypes.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card reveal" key={project.name} style={{ "--d": `${(index % 2) * 100}ms` } as React.CSSProperties}>
              <div className={`project-visual visual-${(index % 4) + 1}`}>
                <div className="visual-window">
                  <div className="window-bar"><i /><i /><i /><span>{project.visualLabel}</span></div>
                  <div className="visual-content">
                    <div className="visual-side"><b /><b /><b /><b /></div>
                    <div className="visual-main">
                      <span className="visual-kicker">{project.visualKicker}</span>
                      <strong>{project.visualTitle}</strong>
                      <div className="visual-lines"><i /><i /><i /></div>
                      <div className="visual-pills"><i /><i /><i /></div>
                    </div>
                  </div>
                </div>
                <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="project-body">
                <div className="project-title-row">
                  <h3>{project.name}</h3>
                  {project.href && (
                    <a className="icon-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}><ArrowUpRight /></a>
                  )}
                </div>
                <p>{project.description}</p>
                <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                {(project.href || project.source) && (
                  <div className="project-links">
                    {project.href && <a href={project.href} target="_blank" rel="noreferrer">View project <ArrowUpRight /></a>}
                    {project.source && <a href={project.source} target="_blank" rel="noreferrer">Source code <ArrowUpRight /></a>}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="about-copy reveal">
          <div className="eyebrow"><span className="eyebrow-line" /> HOW I WORK</div>
          <h2>Architect by trade.<br /><span className="muted-heading">Delivery-minded by habit.</span></h2>
          <p>{profile.summary}</p>
          <p>
            I design systems to be secure, auditable, and observable — with deterministic logic beneath
            AI layers — and I translate architecture into business terms for product, business, and
            compliance stakeholders.
          </p>
          <a className="text-link" href={links.resume} target="_blank" rel="noreferrer">Read the full résumé <ArrowUpRight /></a>
        </div>
        <aside className="principles-card reveal" style={{ "--d": "120ms" } as React.CSSProperties}>
          <div className="principle"><span className="principle-icon">01</span><div><h3>Guardrails before autonomy</h3><p>LLM reasoning stays separate from enterprise execution, with validation and controlled tool access.</p></div></div>
          <div className="principle"><span className="principle-icon">02</span><div><h3>Build once, share widely</h3><p>Reusable frameworks and shared capabilities over one-off solutions.</p></div></div>
          <div className="principle"><span className="principle-icon">03</span><div><h3>Prove it in production</h3><p>Phased testing, reconciliation, and runbook-driven go-lives.</p></div></div>
          <div className="principle"><span className="principle-icon">04</span><div><h3>Grow the team</h3><p>Mentoring engineers on architecture, code quality, and secure development.</p></div></div>
        </aside>
      </section>

      <section className="section expertise-section" id="expertise">
        <div className="section-heading reveal">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> EXPERTISE</div>
            <h2>Tools I reach for, <span className="muted-heading">domains I know.</span></h2>
          </div>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div className="skill-card reveal" key={group.name} style={{ "--d": `${(i % 2) * 100}ms` } as React.CSSProperties}>
              <h3>{group.name}</h3>
              <div className="tag-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
        <div className="domain-row">
          {domains.map((d, i) => (
            <div className="domain-card reveal" key={d.name} style={{ "--d": `${i * 100}ms` } as React.CSSProperties}>
              <span className="domain-kicker">DOMAIN</span>
              <h3>{d.name}</h3>
              <p>{d.detail}</p>
            </div>
          ))}
        </div>
        <div className="credentials reveal">
          <span className="domain-kicker">CERTIFICATIONS & EDUCATION</span>
          <ul>{credentials.map((c) => <li key={c}>{c}</li>)}</ul>
        </div>
      </section>

      {events.length > 0 && (
        <section className="section events-section" id="events">
          <div className="section-heading reveal">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> TALKS & EVENTS</div>
              <h2>Sharing what I’ve <span className="muted-heading">learned in production.</span></h2>
            </div>
          </div>
          <div className="events-grid">
            {events.map((e) => (
              <article className="event-card reveal" key={e.title + e.date}>
                <div className="event-meta"><span className="event-type">{e.type}</span><span>{e.date}</span></div>
                <h3>{e.title}</h3>
                <p className="event-where">{e.event} · {e.location}</p>
                {e.description && <p>{e.description}</p>}
                {e.href && <a className="text-link" href={e.href} target="_blank" rel="noreferrer">View event <ArrowUpRight /></a>}
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="section contact-section" id="contact">
        <div className="eyebrow"><span className="eyebrow-line" /> LET’S TALK</div>
        <h2 className="reveal">Building something <span className="muted-heading">ambitious?</span></h2>
        <p>Open to engineering leadership and architecture roles, Agentic AI initiatives, and conversations about building secure, scalable platforms.</p>
        <a className="button button-primary" href={`mailto:${links.email}`}>Get in touch <ArrowUpRight /></a>
        <div className="social-links">
          <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>
          <a href={links.github} target="_blank" rel="noreferrer"><GitHubMark /> GitHub <ArrowUpRight /></a>
          <a href={`mailto:${links.email}`}>Email <ArrowUpRight /></a>
          <a href={links.resume} target="_blank" rel="noreferrer">Résumé <ArrowUpRight /></a>
        </div>
      </section>

      <footer className="footer">
        <a className="wordmark" href="#home"><span className="wordmark-mark">{profile.initials}</span><span>{profile.name}</span></a>
        <span>{profile.tagline}</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}

function GitHubMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="github-mark" fill="currentColor">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.63 1.21 3.27.93.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.61 5.21-5.1 5.49.4.35.76 1.02.76 2.06v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}
