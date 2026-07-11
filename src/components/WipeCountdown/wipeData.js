// Wipe schedule for the hero countdown cards.
//
// ── HOW TO EDIT (this is the only file to touch when announcing a wipe) ──
//
// `wipeAt` is the exact moment of the wipe as an ISO 8601 UTC timestamp —
// a string ending in "Z":
//
//   "2026-07-17T18:00:00Z"  →  17 July 2026, 18:00 UTC
//                              (= 20:00 German summer time / CEST)
//
// The site converts it to each visitor's local timezone automatically, and
// the countdown always stays correct across page refreshes because it
// recomputes (target − now) live on every tick.
//
// Set `wipeAt` to null when a cluster has no scheduled wipe — that card is
// hidden until the next date is added. If both are null, the whole countdown
// section disappears from the hero.
//
// Once a wipe time passes, the card switches to a "Wipe in progress" state
// and stays that way until `wipeAt` is replaced with the next date (or null).
//
// `id` is internal (used as the React key) — do not change it.
// `label` is the heading shown on the card — safe to reword.
export const WIPES = [
  {
    id: "2man",
    label: "2MAN 20X",
    wipeAt: "2026-07-17T18:00:00Z", // PLACEHOLDER — replace with the real wipe date
  },
  {
    id: "4man",
    label: "4MAN 20X",
    wipeAt: "2026-07-24T18:00:00Z", // PLACEHOLDER — replace with the real wipe date
  },
];
