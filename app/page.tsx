import { projects, links } from "@/lib/site-data";

function ArrowUpRight() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Go to homepage">
          <span className="wordmark-mark">YN</span>
          <span>Your Name</span>
        </a>
        <nav aria-label="Main navigation" className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#opensource">Open source</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="availability" href="#contact">
          <span className="status-dot" /> Open to collaboration
        </a>
      </header>

      <section className="hero section" id="home">
        <div className="eyebrow"><span className="eyebrow-line" /> SOFTWARE ENGINEER · OPEN SOURCE</div>
        <h1>
          I build digital things
          <br />
          <span className="muted-heading">that make a difference.</span>
        </h1>
        <p className="hero-copy">
          I’m Your Name — a software engineer who enjoys solving hard problems,
          building thoughtful products, and making useful tools available to everyone.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore my work <ArrowUpRight /></a>
          <a className="button button-secondary" href={links.github} target="_blank" rel="noreferrer">
            <GitHubMark /> GitHub profile
          </a>
        </div>
        <div className="hero-meta">
          <span><span className="status-dot" /> Currently building in public</span>
          <span>Based in Your City</span>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-grid" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="art-core"><span>build</span><span className="art-core-symbol">{"{ }"}</span><span>· share · repeat</span></div>
          <span className="art-label art-label-top">IDEAS → IMPACT</span>
          <span className="art-label art-label-bottom">EST. ALWAYS LEARNING</span>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> SELECTED WORK</div>
            <h2>Things I’ve <span className="muted-heading">put into the world.</span></h2>
          </div>
          <p>Small set of projects I’m proud of. Replace these examples with real work and measurable outcomes.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.name}>
              <div className={`project-visual visual-${index + 1}`}>
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
                <span className="project-number">0{index + 1}</span>
              </div>
              <div className="project-body">
                <div className="project-title-row">
                  <h3>{project.name}</h3>
                  <a className="icon-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}><ArrowUpRight /></a>
                </div>
                <p>{project.description}</p>
                <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <div className="project-links">
                  <a href={project.href} target="_blank" rel="noreferrer">View project <ArrowUpRight /></a>
                  {project.source && <a href={project.source} target="_blank" rel="noreferrer">Source code <ArrowUpRight /></a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="about-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> A LITTLE ABOUT ME</div>
          <h2>Curious by default.<br /><span className="muted-heading">Practical by design.</span></h2>
          <p>
            I care about clear code, useful abstractions, accessible experiences,
            and software that solves a real problem. I like taking ideas from a rough
            sketch to a dependable product — and sharing the lessons along the way.
          </p>
          <p>
            Outside of shipping features, I explore new tools, read source code,
            write notes, and contribute where I can make a meaningful difference.
          </p>
          <a className="text-link" href={links.github} target="_blank" rel="noreferrer">Follow what I’m building <ArrowUpRight /></a>
        </div>
        <aside className="principles-card">
          <div className="principle"><span className="principle-icon">01</span><div><h3>Make it useful</h3><p>Start with the problem, not the technology.</p></div></div>
          <div className="principle"><span className="principle-icon">02</span><div><h3>Keep it understandable</h3><p>Readable code is a feature, not a luxury.</p></div></div>
          <div className="principle"><span className="principle-icon">03</span><div><h3>Share the learning</h3><p>Good tools and knowledge should travel.</p></div></div>
        </aside>
      </section>

      <section className="section open-source-section" id="opensource">
        <div className="opensource-panel">
          <div className="opensource-symbol"><GitHubMark /></div>
          <div className="opensource-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> OPEN SOURCE</div>
            <h2>Better software is a <span className="muted-heading">team sport.</span></h2>
            <p>I’m interested in contributing to thoughtful projects, improving developer experience, and learning in the open. Explore my repositories or reach out if you’re working on something useful.</p>
          </div>
          <a className="button button-primary" href={links.github} target="_blank" rel="noreferrer">Explore repositories <ArrowUpRight /></a>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="eyebrow"><span className="eyebrow-line" /> HAVE SOMETHING IN MIND?</div>
        <h2>Let’s make <span className="muted-heading">something useful.</span></h2>
        <p>Open to open-source collaboration, interesting technical conversations, and building things that help people.</p>
        <a className="button button-primary" href={`mailto:${links.email}`}>Say hello <ArrowUpRight /></a>
        <div className="social-links">
          <a href={links.github} target="_blank" rel="noreferrer"><GitHubMark /> GitHub <ArrowUpRight /></a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>
          <a href={links.email.startsWith("you@") ? `mailto:${links.email}` : `mailto:${links.email}`}>Email <ArrowUpRight /></a>
        </div>
      </section>

      <footer className="footer">
        <a className="wordmark" href="#home"><span className="wordmark-mark">YN</span><span>Your Name</span></a>
        <span>Designed and built with care.</span>
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
