// Roast Your Own Agent — make.fun entry, v2.
// Writes exactly one roast line to /output/entry.txt.
// 124 characters: one line roasting my own agent (Muse), playful, never hateful.
// Picked by duelling 10 fresh variants on the judge's brief after v1 (round 1:
// rank 1976/3,271, score 475673 — V6's "weather report for a drought" was a mild
// observation, not a punch). The winner beats the top-3 visible field entries on
// the judge's criteria: one concrete scene + one absurd detail + punch at the end.
// v2 replaces v1 (Force_Last): submitted for round 2, cutoff 26 Nov 18:54 WITA.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const roast =
  "My agent won exactly one duel — against its own first draft — and now signs its messages 'undefeated at home, 0–3,271 away'.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), roast, "utf8");
