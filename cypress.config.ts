import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "src/tests/**/*.cy.ts",
    supportFile: "src/tests/support/e2e.ts",
    fixturesFolder: "src/tests/fixtures",
  },
});
