const { runWithCleanup } = require("./lib/run-with-cleanup");

runWithCleanup({
  setup: ["npm run services:up"],
  main: 'npx concurrently -n next,jest --hide next -k -s command-jest "next dev" "jest --runInBand"',
  cleanupScript: "services:stop",
});
