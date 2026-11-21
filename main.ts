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
a little longer than my hand.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
