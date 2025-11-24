// tests/test-structure/
// test_structure.spec.ts
import { test } from "@playwright/test";
import { LoginPage } from "../../../src/pages/pmtool/login_page.ts";

// ? pwd - zkratka na test.describe

test.describe("Testovaci sada - describe", () => {
  test("Pmtool Login", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.fillUsername("pw_academy");
    await loginPage.fillPassword("Playwright321!");
    await loginPage.clickLoginButton();
  });

  test("Pmtool Failed Login", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.fillUsername("ABCD");
    await loginPage.fillPassword("ABCD");
    await loginPage.clickLoginButton();
  });
});
