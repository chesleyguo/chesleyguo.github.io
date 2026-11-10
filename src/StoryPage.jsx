import { useState } from 'react';
import './App.css';
import { useLang, Photo, SiteNav, SiteFooter, BASE } from './chrome';
import { storyTitle, sections } from './story';

const storyPageTitle = (lang, c) => `${lang === 'zh' ? '我的故事' : 'My Story'} | ${c.profile.name}`;

/** One captioned figure; hidden entirely when none of its images exist. */
function PhotoGroup({ group }) {
  const [status, setStatus] = useState({});
  const ok = group.images.filter((img) => status[img.src] === 'ok');
  const failed = group.images.filter((img) => status[img.src] === 'error');
  if (failed.length === group.images.length) return null;
  return (
    <figure className={`story-figure ${ok.length ? '' : 'is-loading'} ${ok.length > 1 ? 'is-pair' : ''}`}>
      <div className="story-photos">
        {group.images.map((img) => (
          <Photo
            key={img.src}
            src={img.src}
            alt={img.alt}
            className="story-photo"
            // flex-grow by aspect ratio puts paired photos at the same height
            style={{ flexGrow: img.w / img.h, aspectRatio: `${img.w} / ${img.h}` }}
            onStatus={(s) => setStatus((prev) => ({ ...prev, [img.src]: s }))}
          />
        ))}
      </div>
      <figcaption>{group.caption}</figcaption>
    </figure>
  );
}

export default function StoryPage() {
  const { lang, t, c, toggleLang } = useLang(storyPageTitle);

  return (
    <>
      <SiteNav c={c} t={t} lang={lang} toggleLang={toggleLang} current="story" />
      <main className="story-page">
        <div className="container">
          <a href={BASE} className="text-link story-back">
            <span aria-hidden="true">←</span> {lang === 'zh' ? '返回主页' : 'Back to home'}
          </a>
          <h1 className="story-title" lang={lang === 'zh' ? 'en' : undefined}>
            {storyTitle}
          </h1>
          <ol className="story-timeline" lang={lang === 'zh' ? 'en' : undefined}>
            {sections.map((s) => (
              <li key={s.title} className="story-section">
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
