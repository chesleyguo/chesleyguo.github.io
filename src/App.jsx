import { Fragment, useEffect, useState } from 'react';
import './App.css';
import { content, ui, DEFAULT_LANG, RESUME_URL } from './i18n';
import RetractionChart from './figures/RetractionChart';
import LandfillMap from './figures/LandfillMap';

/**
 * Jiayi (Chesley) Guo's Portfolio
 * Content is defined in ./data.js (English) and ./data.zh.js (Chinese); this component only
 * handles rendering and interaction.
 */

const external = { target: '_blank', rel: 'noreferrer' };
const BASE = import.meta.env.BASE_URL;

const makeValidators = (t) => ({
  name: (v) => (v.trim().length < 2 ? t.errName : ''),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : t.errEmail),
  message: (v) => (v.trim().length < 10 ? t.errMessage : ''),
});

const readSavedLang = () => {
  try {
    const saved = localStorage.getItem('lang');
    return Object.hasOwn(content, saved) ? saved : DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
};

const emptyForm = { name: '', email: '', subject: '', message: '' };

// Simple 24×24 line icons for the research-direction cards
const ICONS = {
  chat: (
    <>
      <path d="M4 5h16v11H9l-5 4z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </>
  ),
  policy: (
    <>
      <path d="M4 17a8 8 0 1 1 16 0" />
      <path d="M12 17l4.5-5" />
      <path d="M3 20h18" />
    </>
  ),
  environment: (
    <>
      <path d="M3 20h18" />
      <path d="M6 20v-5h4v5M14 20v-8h4v8" />
      <path d="M8 11c0-2 1.5-2.5 1.5-4.5M16 8.5c0-1.6 1.2-2 1.2-3.6" />
    </>
  ),
};

function Icon({ name }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

/** Headshot from public/; renders nothing until the file has loaded, and nothing if it is missing. */
function Photo({ src, alt }) {
  const [state, setState] = useState('loading');
  if (state === 'error') return null;
  return (
    <img
      className={`glance-photo ${state === 'ok' ? '' : 'is-loading'}`}
      src={`${BASE}${src}`}
      alt={alt}
      onLoad={() => setState('ok')}
      onError={() => setState('error')}
    />
  );
}

function Authors({ authors }) {
  return authors.split(/(Guo, J\.)/).map((part, i) =>
    part === 'Guo, J.' ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>
  );
}

function App() {
  const [lang, setLang] = useState(readSavedLang);
  const t = ui[lang];
  const {
    NEXT_LINE,
    profile,
    glance,
    directions,
    socials,
    navLinks,
    education,
    honors,
    experience,
    teaching,
    research,
    researchFilters,
    retractionChart,
    landfillMap,
    publications,
  } = content[lang];
  const validators = makeValidators(t);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [sent, setSent] = useState(false);

  // ============================================
  // LANGUAGE
  // ============================================

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = `${profile.name} | ${lang === 'zh' ? '个人主页' : 'Portfolio'}`;
    try {
      localStorage.setItem('lang', lang);
    } catch {
      // storage unavailable (private mode): language just won't persist
    }
    setErrors({});
    setTouched({});
  }, [lang, profile.name]);

  const toggleLang = () => setLang((l) => (l === 'zh' ? 'en' : 'zh'));

  // ============================================
  // SCROLL & ACTIVE NAV HIGHLIGHT
  // ============================================

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ block: 'start' });
    setMenuOpen(false);
  };

  // Direction cards jump to their project; clear the filter first so the card is on the page
  const openProject = (e, id) => {
    e.preventDefault();
    setFilter('all');
    requestAnimationFrame(() => {
      const card = document.getElementById(`project-${id}`);
      card?.scrollIntoView({ block: 'start' });
      card?.focus({ preventScroll: true });
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      document.querySelectorAll('section[id]').forEach((section) => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActiveSection(section.id);
        }
      });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ============================================
  // FORM VALIDATION
  // ============================================

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
    setSent(false);
    if (validators[name]) {
      setErrors((errs) => ({ ...errs, [name]: validators[name](value) }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const nextErrors = Object.fromEntries(
      Object.entries(validators).map(([field, validate]) => [field, validate(form[field])])
    );
    setErrors(nextErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.values(nextErrors).every((msg) => !msg)) {
      // No backend: open the visitor's mail client with the message pre-filled
      const subject = encodeURIComponent(form.subject || t.defaultSubject(form.name));
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setForm(emptyForm);
      setErrors({});
      setTouched({});
      setSent(true);
    }
  };

  const fieldClass = (field) => {
    if (!touched[field]) return '';
    return errors[field] ? 'error' : 'success';
  };

  const visibleResearch = filter === 'all' ? research : research.filter((p) => p.category === filter);
  const featuredResearch = visibleResearch.filter((p) => p.featured);
  const otherResearch = visibleResearch.filter((p) => !p.featured);
  const categoryLabel = (id) => researchFilters.find((f) => f.id === id)?.label ?? id;

  const figureFor = (project) => {
    if (project.figure === 'retraction-chart') {
      return (
        <figure className="figure">
          <div className="chart-box">
            <RetractionChart data={retractionChart} axisLabel={retractionChart.title} />
          </div>
          <figcaption className="figure-caption">{retractionChart.caption}</figcaption>
        </figure>
      );
    }
    if (project.figure === 'landfill-map') return <LandfillMap text={landfillMap} />;
    return null;
  };

  const renderProject = (project) => {
    const figure = figureFor(project);
    return (
      <article
        key={project.id}
        id={`project-${project.id}`}
        tabIndex={-1}
        className={`project-card ${project.featured ? 'featured' : ''} ${figure ? 'has-figure' : ''}`}
      >
        <div className="project-body">
          <p className="project-meta">
            <span>{categoryLabel(project.category)}</span>
            <span>{project.date}</span>
          </p>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-org">
            {project.org} · {project.role}
          </p>
          <dl className="qmf">
            <div>
              <dt>{t.question}</dt>
              <dd>{project.question}</dd>
            </div>
            <div>
              <dt>{t.method}</dt>
              <dd>{project.method}</dd>
            </div>
            {project.finding && (
              <div>
                <dt>{t.finding}</dt>
                <dd>{project.finding}</dd>
              </div>
            )}
            {!project.finding && project.status && (
              <div>
                <dt>{t.status}</dt>
                <dd>{project.status}</dd>
              </div>
            )}
          </dl>
          {project.also && <p className="project-also">{project.also}</p>}
          <ul className="project-tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          {project.link && (
            <a href={project.link} className="text-link" {...external}>
              {project.linkLabel} <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
        {figure && <div className="project-figure">{figure}</div>}
      </article>
    );
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav id="navbar" aria-label={lang === 'zh' ? '主导航' : 'Main'}>
        <div className="nav-brand">
          <a href="#home" onClick={(e) => scrollTo(e, 'home')}>
            {profile.shortName}
          </a>
        </div>
        <ul id="nav-menu" className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`nav-link ${activeSection === id ? 'active' : ''}`}
                aria-current={activeSection === id ? 'true' : undefined}
                onClick={(e) => scrollTo(e, id)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <button type="button" className="lang-toggle" onClick={toggleLang} aria-label={t.switchLabel} title={t.switchLabel}>
            {t.switchTo}
          </button>
          <button
            type="button"
            className={`nav-toggle ${menuOpen ? 'active' : ''}`}
            aria-label={t.menu}
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-main">
            <p className="hero-eyebrow">
              {profile.degree} · {profile.school}
            </p>
            <h1 className="hero-title">{profile.name}</h1>
            <p className="hero-next">{NEXT_LINE}</p>
            <p className="hero-interests">
              <span className="hero-interests-label">{t.interests}</span>
              <span className="hero-interests-list">
                {profile.researchInterests.map((item, i) => (
                  <Fragment key={item}>
                    {i > 0 && <span aria-hidden="true"> · </span>}
                    <span className="interest">{item}</span>
                  </Fragment>
                ))}
              </span>
            </p>
            <p className="hero-tagline">{profile.tagline}</p>
            <div className="hero-buttons">
              <a href="#research" className="btn btn-primary" onClick={(e) => scrollTo(e, 'research')}>
                {t.viewWork}
              </a>
              <a href="#contact" className="btn btn-secondary" onClick={(e) => scrollTo(e, 'contact')}>
                {t.getInTouch}
              </a>
              <a href={RESUME_URL} className="btn btn-secondary" {...external}>
                {t.resume}
              </a>
            </div>
          </div>

          <aside className="glance" aria-labelledby="glance-title">
            <Photo src={profile.photo} alt={t.photoAlt} />
            <div className="glance-card">
              <h2 id="glance-title" className="glance-title">
                {t.glance}
              </h2>
              <h3 className="glance-label">{t.glanceEducation}</h3>
              <ul className="glance-list">
                {glance.education.map((e) => (
                  <li key={e.degree}>
                    <span>{e.degree}</span>
                    <span className="glance-year">{e.year}</span>
                  </li>
                ))}
              </ul>
              <h3 className="glance-label">{t.glanceAffiliations}</h3>
              <ul className="glance-list">
                {glance.affiliations.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <p className="glance-links">
                <a href={`mailto:${profile.email}`}>Email</a>
                <span aria-hidden="true">·</span>
                <a href={profile.linkedin} {...external}>
                  LinkedIn
                </a>
                <span aria-hidden="true">·</span>
                <a href={RESUME_URL} {...external}>
                  CV
                </a>
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Research directions */}
      <div className="directions-band">
        <div className="container">
          <h2 className="sr-only">{t.directions}</h2>
          <ul className="directions">
            {directions.map((d) => (
              <li key={d.project}>
                <a href={`#project-${d.project}`} className="direction-card" onClick={(e) => openProject(e, d.project)}>
                  <Icon name={d.icon} />
                  <span className="direction-title">{d.title}</span>
                  <span className="direction-text">{d.text}</span>
                  <span className="direction-more">
                    {t.seeProject} <span aria-hidden="true">→</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2>{t.about}</h2>
          <div className="prose">
            {profile.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          {profile.positionality && (
            <div className="prose positionality">
              <h3 className="subsection-title">{t.positionality}</h3>
              <p>{profile.positionality}</p>
            </div>
          )}

          <div className="about-grid">
            <div>
              <h3 className="subsection-title">{t.education}</h3>
              <ul className="plain-list">
                {education.map((edu) => (
                  <li key={edu.school} className="card education-card">
                    <div className="card-row">
                      <h4>{edu.school}</h4>
                      <span className="card-date">{edu.date}</span>
                    </div>
                    <p className="card-role">{edu.degree}</p>
                    <p className="card-meta">
                      {edu.detail}
                      {edu.gpa && ` · ${t.gpa} ${edu.gpa}`}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="subsection-title">{t.honors}</h3>
              <ul className="dated-list">
                {honors.map((honor) => (
                  <li key={honor.title}>
                    <span className="dated-list-date">{honor.year}</span>
                    <span>{honor.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section section-alt">
        <div className="container">
          <h2>{t.experience}</h2>
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.company} className="card timeline-item">
                <div className="card-row">
                  <h3 className="timeline-company">{job.company}</h3>
                  <span className="card-date">{job.date}</span>
                </div>
                <div className="card-row">
                  <p className="card-role">{job.role}</p>
                  <span className="card-meta">{job.location}</span>
                </div>
                <p className="card-meta">{job.team}</p>
                <ul className="timeline-highlights">
                  {job.highlights.map((point) => (
                    <li key={point.slice(0, 32)}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <h3 className="subsection-title">{t.teaching}</h3>
          <ul className="dated-list">
            {teaching.map((item) => (
              <li key={item.role}>
                <span className="dated-list-date">{item.date}</span>
                <span>
                  <strong>{item.role}</strong>
                  {lang === 'zh' ? '，' : ', '}
                  {item.org}
                  <span className="dated-list-detail">{item.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="section">
        <div className="container">
          <h2>{t.research}</h2>

          <div className="filter-buttons" role="group" aria-label={t.filterLabel}>
            {researchFilters.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                className={`filter-btn ${filter === id ? 'active' : ''}`}
                aria-pressed={filter === id}
                onClick={() => setFilter(id)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="projects-featured">
            {featuredResearch.map(renderProject)}
          </div>
          {otherResearch.length > 0 && (
            <div className="projects-grid">
              {otherResearch.map(renderProject)}
            </div>
          )}

          <h3 className="subsection-title">{t.publications}</h3>
          <ol className="pub-list">
            {publications.map((pub) => (
              <li key={pub.title} className="pub-item">
                <span className="pub-status">{pub.status}</span>
                <p>
                  <Authors authors={pub.authors} />
                  {pub.year && <span> ({pub.year}).</span>} <span>{pub.title}</span>
                  {pub.venue && (
                    <>
                      {' '}
                      <em>{pub.venue}</em>.
                    </>
                  )}
                  {pub.link && (
                    <>
                      {' '}
                      <a href={pub.link} className="text-link" {...external}>
                        {t.pubLink} <span aria-hidden="true">↗</span>
                      </a>
                    </>
                  )}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-alt">
        <div className="container">
          <h2>{t.getInTouch}</h2>
          <div className="contact-content">
            <p className="contact-intro">{t.contactIntro(NEXT_LINE)}</p>

            <form id="contact-form" className="contact-form" onSubmit={handleFormSubmit} noValidate>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">{t.name}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    className={fieldClass('name')}
                    onChange={handleInputChange}
                  />
                  {touched.name && errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t.email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    className={fieldClass('email')}
                    onChange={handleInputChange}
                  />
                  {touched.email && errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group form-group-full">
                  <label htmlFor="subject">{t.subject}</label>
                  <input type="text" id="subject" name="subject" value={form.subject} onChange={handleInputChange} />
                </div>

                <div className="form-group form-group-full">
                  <label htmlFor="message">{t.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={form.message}
                    className={fieldClass('message')}
                    onChange={handleInputChange}
                  ></textarea>
                  {touched.message && errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <div className="form-group form-group-full">
                  <button type="submit" className="btn btn-primary">
                    {t.send}
                  </button>
                  {sent && <div className="success-message">{t.sent}</div>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}. {t.rights}
          </p>
          <div className="social-links">
            {[...socials, { label: t.resume, url: RESUME_URL }].map(({ label, url }) => (
              <a key={label} href={url} {...(!url.startsWith('mailto:') && external)}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
