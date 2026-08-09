// Self-check for the safe-area helpers and the window size class boundaries.
// Runs against the built bundle with plain node — no test framework.
//   npm run build && npm run check
import assert from "node:assert/strict";
import {
  safeAreaInset,
  safeAreaBlock,
  safeAreaInline,
  WindowSizeClass,
  WindowHeightClass,
} from "../dist/index.es.js";

// Rule 1 — the Capacitor variable wins, env() is the fallback, 0px is last.
assert.equal(
  safeAreaInset("bottom"),
  "var(--safe-area-inset-bottom, env(safe-area-inset-bottom, 0px))"
);

// Rule 2 — the block axis ADDS, the inline axis takes the LARGER.
assert.match(safeAreaBlock("bottom", "8px"), /^calc\(8px \+ var\(/);
assert.match(safeAreaInline("left", "16px"), /^max\(16px, var\(/);
// No padding → the bare inset, not calc(undefined + ...).
assert.equal(safeAreaBlock("top"), safeAreaInset("top"));

// The published Material 3 boundaries. A phone is compact; 600 is not.
assert.equal(WindowSizeClass.Compact, 0);
assert.equal(WindowSizeClass.Medium, 600);
assert.equal(WindowSizeClass.Expanded, 840);
assert.equal(WindowSizeClass.Large, 1200);
assert.equal(WindowSizeClass.ExtraLarge, 1600);
assert.equal(WindowHeightClass.Medium, 480);
assert.equal(WindowHeightClass.Expanded, 900);

// 360px (Galaxy S) and 440px (iPhone Pro Max) must both read as compact.
const widthClass = (w) =>
  w >= WindowSizeClass.ExtraLarge ? "extraLarge"
  : w >= WindowSizeClass.Large ? "large"
  : w >= WindowSizeClass.Expanded ? "expanded"
  : w >= WindowSizeClass.Medium ? "medium"
  : "compact";
assert.equal(widthClass(360), "compact");
assert.equal(widthClass(440), "compact");
assert.equal(widthClass(599), "compact");
assert.equal(widthClass(600), "medium");
assert.equal(widthClass(839), "medium");
assert.equal(widthClass(840), "expanded");

// A landscape iPhone 15: expanded width, compact height. Both must be true,
// or the sidebar comes back on a phone.
const heightClass = (h) =>
  h >= WindowHeightClass.Expanded ? "expanded"
  : h >= WindowHeightClass.Medium ? "medium"
  : "compact";
assert.equal(widthClass(844), "expanded");
assert.equal(heightClass(390), "compact");

console.log("layout rules OK");
