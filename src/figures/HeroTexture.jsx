/**
 * Faint dot texture behind the navy hero: the 107 landfills from the airborne-survey study,
 * placed with the same Albers USA projection as the research map (no outlines drawn).
 * Purely decorative (aria-hidden). Opacity is capped at 0.28 and the layer fades out toward the
 * text column, so no text drops below 4.5:1. Hidden under 768px (CSS).
 */
import { geoAlbersUsa } from 'd3-geo';
import landfillsCsv from '../data/landfills.csv?raw';
import { parseCsv } from '../lib/csv';

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

// radius 2–7, opacity 0.2–0.28, both by emission (square-root scale)
const dots = rows.map((r) => {
  const k = r.value === null ? 0 : Math.sqrt(r.value / max);
  return { x: r.x, y: r.y, r: 2 + 5 * k, o: 0.2 + 0.08 * k };
});

export default function HeroTexture() {
  return (
    <svg className="hero-texture" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
      {dots.map((d, i) => (
        <circle key={i} cx={d.x.toFixed(1)} cy={d.y.toFixed(1)} r={d.r.toFixed(1)} fill="#7FA6D1" fillOpacity={d.o.toFixed(2)} />
      ))}
    </svg>
  );
}
