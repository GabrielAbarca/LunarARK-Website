// Cluster list for the /servers filter buttons.
//
// This is the source of truth for which cluster buttons render and, therefore,
// which single-cluster endpoint each one fetches. It's a static list because a
// per-cluster response can't tell us what other clusters exist.
//
// `id` must match a backend cluster key exactly (case-sensitive) — it's used in
// the request path `/api/server-status/{id}`.
// `label` is the button text and should match the API's `label` for that cluster.
//
// When a cluster is added or removed server-side, update this list to match.
export const CLUSTERS = [
  { id: "2man", label: "LunarARK 2MAN" },
  { id: "4man", label: "LunarARK 4MAN" },
];
