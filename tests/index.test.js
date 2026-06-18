import assert from "node:assert/strict";
import { test } from "node:test";
import { project, summarizeProject } from "../src/index.js";

test("Repository Quality Checker exposes project metadata", () => {
  assert.equal(project.slug, "repository-quality-checker");
  assert.ok(project.features.length >= 3);
  assert.match(summarizeProject(), /planned features/);
});
