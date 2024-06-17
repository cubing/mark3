# `mark3`

Prototype for the software designed to replace TNoodle for official WCA competitions. Successor to [Mark 2](https://github.com/cubing/mark2) (whose interface was integrated into TNoodle).

The outcome will probably be a some reusable code as well as some purpose-built code, to be integrated and split out into other projects.

## Tooling

This codebase requires:

- [`bun`](https://bun.sh/)

## Scramble generation

Each competition is generated deterministically from a seed. A seed can be used to derive further seeds or generate a random number stream. This will be implemented using `age`.

```ts
interface Seed {
  static async generateForCompetition(/* takes competition ID and a commitment mechanism involving the WCA server */): Seed;
  async function deriveSubSeed(key: string /* UTF-8 encoded */): Seed;
  async function randomStream(): RandomStream;
}

const competitionSeed = Seed.generateForCompetition(/* … */);
const eventSeed = competitionSeed.deriveSubSeed(eventID);
const roundSeed = eventSeed.deriveSubSeed(roundID);
const attemptSeed = roundSeed.deriveSubSeed(attemptIndex.toString() /* 0-indexed */);

const mainScrambleSeed = attemptSeed.deriveSubSeed(scrambleIndex.toString() /* 0-indexed */); // most attempts will have 1 scramble, multi will have many — we still generate this the same way

const extraSeed = mainScrambleSeed.deriveSubSeed("extras");
const extraScrambleSeed = mainScrambleSeed.deriveSubSeed(extraScrambleIndex.toString() /* 0-indexed */);
```

A scramble seed is used to generate a scramble as follows:

- Randomize pieces in each orbit, with puzzle-specific (but exactly specified) constraints
  - TODO: can we do this with Schreier-Sims?
- Fix up parity
- Rejection sample if needed (Square-1)

For initial adoption, "backup" extras will be generated for each round that are not tied to specific attempt scrambles.

## TODO

- Figure out a good work factor for derivation.
- Can the intermediate seed derivation be adapted to WCA escrow to prevent any early access (for competitions with internet access)?
