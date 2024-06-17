import type { Competition } from "@wca/helpers";
import type { CompetitionScramblesSpecJSON } from "../types/scrambles";

export const testCompetitionScramblesSpec: CompetitionScramblesSpecJSON = {
  competitionName: "Scrambles for 2024-01-08",
  version: "TNoodle-WCA-1.2.1",
  generationDate: "Jan 07, 2024 4:55:14 PM",
  generationUrl: "/wcif/zip",
  wcif: {
    formatVersion: "1.0",
    id: "",
    name: "Scrambles for 2024-01-08",
    shortName: "Scrambles for 2024-01-08",
    persons: [],
    events: [
      {
        id: "333",
        rounds: [
          {
            id: "333-r1",
            format: "a",
            scrambleSetCount: 4,
            extensions: [
              {
                id: "org.worldcubeassociation.tnoodle.SheetCopyCount",
                specUrl: "",
                data: { numCopies: "1" },
              },
            ],
          },
          {
            id: "333-r2",
            format: "a",
            scrambleSetCount: 1,
            extensions: [
              {
                id: "org.worldcubeassociation.tnoodle.SheetCopyCount",
                specUrl: "",
                data: { numCopies: "1" },
              },
            ],
          },
        ],
      },
      {
        id: "333fm",
        rounds: [
          {
            id: "333fm-r1",
            format: "m",
            scrambleSetCount: 2,
            extensions: [
              {
                id: "org.worldcubeassociation.tnoodle.SheetCopyCount",
                specUrl: "",
                data: { numCopies: "1" },
              },
            ],
          },
          {
            id: "333fm-r2",
            format: "m",
            scrambleSetCount: 1,
            extensions: [
              {
                id: "org.worldcubeassociation.tnoodle.SheetCopyCount",
                specUrl: "",
                data: { numCopies: "1" },
              },
            ],
          },
        ],
      },
      {
        id: "pyram",
        rounds: [
          {
            id: "pyram-r1",
            format: "a",
            scrambleSetCount: 1,

            extensions: [
              {
                id: "org.worldcubeassociation.tnoodle.SheetCopyCount",
                specUrl: "",
                data: { numCopies: "1" },
              },
            ],
          },
        ],
      },
      {
        id: "333mbf",
        rounds: [
          {
            id: "333mbf-r1",
            format: "3",
            scrambleSetCount: 1,
            extensions: [
              {
                id: "org.worldcubeassociation.tnoodle.SheetCopyCount",
                specUrl: "",
                data: { numCopies: "1" },
              },
              {
                id: "org.worldcubeassociation.tnoodle.MultiScrambleCount",
                specUrl: "",
                data: { requestedScrambles: 35 },
              },
            ],
          },
          {
            id: "333mbf-r2",
            format: "3",
            scrambleSetCount: 1,
            extensions: [
              {
                id: "org.worldcubeassociation.tnoodle.SheetCopyCount",
                specUrl: "",
                data: { numCopies: "1" },
              },
              {
                id: "org.worldcubeassociation.tnoodle.MultiScrambleCount",
                specUrl: "",
                data: { requestedScrambles: 35 },
              },
            ],
          },
          {
            id: "333mbf-r3",
            format: "3",
            scrambleSetCount: 1,
            extensions: [
              {
                id: "org.worldcubeassociation.tnoodle.SheetCopyCount",
                specUrl: "",
                data: { numCopies: "1" },
              },
              {
                id: "org.worldcubeassociation.tnoodle.MultiScrambleCount",
                specUrl: "",
                data: { requestedScrambles: 35 },
              },
            ],
          },
        ],
        extensions: [
          {
            id: "org.worldcubeassociation.tnoodle.MultiScrambleCount",
            specUrl: "",
            data: { requestedScrambles: 35 },
          },
        ],
      },
      {
        id: "fto",
        rounds: [
          {
            id: "fto-r1",
            format: "a",
            scrambleSetCount: 1,
            extensions: [
              {
                id: "org.worldcubeassociation.tnoodle.SheetCopyCount",
                specUrl: "",
                data: { numCopies: "1" },
              },
            ],
          },
        ],
      },
    ],
    schedule: { numberOfDays: 0, venues: [] },
    extensions: [
      {
        id: "org.worldcubeassociation.tnoodle.CompetitionStatus",
        specUrl: "",
        data: {
          isStaging: false,
          isManual: true,
          isSignedBuild: true,
          isAllowedVersion: true,
        },
      },
    ],
  },
};
