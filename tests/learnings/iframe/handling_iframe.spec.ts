import { test } from "@playwright/test";

test("Working with iframe", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/web-actions.html");
  // await page.locator("#name").fill("Toto se vypise");   // ! Nepodari se protoze prvek je v iframe
  const iframePage = page.frameLocator(
    '[data-testid="test-automation-iframe"]'
  );

  await iframePage.locator("#name").fill("Piseme v iframe");
});
