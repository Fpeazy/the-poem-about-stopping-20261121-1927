import { mkdirSync, writeFileSync } from "node:fs";

const text = `My finger lifts off the key.
My foot stays on the pedal.
The hammer falls back.
The string still sings.
The note stays in the wood,
growing into the wall.
It does not need my hand.
I have stopped playing.
The room keeps the sound
after my hand has gone.`;

if (text.length < 1 || text.length > 280) {
  throw new Error(`Poem must be 1-280 characters, got ${text.length}.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
