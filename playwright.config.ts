import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["html"], ["dot"]],
  timeout: 60_000, // ? Nastaveni timeoutu na 60s. (Timeut se nastavuje vzdy v ms) - maximalni doba behu testu
  globalTimeout: 1 * 60 * 60 * 1_000, // ? (=> zapis jedne hodiny) Nastaveni maximalni doby behu vsech spustenych testu
  expect: {
    timeout: 7_000, // ? Nastaveni maximalni doby cekaci pro asserty (kontroly)
  },
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    actionTimeout: 7_000, // ? Maximalni doba behu akce (click, fill, ...)
    navigationTimeout: 40_000, // ? Maximalni doba behu goto()
    // ignoreHTTPSErrors: true, // ! Vypnuti kontroly bezpecnosti (certifikatu) prohlizecu. Opatrne! Pouzivame napriklad na testovacich prostredich kde neni dobre vyresena bezpecnost nebo certifikaty
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    screenshot: "only-on-failure",
    video: "off",
    trace: "retain-on-failure",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    /** */
    /* Test against mobile viewports. */
    // {
    //  name: "Mobile Chrome",
    //  use: { ...devices["Pixel 5"] },
    // },
    // {
    //  name: "Mobile Safari",
    //  use: { ...devices["iPhone 12"] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

// * Ternární operátor:
// const isValid: boolean = true;
// let testTernary;

// testTernary = isValid ? "True ternání operátor" : "False ternární operátor";

// // ? Stejný zápis jako ternární operátor:
// if (isValid) {
//   testTernary = "True ternání operátor";
// } else {
//   testTernary = "False ternární operátor";
// }

// console.log(testTernary);
