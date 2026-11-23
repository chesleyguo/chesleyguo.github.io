import { Fragment, Suspense, lazy, useEffect, useState } from 'react';
import './App.css';
import { content, RESUME_URL } from './i18n';
import { useLang, Photo, SiteNav, SiteFooter, external, BASE } from './chrome';
import RetractionChart from './figures/RetractionChart';
import HeroTexture from './figures/HeroTexture';

// The map pulls in the U.S. state outlines (~100 KB); load it only when the page needs it
const LandfillMap = lazy(() => import('./figures/LandfillMap'));
const OaklandCameraMap = lazy(() => import('./figures/OaklandCameraMap'));

/**
 * Jiayi (Chesley) Guo's Portfolio
 * Content is defined in ./data.js (English) and ./data.zh.js (Chinese); this component only
 * handles rendering and interaction.
 */

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

function Authors({ authors }) {
  return authors
    .split(/(Guo, J\.)/)
    .map((part, i) => (part === 'Guo, J.' ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>));
}

const homeTitle = (lang, c) => `${c.profile.name} | ${lang === 'zh' ? '个人主页' : 'Portfolio'}`;

// Thumbnails under Positionality that lead to the story page
const STORY_THUMBS = [
  {
    src: 'assets/story-hopcroft.jpg',
    w: 1200,
    h: 900,
    alt: 'Chesley receiving a certificate from John Hopcroft at a summer school ceremony',
  },
  {
    src: 'assets/story-commencement.jpg',
    w: 1200,
    h: 900,
    alt: 'Streamers flying over graduates in Memorial Stadium at UIUC commencement, 2024',
  },
  { src: 'assets/story-dog-now.jpg', w: 1097, h: 823, alt: 'Momo (墨墨), my little brother, looking up at the camera' },
];

// About, Experience, Research, Contact: gold number + serif title + rule with a gold tab
function SectionTitle({ num, children }) {
  return (
    <div className="section-head">
      <span className="section-num" aria-hidden="true">
        {num}
      </span>
      <h2>{children}</h2>
    </div>
  );
}

function App() {
  const { lang, t, c, toggleLang } = useLang(homeTitle);
  const {
    NEXT_LINE,
    profile,
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
    quote,
    cameraMap,
    publications,
  } = c;
  // Chinese fields left empty fall back to the English text (marked lang="en" for screen readers)
  const fromEn = (key) =>
    profile[key]
      ? { text: profile[key] }
      : { text: content.en.profile[key], lang: lang === 'en' ? undefined : 'en' };
  const researchQuestion = fromEn('researchQuestion');
  const positionality = fromEn('positionality');
  const [activeSection, setActiveSection] = useState('home');
  const [filter, setFilter] = useState('all');

  // ============================================
  // LANGUAGE
  // ============================================

  // Arriving from another page with #section (e.g. story.html → #research): the browser looks for
  // the anchor before React has rendered it, so scroll there once the page is on screen.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: 'start' }));
  }, []);

  // ============================================
  // SCROLL & ACTIVE NAV HIGHLIGHT
  // ============================================

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ block: 'start' });
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

  const visibleResearch = filter === 'all' ? research : research.filter((p) => p.category === filter);
  const featuredResearch = visibleResearch.filter((p) => p.featured);
  const otherResearch = visibleResearch.filter((p) => !p.featured);
  const categoryLabel = (id) => researchFilters.find((f) => f.id === id)?.label ?? id;

  // Earlier (non-featured) projects: one compact row each instead of a full card
  const renderEarlier = (project) => (
    <li key={project.id} id={`project-${project.id}`} tabIndex={-1} className="earlier-item">
      <span className="earlier-date">{project.date}</span>
      <div>
        <h4 className="earlier-title">{project.title}</h4>
        <p className="earlier-org">
          {project.org} · {project.role}
        </p>
        <p className="earlier-summary">{project.finding ? `${project.question} ${project.finding}` : project.question}</p>
      </div>
    </li>
  );

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
    if (project.figure === 'landfill-map') {
      return (
        <Suspense fallback={<div className="map-placeholder" />}>
          <LandfillMap text={landfillMap} />
        </Suspense>
      );
    }
    if (project.figure === 'camera-map') {
      return (
        <Suspense fallback={<div className="map-placeholder" />}>
          <OaklandCameraMap text={cameraMap} />
        </Suspense>
      );
    }
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
          {project.stats && (
            <dl className="project-stats">
              {project.stats.map((st, i) => (
                <div key={st.value} className={`project-stat ${i === 0 ? 'is-primary' : 'is-secondary'}`}>
                  <dt>{st.value}</dt>
                  <dd>{st.label}</dd>
                </div>
              ))}
            </dl>
          )}
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
      <SiteNav c={c} t={t} lang={lang} toggleLang={toggleLang} current={activeSection} onSectionClick={scrollTo} />

      {/* Hero Section */}
      <section id="home" className="hero">
        <HeroTexture />
        <p className="hero-credit">{t.heroCredit}</p>
        <div className="hero-content">
          <div className="hero-main">
            <p className="hero-eyebrow">
              {profile.degree} · {profile.school}
            </p>
            <h1 className="hero-title">{profile.name}</h1>
            <p className="hero-next">{NEXT_LINE}</p>
            {researchQuestion.text && (
              <p className="hero-question" lang={researchQuestion.lang}>
                {researchQuestion.text}
              </p>
            )}
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
            <p className="hero-affiliations">
              {profile.heroAffiliations.split(' · ').map((part, i) => (
                <Fragment key={part}>
                  {i > 0 && <span aria-hidden="true"> · </span>}
                  <span className="nowrap">{part}</span>
                </Fragment>
              ))}
            </p>
          </div>

          <figure className="hero-portrait">
            <div className="portrait-wrap">
              <span className="portrait-frame" aria-hidden="true" />
              <Photo
                src={profile.portrait}
                alt={t.photoAlt}
                width="640"
                height="800"
                eager
                className="portrait-photo"
              />
            </div>
            <figcaption className="portrait-caption">
              {/* each part stays on one line; breaks fall only between parts */}
              {profile.portraitCaption.split(' · ').map((part, i) => (
                <Fragment key={part}>
                  {i > 0 && <span aria-hidden="true"> · </span>}
                  <span className="nowrap">{part}</span>
                </Fragment>
              ))}
            </figcaption>
          </figure>
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
                  <span className="direction-top">
                    <Icon name={d.icon} />
                    <span className="direction-number" aria-hidden="true">
                      {String(directions.indexOf(d) + 1).padStart(2, '0')}
                    </span>
                  </span>
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

      {/* Quote banner */}
      <aside className="quote-band" aria-label={quote.label}>
        <div className="container quote-inner">
          <span className="quote-mark" aria-hidden="true">
            “
          </span>
          <div>
            <p className="quote-text" lang={quote.text ? undefined : lang === 'zh' ? 'en' : undefined}>
              {quote.text || content.en.quote.text}
            </p>
            <p className="quote-meta">
              <span>{quote.label}</span>
              <span aria-hidden="true"> · </span>
              <a href={`${BASE}story.html`}>
                {t.readStory} <span aria-hidden="true">→</span>
              </a>
            </p>
          </div>
        </div>
      </aside>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <SectionTitle num="01">{t.about}</SectionTitle>
          <div className="about-layout">
            <div className="about-main">
              <div className="prose about-bio">
                {profile.bio.map((paragraph, i) => (
                  <p key={paragraph.slice(0, 24)} className={i === 0 ? 'lead' : undefined}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {positionality.text && (
                <div className="prose positionality">
                  <h3 className="subsection-title">{t.positionality}</h3>
                  <p lang={positionality.lang}>{positionality.text}</p>
                </div>
              )}

              <div className="story-teaser">
                <div className="story-thumbs">
                  {STORY_THUMBS.map((img) => (
                    <Photo key={img.src} src={img.src} alt={img.alt} width={img.w} height={img.h} className="story-thumb" />
                  ))}
                </div>
                <a href={`${BASE}story.html`} className="text-link story-link">
                  {t.readStory} <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <aside className="about-side">
              <h3 className="side-title">{t.education}</h3>
              <ul className="plain-list">
                {education.map((edu) => (
                  <li key={edu.school} className="card education-card">
                    <h4>{edu.school}</h4>
                    <p className="card-role">{edu.degree}</p>
                    <p className="card-meta">
                      {edu.detail}
                      {edu.gpa && ` · ${t.gpa} ${edu.gpa}`}
                    </p>
                    <p className="card-date">{edu.date}</p>
                  </li>
                ))}
              </ul>

              <h3 className="side-title">{t.honors}</h3>
              <ul className="dated-list honors-list">
                {honors.map((honor) => (
                  <li key={honor.title}>
                    <span className="dated-list-date">{honor.year}</span>
                    <span>{honor.title}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="section section-alt">
        <div className="container">
          <SectionTitle num="02">{t.research}</SectionTitle>

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

          <div className="projects-featured">{featuredResearch.map(renderProject)}</div>
          {otherResearch.length > 0 && (
            <>
              <h3 className="subsection-title">{t.earlierResearch}</h3>
              <ol className="earlier-list">{otherResearch.map(renderEarlier)}</ol>
            </>
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

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <SectionTitle num="03">{t.experience}</SectionTitle>
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

      {/* Contact Section */}
      <section id="contact" className="section section-alt">
        <div className="container">
          <SectionTitle num="04">{t.getInTouch}</SectionTitle>
          <div className="contact-layout">
            <div className="contact-content">
              <p className="contact-intro">{t.contactIntro(NEXT_LINE)}</p>

              <div className="contact-actions">
                <a href={`mailto:${profile.email}`} className="btn btn-primary">
                  {t.emailMe}
                </a>
                <a href={RESUME_URL} className="btn btn-secondary" {...external}>
                  {t.resume}
                </a>
              </div>
            </div>

            <aside className="glance-card contact-card" aria-labelledby="contact-direct-title">
              <h3 id="contact-direct-title" className="glance-title">
                {t.contactDirect}
              </h3>
              <dl className="contact-list">
                <div>
                  <dt className="glance-label">{t.contactEmail}</dt>
                  <dd>
                    <a href={`mailto:${profile.email}`} className="text-link">
                      {profile.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="glance-label">LinkedIn</dt>
                  <dd>
                    <a href={profile.linkedin} className="text-link" {...external}>
                      linkedin.com/in/jg1023
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="glance-label">{t.contactLocation}</dt>
                  <dd>{profile.location}</dd>
                </div>
                <div>
                  <dt className="glance-label">CV</dt>
                  <dd>
                    <a href={RESUME_URL} className="text-link" {...external}>
                      {t.resume} <span aria-hidden="true">↗</span>
                    </a>
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <SiteFooter c={c} t={t} />
    </>
  );
}

export default App;
