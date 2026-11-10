"""Build src/data/landfills.csv (the hero map) from the landfill_methane_dev repo.

Usage (from the portfolio root):
    python3 scripts/build_landfills_csv.py                       # default: --source cusworth
    python3 scripts/build_landfills_csv.py --source npe          # after the paper is accepted
    python3 scripts/build_landfills_csv.py --repo ../landfill_methane_dev

Sources for the `emission` column (kg CH4/h):
  cusworth  Overpass mean published in Cusworth et al. (2024, Science 383:1499), Data S1.
            11 facilities were detected but never quantified; their emission is left empty
            and the map draws them as hollow circles ("detected but not quantified").
  npe       Posterior median of time-averaged point-source emission E from our NPE
            (results/npe_posteriors.csv). Unpublished: keep off the public site until accepted.
            When you switch, also update `mapSource` in src/data.js and src/data.zh.js.

Output columns: name, lat, lon, emission. Names are the GHGRP facility names (latest reporting year).
"""

import argparse
import csv
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "src" / "data" / "landfills.csv"


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--source", choices=["cusworth", "npe"], default="cusworth")
    ap.add_argument("--repo", type=Path, default=ROOT.parent / "landfill_methane_dev")
    args = ap.parse_args()
    repo = args.repo

    obs = list(csv.DictReader(open(repo / "data/interim/cusworth_facility_observations.csv")))

    locations = {}
    for r in csv.DictReader(open(repo / "data/external/landfill_dashboard/landfill_locations.csv")):
        locations[(r["landfill_id"], r["ghgrp_id"])] = r

    names = {}  # ghgrp_id -> (year, name), keep the latest reporting year
    for r in json.load(open(repo / "data/raw/ghgrp/hh_subpart_level_information_2026-11-01.json")):
        key, year = str(r["facility_id"]), int(r["reporting_year"])
        if key not in names or year > names[key][0]:
            names[key] = (year, r["facility_name"])

    npe = {r["ghgrp_id"]: r for r in csv.DictReader(open(repo / "results/npe_posteriors.csv"))}

    rows = []
    for r in obs:
        gid = r["ghgrp_id"]
        loc = locations[(r["landfill_id"], gid)]
        if args.source == "cusworth":
            emission = r["avg_emission_kg_h"]  # empty = detected but not quantified
        else:
            emission = npe[gid]["e_q50"]
        rows.append({
            "name": names[gid][1].strip().title(),
            "lat": f'{float(loc["latitude"]):.5f}',
            "lon": f'{float(loc["longitude"]):.5f}',
            "emission": f"{float(emission):.1f}" if emission else "",
        })

    assert len(rows) == 107, len(rows)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    with open(OUT, "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["name", "lat", "lon", "emission"])
        w.writeheader()
        w.writerows(rows)
    empty = sum(1 for r in rows if not r["emission"])
    print(f"wrote {OUT.relative_to(ROOT)}: {len(rows)} facilities, source={args.source}, {empty} without a value")


if __name__ == "__main__":
    main()
