import { test } from "@playwright/test";
import { LoginPage } from "../../../src/pages/pmtool/login_page.ts";

test("Page Objects Test", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.fillUsername("pw_academy");
  await loginPage.fillPassword("Playwright321!");
  await loginPage.clickLoginButton();
});

test("Page Objects - Combine method", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login("pw_academy", "Playwright321!");
});
