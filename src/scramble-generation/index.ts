import type { Competition, RoundFormat } from "@wca/helpers";
import { randomScrambleForEvent } from "cubing/scramble";
import { testCompetitionScramblesSpec } from "../fixtures/testCompetitionScramblesSpec";
import type { CompetitionScramblesSpecJSON } from "../types/scrambles";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type TODO = any;

function numAttempts(roundFormat: RoundFormat): number {
  return {
    "1": 1,
    "2": 2,
    "3": 3,
    a: 5,
    m: 3,
  }[roundFormat];
}

export async function generateScrambles(
  spec: CompetitionScramblesSpecJSON,
): Promise<void /* TODO */> {
  for (const event of spec.wcif.events) {
    for (const round of event.rounds) {
      for (
        let scrambleSetIndex = 0;
        scrambleSetIndex < round.scrambleSetCount;
        scrambleSetIndex++
      ) {
        for (
          let attemptIndex = 0;
          attemptIndex < numAttempts(round.format);
          attemptIndex++
        ) {
          console.write(
            `[${event.id}][${round.id}][scramble set ${scrambleSetIndex}][attempt ${attemptIndex}] `,
          );
          // TODO: seed derivation.
          console.log((await randomScrambleForEvent(event.id)).toString());
        }
      }
    }
  }
}

await generateScrambles(testCompetitionScramblesSpec);
