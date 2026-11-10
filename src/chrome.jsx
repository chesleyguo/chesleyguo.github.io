/**
 * Pieces shared by every page (index.html and story.html): language state, the navy nav bar,
 * the navy footer, and an image that stays hidden unless its file exists.
 */
import { useEffect, useState } from 'react';
import { content, ui, DEFAULT_LANG, LANG_KEY, RESUME_URL } from './i18n';

export const external = { target: '_blank', rel: 'noreferrer' };
export const BASE = import.meta.env.BASE_URL;

const readSavedLang = () => {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    return Object.hasOwn(content, saved) ? saved : DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
};

/** Current language; first visit is English, and only a manual switch is remembered. */
export function useLang(pageTitle) {
  const [lang, setLang] = useState(readSavedLang);
  const c = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = pageTitle(lang, c);
  }, [lang, c, pageTitle]);

  const toggleLang = () => {
    const next = lang === 'zh' ? 'en' : 'zh';
    setLang(next);
    try {
      localStorage.setItem(LANG_KEY, next);
    } catch {
      // storage unavailable (private mode): the choice just won't persist
    }
  };

  return { lang, t: ui[lang], c, toggleLang };
}

/**
 * Image from public/. `width`/`height` reserve its space while it loads (no layout shift), and it
 * loads lazily unless `eager`. If the file is missing the image is removed instead of showing a
 * broken icon.
 */
export function Photo({ src, alt, width, height, eager = false, className = '', style, onStatus }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <img
      className={className}
      style={style}
      src={`${BASE}${src}`}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onLoad={() => onStatus?.('ok')}
      onError={() => {
        setFailed(true);
        onStatus?.('error');
      }}
    />
  );
}

/**
 * Navy nav bar. On the homepage section links scroll in place (onSectionClick); on other pages
 * they point back to the homepage. Links with an `href` (My Story) are separate pages.
 */
export function SiteNav({ c, t, lang, toggleLang, current, onSectionClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const onHome = Boolean(onSectionClick);
  const hrefFor = (link) => (link.href ? `${BASE}${link.href}` : onHome ? `#${link.id}` : `${BASE}#${link.id}`);

  return (
    <nav id="navbar" aria-label={lang === 'zh' ? '主导航' : 'Main'}>
      <div className="nav-brand">
        <a
          href={onHome ? '#home' : BASE}
          onClick={onHome ? (e) => (setMenuOpen(false), onSectionClick(e, 'home')) : undefined}
        >
          {c.profile.shortName}
        </a>
      </div>
      <ul id="nav-menu" className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        {c.navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={hrefFor(link)}
              className={`nav-link ${current === link.id ? 'active' : ''}`}
              aria-current={current === link.id ? (link.href ? 'page' : 'true') : undefined}
              onClick={
                onHome && !link.href ? (e) => (setMenuOpen(false), onSectionClick(e, link.id)) : undefined
              }
            >
              {link.label}
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
  );
}

export function SiteFooter({ c, t }) {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-left">
          <a href={`${BASE}story.html#momo`} className="momo-link" aria-label={t.momoLabel}>
            <img
              className="momo-avatar"
              src={`${BASE}assets/momo-avatar.jpg`}
              alt=""
              width="48"
              height="48"
              loading="lazy"
              decoding="async"
            />
            <span className="momo-text" aria-hidden="true">
              {t.momoSays}
            </span>
          </a>
          <p>
            &copy; {new Date().getFullYear()} {c.profile.name}. {t.rights}
          </p>
        </div>
        <div className="social-links">
          {[...c.socials, { label: t.resume, url: RESUME_URL }].map(({ label, url }) => (
            <a key={label} href={url} {...(!url.startsWith('mailto:') && external)}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
