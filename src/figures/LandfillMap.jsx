/**
 * Map of the 107 U.S. landfills in the airborne methane survey (Cusworth et al., 2024).
 * Adapted from HeroMap on the redesign branch for a small figure on a white card:
 * one-hue blue scale (larger emission = darker and bigger), no fade-in animation.
 * Data: src/data/landfills.csv, built by scripts/build_landfills_csv.py (published values only).
 */
import { useMemo, useState } from 'react';
import { geoAlbersUsa, geoPath } from 'd3-geo';
import { merge, mesh } from 'topojson-client';
import us from 'us-atlas/states-10m.json';
import landfillsCsv from '../data/landfills.csv?raw';
import { parseCsv } from '../lib/csv';

// Standard us-atlas frame: 975 × 610 with geoAlbersUsa at scale 1300
const W = 975;
const H = 610;
const projection = geoAlbersUsa().scale(1300).translate([W / 2, H / 2]);
const path = geoPath(projection);

// All 107 surveyed landfills are in the contiguous U.S.; leave out the Alaska and Hawaii insets
const OFF_MAP = new Set(['02', '15']);
const lower48 = us.objects.states.geometries.filter((g) => !OFF_MAP.has(g.id));
const nation = path(merge(us, lower48));
const borders = path(
  mesh(us, us.objects.states, (a, b) => a !== b && !OFF_MAP.has(a.id) && !OFF_MAP.has(b.id))
);

// Sequential blue, light → Berkeley Blue. The light end still clears 3:1 against the map fill.
const RAMP = ['#5a8bbb', '#4a7fb0', '#2d6396', '#164a7c', '#003262'];
const hexToRgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
function blue(t) {
  const x = Math.min(Math.max(t, 0), 1) * (RAMP.length - 1);
  const i = Math.min(Math.floor(x), RAMP.length - 2);
  const a = hexToRgb(RAMP[i]);
  const b = hexToRgb(RAMP[i + 1]);
  const f = x - i;
  return `rgb(${a.map((v, k) => Math.round(v + (b[k] - v) * f)).join(',')})`;
}

const R_MAX = 15;
const R_MIN = 3;
const fmt = (v) => Math.round(v).toLocaleString('en-US');

function useLandfills() {
  return useMemo(() => {
    const rows = parseCsv(landfillsCsv)
      .map((r) => {
        const xy = projection([Number(r.lon), Number(r.lat)]);
        const value = r.emission === '' ? null : Number(r.emission);
        return xy && { name: r.name, x: xy[0], y: xy[1], value };
      })
      .filter(Boolean);

    const values = rows.filter((r) => r.value !== null).map((r) => r.value);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const logMin = Math.log10(min);
    const logSpan = Math.log10(max) - logMin;
    const t = (v) => (Math.log10(v) - logMin) / logSpan;

    rows.forEach((r) => {
      r.r = r.value === null ? 4 : Math.max(R_MIN, R_MAX * Math.sqrt(r.value / max));
      r.color = r.value === null ? null : blue(t(r.value));
    });
    // Big dots underneath, hollow rings on top
    rows.sort((a, b) => (a.value === null) - (b.value === null) || b.r - a.r);

    const ticks = [100, 1000]
      .map((v) => ({ label: fmt(v), pos: (Math.log10(v) - logMin) / logSpan }))
      .filter((k) => k.pos > 0.2 && k.pos < 0.65); // keep clear of the end labels
    const gradient = Array.from({ length: 9 }, (_, i) => blue(i / 8)).join(', ');
    return { rows, min, max, ticks, gradient, quantified: values.length };
  }, []);
}

export default function LandfillMap({ text }) {
  const { rows, min, max, ticks, gradient, quantified } = useLandfills();
  const [hover, setHover] = useState(null);
  const show = (d) => (e) => {
    const box = e.currentTarget.ownerSVGElement.parentNode.getBoundingClientRect();
    setHover({ d, x: e.clientX - box.left, y: e.clientY - box.top, w: box.width });
  };

  return (
    <figure className="figure map">
      <div className="map-frame" onPointerLeave={() => setHover(null)}>
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={text.aria(rows.length, rows.length - quantified)}>
          <path d={nation} className="map-nation" />
          <path d={borders} className="map-borders" />
          {rows.map((d) => (
            <circle
              key={d.name + d.x}
              cx={d.x}
              cy={d.y}
              r={d.r}
              className={d.value === null ? 'dot dot-hollow' : 'dot'}
              style={d.color ? { fill: d.color } : undefined}
              onPointerEnter={show(d)}
              onPointerMove={show(d)}
              onPointerDown={show(d)}
            />
          ))}
        </svg>
        {hover && (
          <div
            className={`map-tip ${hover.x > hover.w - 200 ? 'is-flipped' : ''}`}
            style={{ left: hover.x, top: hover.y }}
            aria-hidden="true"
          >
            <span className="map-tip-name">{hover.d.name}</span>
            <span>{hover.d.value === null ? text.hollow : `${fmt(hover.d.value)} ${text.unit}`}</span>
          </div>
        )}
      </div>
      <div className="map-legend" aria-hidden="true">
        <span className="map-legend-scale">
          <span className="map-legend-bar" style={{ background: `linear-gradient(90deg, ${gradient})` }} />
          <span className="map-legend-ticks">
            <span style={{ left: '0%' }}>{fmt(min)}</span>
            {ticks.map((k) => (
              <span key={k.label} style={{ left: `${k.pos * 100}%` }}>
                {k.label}
              </span>
            ))}
            <span style={{ left: '100%' }}>{fmt(max)}</span>
          </span>
        </span>
        <span className="map-legend-unit">{text.measure}</span>
        <span className="map-legend-hollow">
          <svg width="14" height="14">
            <circle cx="7" cy="7" r="5" className="dot-hollow" />
          </svg>
          <span>{text.hollow}</span>
        </span>
      </div>
      <figcaption className="figure-caption">{text.caption}</figcaption>
    </figure>
  );
}
