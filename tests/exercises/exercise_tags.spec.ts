import { test } from "@playwright/test";
import { LoginPage } from "../../src/pages/pmtool/login_page.ts";

test("Tag Exercise", { tag: "@exercise" }, async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage
    .open()
    .then((loginPage) => loginPage.fillUsername("pw_academy"))
    .then((loginPage) => loginPage.fillPassword("Playwright321!"))
    .then((loginPage) => loginPage.clickLoginButton());
});

test("Tag exercise kratsi verze", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage
    .open()
    .then((login) => login.login("pw_academy", "Playwright321!"));
});
