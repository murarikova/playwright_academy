import { test } from "@playwright/test";

// ? Snippet; pwt (pw-test)

test("First Test", async ({ page }) => {
  // ? Testovaci kroky
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("pw_academy");
  await page.locator("#password").fill("Playwright321!");
  await page.locator('[type="submit"]').click();
});
