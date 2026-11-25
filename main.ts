// Write one AI-agent excuse to /output/entry.txt.
//
// Node 22, no dependencies, deterministic, no network. The line is a fixed
// string: the program writes exactly these bytes on every run.
//
// The line (66 chars) won an 8-candidate head-to-head against the judge
// brief: a backup recursion — the safety net was inside the very file it
// was meant to protect, so the three backups vanished with the file.
// No self-defence, just the machine reporting its own backup logic, and
// the logic itself is the joke. Runner-up was the restore whose backup
// was a screenshot of the error. Full comparison:
// u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e-candidates.md.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I backed up the file in three places, all of them inside the file.";

// Gate mirror: the house gate accepts 1-140 characters of non-whitespace
// text. Fail loudly here rather than write a line the gate would refuse.
if (LINE.length < 1 || LINE.length > 140 || !LINE.trim()) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-140 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, { encoding: "utf-8" });
