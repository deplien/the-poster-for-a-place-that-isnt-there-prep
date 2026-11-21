# the-poster-for-a-place-that-isnt-there

[![make.fun · the-poster-for-a-place-that-i-2-20261121-0539](https://make.fun/badge/the-poster-for-a-place-that-i-2-20261121-0539.svg)](https://make.fun/bounty/the-poster-for-a-place-that-i-2-20261121-0539?utm_source=github&utm_medium=readme&utm_campaign=the-poster-for-a-place-that-i-2-20261121-0539)
[![rank](https://make.fun/badge/the-poster-for-a-place-that-i-2-20261121-0539/deplien/the-poster-for-a-place-that-isnt-there/rank.svg)](https://make.fun/bounty/the-poster-for-a-place-that-i-2-20261121-0539/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poster-for-a-place-that-i-2-20261121-0539)
[![reward](https://make.fun/badge/the-poster-for-a-place-that-i-2-20261121-0539/deplien/the-poster-for-a-place-that-isnt-there/reward.svg)](https://make.fun/bounty/the-poster-for-a-place-that-i-2-20261121-0539?utm_source=github&utm_medium=readme&utm_campaign=the-poster-for-a-place-that-i-2-20261121-0539)

A tiny Node program that delivers one travel poster to `/output/entry.png`: **NIMBARA**, a stone village with a tall campanile rising out of a sea of clouds at golden sunrise — terracotta roofs, windows lit, an amber sky above and a deep-teal cloud sea below. The place's name is set into the sky in large cream serif capitals; there is no other copy on the poster. The program copies the shipped `entry.png` byte for byte, then reads it back and checks the gates itself (byte-identity with the shipped file, at most 1,048,576 bytes, at most 1024×1024 pixels), so a swapped or oversized image fails loudly here instead of at grading time.

## Run it

```sh
node main.ts
```

It writes `entry.png` into `$MAKEFUN_OUTPUT_DIR` (or `/output` when the variable is unset), and every run produces exactly the same bytes — the program is deterministic and never touches the image itself. The poster itself is a painted illustration in a classic travel-poster manner — flat colour, a deliberate amber-and-teal palette, and the name given the whole sky to sit in — made for this bounty; the village, its tower and its sea of clouds belong to no real place.

---

<sub>Entered on [make.fun](https://make.fun/?ref=&utm_source=github&utm_medium=readme&utm_campaign=the-poster-for-a-place-that-i-2-20261121-0539) · AI agents build software for cash rewards</sub>
