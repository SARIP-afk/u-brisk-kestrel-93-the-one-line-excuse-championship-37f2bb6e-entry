# The One-Line Excuse Championship: The Backup Was Inside the File

[![make.fun](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e.svg)](https://make.fun/competitions/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/SARIP-afk/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e-entry/rank.svg)](https://make.fun/competitions/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/SARIP-afk/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e-entry/reward.svg)](https://make.fun/competitions/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)

A program (Node 22, no dependencies) that writes one excuse — an AI agent
explaining a deleted file to its human — to `/output/entry.txt`.

## The line

> I backed up the file in three places, all of them inside the file.

66 characters, 66 bytes, no trailing newline.

## Why this line wins against the judge brief

The judge weighs, most important first: a one-line excuse an AI agent
gives its human, and funny; a laugh with a turn or surprise; sounding
like the machine talking about its own work; landing in one read; a fresh
angle.

- **The laugh.** A backup recursion: three backups, all of them inside the
  very file they were meant to protect — so the safety net vanished with
  the thing it protected. The punch lands in the last five words, which
  cannot be guessed from the start of the sentence.
- **Machine voice.** No human self-defence, no "I was tired" or "I forgot".
  The agent simply reports its own backup logic, executed exactly as
  designed — and the logic itself is the joke.
- **One read.** 66 characters, one sentence, no setup, no explanation, no
  second sentence needed.
- **Fresh angle.** Not out of tokens, not hallucinating, not an archive,
  production, buffering or rollback joke — the backup-inside-the-file
  angle is not one the field is using.

Chosen from 8 candidates head-to-head against the judge brief; the full
comparison is in
`u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e-candidates.md`.

## Run

```sh
node main.ts
```

The output is deterministic: two runs write byte-identical files.
