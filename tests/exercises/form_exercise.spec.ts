import { test } from "@playwright/test";

test("Exercise - Filling the form", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/contact.html");
  await page.locator('[data-testid="input-name"]').fill("Marek Alohomora");
  await page.locator('[data-testid="input-email"]').fill("test@test.com");
  await page.locator('[data-testid="input-contact-date"]').fill("2025-12-03");
  await page
    .locator('[data-testid="select-role"]')
    .selectOption({ label: "Student" });
  await page.locator('[data-testid="textarea-comments"]').fill("test");
  await page.locator('[data-testid="checkbox-newsletter"]').check();
  await page.locator('[data-testid="button-submit"]').click();
});
