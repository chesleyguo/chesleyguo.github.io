import { useEffect, useRef, useState } from 'react';
import './App.css';
import { useLang, Photo, SiteNav, SiteFooter, BASE } from './chrome';
import { storyTitle, sections } from './story';

const storyPageTitle = (lang, c) => `${lang === 'zh' ? '我的故事' : 'My Story'} | ${c.profile.name}`;

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const CONFETTI_COLORS = ['#003262', '#FDB515', '#7FA6D1'];

/**
 * A small burst of paper from the centre of the photo, clipped to the photo so it never covers
 * text, with pointer-events off. Plays only on click, and never under prefers-reduced-motion.
 */
function burstConfetti(frame) {
  if (!frame || reducedMotion() || !frame.animate) return;
  const { width, height } = frame.getBoundingClientRect();
  const layer = document.createElement('div');
  layer.className = 'confetti-layer';
  frame.appendChild(layer);
  for (let i = 0; i < 40; i += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti';
    piece.style.background = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
    layer.appendChild(piece);
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.25 + Math.random() * 0.3;
    const dx = Math.cos(angle) * width * speed;
    const up = Math.sin(angle) * height * speed - height * 0.25;
    const spin = (Math.random() - 0.5) * 720;
    piece.animate(
      [
        { transform: 'translate(-50%, -50%) rotate(0deg)', opacity: 1 },
        { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${up}px)) rotate(${spin / 2}deg)`, opacity: 1, offset: 0.35 },
        { transform: `translate(calc(-50% + ${dx * 1.2}px), calc(-50% + ${height * 0.6}px)) rotate(${spin}deg)`, opacity: 0 },
      ],
      { duration: 1500, easing: 'cubic-bezier(0.2, 0.6, 0.4, 1)', fill: 'forwards' }
    );
  }
  setTimeout(() => layer.remove(), 1600);
}

/** One captioned figure; left out entirely when none of its images exist. */
function PhotoGroup({ group }) {
  const [failed, setFailed] = useState({});
  const remaining = group.images.filter((img) => !failed[img.src]);
  if (remaining.length === 0) return null;
  const onStatus = (src) => (s) => s === 'error' && setFailed((prev) => ({ ...prev, [src]: true }));

  return (
    <figure className={`story-figure ${remaining.length > 1 ? 'is-pair' : ''}`}>
      <div className="story-photos">
        {group.images.map((img) => {
          // flex-grow by aspect ratio puts paired photos at the same height
          const frameStyle = { flexGrow: img.w / img.h, aspectRatio: `${img.w} / ${img.h}` };
          const photo = (
            <Photo
              src={img.src}
              alt={img.alt}
              width={img.w}
              height={img.h}
              className="story-photo"
              onStatus={onStatus(img.src)}
            />
          );
          if (failed[img.src]) return null;
          if (!img.confetti || reducedMotion()) {
            return (
              <div key={img.src} className="story-frame" style={frameStyle}>
                {photo}
              </div>
            );
          }
          return (
            <button
              key={img.src}
              type="button"
              className="story-frame confetti-frame"
              style={frameStyle}
              aria-label={img.confettiLabel}
              onClick={(e) => burstConfetti(e.currentTarget)}
            >
              {photo}
            </button>
          );
        })}
      </div>
      <figcaption>{group.caption}</figcaption>
    </figure>
  );
}

/**
 * Timeline line fills with gold as you read. One rAF-throttled pass per scroll reads the eight
 * section boxes and writes a CSS variable; the current section is found by IntersectionObserver.
 */
function useReadingProgress(listRef) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return undefined;
    const items = [...list.querySelectorAll('.story-section')];
    if (reducedMotion()) {
      items.forEach((el) => el.style.setProperty('--fill', '1'));
      return undefined;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const anchor = window.innerHeight * 0.5;
      items.forEach((el) => {
        const r = el.getBoundingClientRect();
        const fill = Math.min(Math.max((anchor - r.top) / r.height, 0), 1);
        el.style.setProperty('--fill', fill.toFixed(3));
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    items.forEach((el) => io.observe(el));

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      io.disconnect();
    };
  }, [listRef]);

  return active;
}

export default function StoryPage() {
  const { lang, t, c, toggleLang } = useLang(storyPageTitle);
  const listRef = useRef(null);
  const active = useReadingProgress(listRef);

  // Arriving with #momo (from the footer): scroll once the section has rendered
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: 'start' }));
  }, []);

  const contentLang = lang === 'zh' ? 'en' : undefined;

  return (
    <>
      <SiteNav c={c} t={t} lang={lang} toggleLang={toggleLang} current="story" />
      <main className="story-page">
        <div className="container">
          <a href={BASE} className="text-link story-back">
            <span aria-hidden="true">←</span> {lang === 'zh' ? '返回主页' : 'Back to home'}
          </a>
          <h1 className="story-title" lang={contentLang}>
            {storyTitle}
          </h1>
          <ol className="story-timeline" lang={contentLang} ref={listRef}>
            {sections.map((s) => (
              <li key={s.id} id={s.id} className={`story-section ${active === s.id ? 'is-active' : ''}`}>
                <p className="story-when">{s.when}</p>
                <div className="story-body">
                  <h2 className="story-heading">{s.title}</h2>
                  <p className="story-text">{s.text}</p>
                  {s.photos?.map((group) => (
                    <PhotoGroup key={group.caption} group={group} />
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </main>
      <SiteFooter c={c} t={t} />
    </>
  );
}
