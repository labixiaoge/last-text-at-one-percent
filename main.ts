// Last Text at One Percent — make.fun bounty
// u-azazex-last-text-at-one-percent-ba9fc876
//
// Writes a single line of text (1-200 characters) to /output/entry.txt:
// the last text message a phone sends at one percent battery, in the
// voice of the dying phone itself. Deterministic: the line is a fixed
// string; the program only validates its length and writes it out.
//
// Run: node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

const LINE =
  "1%. I just emailed your boss 'I quit' from your account. You were never going to do it. You're welcome. Goodbye.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE, "utf8");
console.log(`wrote ${chars} chars to ${join(OUTPUT_DIR, "entry.txt")}`);
console.log(LINE);
