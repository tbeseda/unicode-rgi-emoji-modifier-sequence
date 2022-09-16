import { readFileSync, writeFileSync } from "node:fs";

function parseEmojiData() {
	const set = new Set();
	const source = readFileSync("./data/emoji-data.txt", "utf8");
	const lines = source.split("\n");

	console.log(`Parsing ${lines.length} lines...`);

	for (const line of lines) {
		if (!line || line.startsWith("#")) {
			continue;
		}

		const parts = line.trim().split(";");
		const type = parts[1].trim();

		if (type !== "RGI_Emoji_Modifier_Sequence") {
			continue;
		}

		const [character] = parts[0].trim().split(" ");

		set.add(`0x${character}`);
	}

	return set;
}

const set = parseEmojiData();
const header = "// Generated using `npm run build`. Do not edit!";
const output = `${header}
export default new Set([
  ${[...set].join(",\n  ")}
]);
`;

writeFileSync("./index.js", output);

console.log(`Saved ${set.size} emoji codes.`);
