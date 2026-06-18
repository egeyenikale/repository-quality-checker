export const project = {
  slug: "repository-quality-checker",
  title: "Repository Quality Checker",
  description: "Tool that checks GitHub projects against quality rules.",
  features: [
  "Required file check",
  "README scoring",
  "Secret scan",
  "Artifact scan",
  "Similarity check",
  "JSON report"
  ]
};

export function summarizeProject() {
  return `${project.title}: ${project.features.length} planned features`;
}
