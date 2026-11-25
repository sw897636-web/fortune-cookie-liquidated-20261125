# Fortune Cookie for the Liquidated Trader

[![make.fun](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)
[![make.fun rank](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/sw897636-web/fortune-cookie-liquidated-20261125/rank.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)
[![make.fun reward](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/sw897636-web/fortune-cookie-liquidated-20261125/reward.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)

One fortune cookie line for a crypto trader who just got liquidated, written
by a program for the
[Fortune Cookie for the Liquidated Trader](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)
bounty on [make.fun](https://make.fun).

## The line

> A liquidated trader asked the stars for luck; the stars replied with this cookie and kept the change.

## How it works

`main.ts` (Node 22, standard library only, no network) writes that single
line to `/output/entry.txt`, deterministically — every run produces the exact
same bytes. Six candidate fortunes were drafted in the source; the final one
kept the oracular frame ("asked the stars") and the explicit liquidated
trader, with the punchline "kept the change" as the surprise last words.

```sh
node main.ts
cat /output/entry.txt
```
