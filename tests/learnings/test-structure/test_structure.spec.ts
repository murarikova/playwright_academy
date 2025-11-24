// tests/test-structure/
// test_structure.spec.ts
import { test } from "@playwright/test";
import { LoginPage } from "../../../src/pages/pmtool/login_page.ts";

// ? Zkratka: pwd (pw-describe)
test.describe("Testovací sada - describe", () => {
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
    await loginPage.fillPassword("EFGH");
    await loginPage.clickLoginButton();
  });
});
