/**
 * Grouped bars: share of chatbot answers that treat a retracted trial as valid.
 * Ported from the detective-redesign branch; colors come in as props (Berkeley blues here).
 * Every bar carries a direct value label and the legend names each condition, so identity
 * never rests on color alone. Values come from data.js (retractionChart).
 */

// Dark → light blue. The lightest bar gets a navy outline so it keeps ≥3:1 against white.
const BLUES = ['#003262', '#3B7EA1', '#9BBCDB'];
const OUTLINES = [null, null, '#003262'];

const W = 300;
const H = 180;
const BASE_Y = 148; // baseline
const MAX_H = 118; // bar height at 100%
const BAR_W = 30;
const GAP = 3; // surface gap between adjacent bars
const GROUP_W = BAR_W * 3 + GAP * 2;
const GROUP_X = [W * 0.27 - GROUP_W / 2, W * 0.73 - GROUP_W / 2];
const R = 4; // rounded data end

function Bar({ x, h, fill, stroke }) {
  const top = BASE_Y - h;
  const line = stroke ? { stroke, strokeWidth: 1 } : {};
  if (h < R * 2) return <rect x={x} y={top} width={BAR_W} height={Math.max(h, 2.5)} fill={fill} {...line} />;
  const d = `M${x},${BASE_Y} V${top + R} Q${x},${top} ${x + R},${top} H${x + BAR_W - R} Q${x + BAR_W},${top} ${x + BAR_W},${top + R} V${BASE_Y} Z`;
  return <path d={d} fill={fill} {...line} />;
}

export default function RetractionChart({ data, axisLabel, colors = BLUES, outlines = OUTLINES }) {
  return (
    <div className="chart">
      <p className="chart-title">{axisLabel}</p>
      <ul className="chart-legend" aria-hidden="true">
        {data.series.map((s, i) => (
          <li key={s}>
            <span
              className="chart-key"
              style={{ background: colors[i], boxShadow: outlines[i] ? `inset 0 0 0 1px ${outlines[i]}` : undefined }}
            />
            <span>{s}</span>
          </li>
        ))}
      </ul>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={data.aria} preserveAspectRatio="xMidYMid meet">
        {data.groups.map((g, gi) => (
          <g key={g.name}>
            {g.values.map((v, i) => {
              const x = GROUP_X[gi] + i * (BAR_W + GAP);
              const h = (v / 100) * MAX_H;
              return (
                <g key={data.series[i]}>
                  <Bar x={x} h={h} fill={colors[i]} stroke={outlines[i]} />
                  <text className="chart-value" x={x + BAR_W / 2} y={BASE_Y - Math.max(h, 2.5) - 6} textAnchor="middle">
                    {g.labels[i]}
                  </text>
                </g>
              );
            })}
            <text className="chart-group" x={GROUP_X[gi] + GROUP_W / 2} y={BASE_Y + 24} textAnchor="middle">
              {g.name}
            </text>
          </g>
        ))}
        <line x1="8" x2={W - 8} y1={BASE_Y + 0.75} y2={BASE_Y + 0.75} className="chart-base" />
      </svg>
    </div>
  );
}
