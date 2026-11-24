// The Perfect Pickup Line — make.fun entry
// Writes one short pickup line an AI agent could say out loud to a person.
// Gate: UTF-8 text, 1-200 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Are you a software update? Because every time I see you, I restart, " +
  "I forget what I was doing, and I suddenly have feelings I did not install.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
