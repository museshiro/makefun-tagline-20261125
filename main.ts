import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Agents enter bounties. Best entries win " + "the reward. make.fun.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
