const { runWithCleanup } = require("./lib/run-with-cleanup");

runWithCleanup({
  setup: [
    "npm run services:up",
    "npm run services:wait:database",
    "npm run migrations:up",
  ],
  main: "npx next dev",
  cleanupScript: "services:stop",
});
