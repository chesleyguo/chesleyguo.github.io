/**
 * Locations of the 18 speed safety cameras in Oakland's pilot, on a faint outline of the city
 * limits. Same look as the landfill map: light ground, thin grey line, solid navy dots.
 * Locations only (no speeds, counts or results). Data are precomputed by
 * scripts/build_oakland_map.mjs from public OakDOT and Census files.
 */
import { useState } from 'react';
import { VIEW, OAKLAND_OUTLINE, CAMERAS } from '../data/oakland/oakland-map';

export default function OaklandCameraMap({ text }) {
  const [hover, setHover] = useState(null);
  const show = (cam) => (e) => {
    const box = e.currentTarget.ownerSVGElement.parentNode.getBoundingClientRect();
    setHover({ cam, x: e.clientX - box.left, y: e.clientY - box.top, w: box.width });
  };

  return (
    <figure className="figure map">
      <div className="map-frame" onPointerLeave={() => setHover(null)}>
        <svg viewBox={`0 0 ${VIEW.w} ${VIEW.h}`} role="img" aria-label={text.aria}>
          <path d={OAKLAND_OUTLINE} className="city-outline" fillRule="evenodd" />
          {CAMERAS.map((cam) => (
            <circle
              key={cam.n}
              cx={cam.x}
              cy={cam.y}
              r="7"
              className="camera-dot"
              onPointerEnter={show(cam)}
              onPointerMove={show(cam)}
              onPointerDown={show(cam)}
            />
          ))}
        </svg>
        {hover && (
          <div
            className={`map-tip ${hover.x > hover.w - 220 ? 'is-flipped' : ''}`}
            style={{ left: hover.x, top: hover.y }}
            aria-hidden="true"
          >
            <span className="map-tip-name">{hover.cam.street}</span>
            <span>{hover.cam.cross}</span>
          </div>
        )}
      </div>
      <div className="map-legend" aria-hidden="true">
        <span className="map-legend-hollow">
          <svg width="14" height="14">
            <circle cx="7" cy="7" r="6" className="camera-dot" />
          </svg>
          <span>{text.camera}</span>
        </span>
        <span className="map-legend-hollow">
          <svg width="22" height="14">
            <line x1="1" x2="21" y1="7" y2="7" className="city-outline-key" />
          </svg>
          <span>{text.limits}</span>
        </span>
      </div>
      <figcaption className="figure-caption">{text.caption}</figcaption>
    </figure>
  );
}
