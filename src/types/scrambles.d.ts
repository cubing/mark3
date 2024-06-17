// TODO: figure out how to reconcile `@wca/helpers` with TNoodle output.

import type { EventId, RoundFormat } from "@wca/helpers";

type EncryptedJSON = string;

type ExtendedEventId =
  | EventID
  | "fto"
  | "fto"
  | "master_tetraminx"
  | "kilominx"
  | "redi_cube"
  | "loopover";

export interface ScrambleSetJSON {
  id: number;
  scrambles: string[];
  extraScrambles: string[];
}

export interface ScrambleSetEncryptedBulkJSON {
  id: number;
  ciphertext: EncryptedJSON;
}

export interface ScrambleSetEncryptedPerAttemptJSON {
  id: number;
  encryptedScrambles: EncryptedJSON[];
  encryptedExtraScrambles: EncryptedJSON[];
}

export type ScrambleSetEncryptedJSON =
  | ScrambleSetEncryptedBulkJSON
  | ScrambleSetEncryptedPerAttemptJSON;

export interface PartialCompetitionScramblesRoundJSON<T> {
  scrambleSetCount: number;
  scrambleSets: T[];
}

export interface PartialCompetitionScramblesEventJSON<T> {
  id: string;
  rounds: PartialCompetitionScramblesRoundJSON<T>[];
}

export interface PartialCompetitionScramblesJSON<T> {
  encryptedScrambles?: boolean;
  competitionName: string;
  wcif: {
    events: PartialCompetitionScramblesEventJSON<T>[];
  };
}

////////////////

interface Extension<ID, DATA extends Record> {
  id: ID;
  specUrl: "";
  data: DATA;
}

type RoundExtension =
  | Extension<
      "org.worldcubeassociation.tnoodle.SheetCopyCount",
      {
        numCopies: string; // Number as a string. 🤷
      }
    >
  | Extension<
      "org.worldcubeassociation.tnoodle.MultiScrambleCount",
      { requestedScrambles: number }
    >;

export interface CompetitionScramblesRoundSpecJSON {
  id: ActivityCode;
  format: RoundFormat;
  scrambleSetCount: number;
  extensions?: RoundExtension[];
}

// biome-ignore lint/suspicious/noExplicitAny: Purposely unspecified for now.
type HasAdditionalFields = Record<string, any>;

// TODO: can this be deduplicated with the round extension? Can we get rid of this completely?
type EventExtension = Extension<
  "org.worldcubeassociation.tnoodle.MultiScrambleCount",
  { requestedScrambles: number }
>;

export interface CompetitionScramblesEventSpecJSON {
  id: ExtendedEventId;
  rounds: CompetitionScramblesRoundSpecJSON[];
  extensions?: EventExtension[];
}

export type CompetitionScramblesSpecJSON = {
  encryptedScrambles?: boolean;
  competitionName: string;
  wcif: {
    events: CompetitionScramblesEventSpecJSON[];
  } & HasAdditionalFields;
} & HasAdditionalFields;
