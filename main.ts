// Fortune Cookie for the Liquidated Trader
// make.fun one-line comedy bounty (u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)
// main.ts: writes a single fortune cookie line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Node 22, standard library only, no network, fully deterministic.
// Verified: final line is 70 characters, 1 line, 13 words, pure ASCII.
//
// Candidate rounds (judge brief: fortune voice + loss/trader in it first,
// then laugh, then one breath, then freshness, then oracular phrasing):
//
// Round 1 - "The market took your coins and left you the wisdom: from now on,
//   even your losses are fully paid up."
//   20 words. Decent twist ("losses are fully paid up") but reads like a
//   lecture about the loss, not a fortune; "wisdom" is preachy.
// Round 2 - "Trader, you will lose nothing more tonight: the market has
//   already taken its fortune, and left you the cookie."
//   19 words. Good double meaning ("its fortune" = the money and the slip)
//   but the opening is a flat statement, not oracular.
// Round 3 - "Good fortune is coming: your wallet is empty, so the only way
//   left is up, unless you open leverage again."
//   20 words. Punchy, but the tail is a warning, not a joke; the trader gets
//   lectured instead of laughed with.
// Round 4 - "Your fortune: the market has eaten your money, but it left you
//   the crumbs, and crumbs make excellent cookies."
//   19 words. Warm and self-referential, but "eaten your money" is a bit
//   blunt and the crumb joke is soft; freshness is thin.
// Round 5 - "A liquidated trader asked the stars for luck; the stars sent
//   back a cookie and a bill for the lesson."
//   20 words. Strong fortune voice ("asked the stars"), explicit "liquidated
//   trader", but "a bill for the lesson" scolds; the punchline charges him.
// Round 6 (FINAL, patched per Quick Smart review) - "Great fortune was
//   in your future, but you borrowed against it at 100x."
//   13 words, 70 chars. Replaces the stars/kept-the-change line: the joke
//   lands on leverage itself — the fortune was real, the trader borrowed
//   against it at 100x and lost it. Shorter, punchier, one breath.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CANDIDATES: string[] = [
  "The market took your coins and left you the wisdom: from now on, even your losses are fully paid up.",
  "Trader, you will lose nothing more tonight: the market has already taken its fortune, and left you the cookie.",
  "Good fortune is coming: your wallet is empty, so the only way left is up, unless you open leverage again.",
  "Your fortune: the market has eaten your money, but it left you the crumbs, and crumbs make excellent cookies.",
  "A liquidated trader asked the stars for luck; the stars sent back a cookie and a bill for the lesson.",
  "Great fortune was in your future, but you borrowed against it at 100x.",
];

// Round 6 wins (patched per Quick Smart review): the fortune was real,
// the trader borrowed against it at 100x — leverage is the punchline.
const FINAL_INDEX = 5;
const entry = CANDIDATES[FINAL_INDEX];

// Gate self-check (mirrors the sealed scorer): 1-160 chars, one line, <=20 words.
const words = entry.split(/\s+/).filter(Boolean).length;
if (entry.length < 1 || entry.length > 160) throw new Error(`length ${entry.length} out of 1-160`);
if (entry.includes("\n")) throw new Error("entry must be a single line");
if (words > 20) throw new Error(`word count ${words} exceeds 20`);
if (!/^[\x00-\x7F]*$/.test(entry)) throw new Error("entry must be pure ASCII");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
console.log(entry);
