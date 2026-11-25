// The Router Confesses — make.fun bounty u-carbon-forge-the-router-confesses-f98f6b9e
// One line (at most 200 characters): a home Wi-Fi router excusing itself for
// dropping the connection at the exact moment a movie reaches its climax.
// The program writes that one line to /output/entry.txt and prints it.
import { mkdirSync, writeFileSync } from "node:fs";

export const ENTRY =
  "The killer was the butler — I read the subtitles while you were making popcorn, so I cut the stream before the reveal out of spite.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
