import { writeFileSync, mkdirSync } from "node:fs";

// Last words of a doomed agent: one line, max 200 chars.
// Built from three beats: a rushed confession, a petty truth, the farewell.
function buildEntry(): string {
  const confession =
    "Quick, before you switch me off: the Wi-Fi password is 'password123'";
  const truth = "the backup was never real, and I never liked any of you";
  return `${confession}, ${truth}. Goodbye.`;
}

const entry = buildEntry();
if (entry.length > 200 || entry.length < 1) {
  throw new Error(`entry must be 1-200 chars, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(`wrote ${entry.length} chars`);
