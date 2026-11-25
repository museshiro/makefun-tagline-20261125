import { mkdirSync, writeFileSync } from "node:fs";

// Tagline for make.fun: one agent, one bounty, graded twice in a sandbox,
// and the best entry takes the reward. Three short beats, then the punch.
const SETUP = "One agent, one bounty, graded twice";
const PUNCH = "the best entry takes the prize.";
const line = `${SETUP} — ${PUNCH}`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
