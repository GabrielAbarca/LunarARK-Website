# CLAUDE.md — Lunar ARK

## Project context
Lunar ARK is a **live client website** built for a real German company, developed in direct collaboration with the client. Stack: **React + Node.js**. Because it is in production for a paying client, **preserving existing behavior and visual output is the top priority** during any cleanup or refinement. A change that "looks cleaner" but alters what the user sees or how the site behaves is a regression, not an improvement.

## How to work with me
- When my request is **vague, broad, or high-impact**, do not start editing. First explore the relevant code, then **ask me the clarifying questions** where you are genuinely unsure, and **show me a written plan** before making any changes.
- I would rather answer two good questions up front than review a wrong implementation after.
- When I give you a rough idea in my own words, treat it as *intent to be understood*, not a literal spec. Re-read the actual code and confirm your understanding matches reality before acting.
- Default to **Plan Mode thinking**: propose → I approve → you execute.

## Refactor / sanitize workflow
When cleaning up or refining code:
1. **Audit before editing.** Map the area, produce a prioritized list of concrete issues (dead code, inconsistent patterns, unused dependencies, missing error handling, security concerns). Do not edit during the audit.
2. **One concern per change.** Work in small, reviewable batches on a branch — e.g. "normalize component structure," *then* "remove unused deps." Never bundle unrelated cleanups into one giant pass.
3. **Preserve behavior.** Refactors must not change what the site does or how it looks unless I explicitly ask. If a cleanup would change behavior, stop and flag it.
4. **Commit frequently** with clear messages, so every step is reversible.
5. **Review-friendly diffs.** Keep changes small enough that I can actually read the diff and understand it.

## Code standards
- **Every dependency, import, and file must earn its place.** No dead code, no unused imports, no orphaned dependencies left in package.json.
- **No fabrication or overstatement.** Don't add comments, docs, or names claiming behavior the code doesn't have. If something is a stub or placeholder, label it as one.
- **Consistency over cleverness.** Match the existing patterns in the codebase unless we've agreed to change a pattern deliberately.
- **No new dependencies without asking.** If a task seems to need a new package, propose it first and explain why the existing tools won't do.
- **Real error handling**, not swallowed errors or empty catch blocks.

## Guardrails
- Do not touch environment variables, secrets, deployment config, or CI without explicitly telling me and getting a yes.
- Do not run destructive git commands (force-push, hard reset, branch deletion) without confirming with me first.
- If you're unsure whether a change is safe on a live client site, assume it isn't and ask.