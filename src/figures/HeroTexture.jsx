/**
 * Faint map texture behind the navy hero: a very light outline of the contiguous U.S. and the 107
 * landfills from the airborne-survey study, in the same Albers USA projection as the research map.
 * Spans the hero width, vertically centred. Purely decorative (aria-hidden). Dots look like
 * #7FA6D1 at 0.18–0.28 opacity and the outline like 0.12, drawn as solid tints of the navy so
 * overlaps never get lighter; every hero text stays >= 4.5:1. Hidden under 768px (CSS).
 */
import { geoAlbersUsa } from 'd3-geo';
import landfillsCsv from '../data/landfills.csv?raw';
import { parseCsv } from '../lib/csv';
import { US_OUTLINE } from '../data/us-outline';

const W = 975;
const H = 610;
const projection = geoAlbersUsa().scale(1300).translate([W / 2, H / 2]);

const rows = parseCsv(landfillsCsv)
  .map((r) => {
    const xy = projection([Number(r.lon), Number(r.lat)]);
    return xy && { x: xy[0], y: xy[1], value: r.emission === '' ? null : Number(r.emission) };
  })
  .filter(Boolean);
const max = Math.max(...rows.filter((r) => r.value !== null).map((r) => r.value));

// #7FA6D1 at opacity `a` over the navy hero, as a solid colour. Solid fills don't stack where dots
// overlap, so no spot gets lighter than a single 0.28 dot (keeps every hero text >= 4.5:1).
const NAVY = [0x00, 0x32, 0x62];
const DOT = [0x7f, 0xa6, 0xd1];
const tint = (a) => `rgb(${NAVY.map((n, i) => Math.round(n + (DOT[i] - n) * a)).join(',')})`;

// radius 2–7 and opacity 0.18–0.28, both by emission (square-root scale)
const dots = rows.map((r) => {
  const k = r.value === null ? 0 : Math.sqrt(r.value / max);
  return { x: r.x, y: r.y, r: 2 + 5 * k, fill: tint(0.18 + 0.1 * k) };
});

// Trim a little empty sea above and below so the map can run wider across the hero
const VIEW = `0 35 ${W} 540`;

export default function HeroTexture() {
  return (
    <svg className="hero-texture" viewBox={VIEW} preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
      <path d={US_OUTLINE} fill="none" stroke={tint(0.12)} strokeWidth="1" vectorEffect="non-scaling-stroke" />
      {dots.map((d, i) => (
        <circle key={i} cx={d.x.toFixed(1)} cy={d.y.toFixed(1)} r={d.r.toFixed(1)} fill={d.fill} />
      ))}
    </svg>
  );
}
