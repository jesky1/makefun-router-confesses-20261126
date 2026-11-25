import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { ENTRY } from "./main.ts";

test("entry is a single line of 1-200 characters", () => {
  const run = spawnSync("node", ["main.ts"], { encoding: "utf8" });
  assert.equal(run.status, 0, run.stderr);
  const text = readFileSync("/output/entry.txt", "utf8");
  assert.equal(text, ENTRY);
  assert.ok(text.length >= 1 && text.length <= 200, `length ${text.length}`);
  assert.ok(!text.includes("\n"), "must be a single line");
  assert.ok(text.trim().length > 0, "must not be only whitespace");
  const words = text.split(/\s+/).length;
  console.log(`entry (${text.length} chars, ${words} words): ${text}`);
});
