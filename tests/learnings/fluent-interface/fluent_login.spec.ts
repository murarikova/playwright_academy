import { test } from "@playwright/test";
import { LoginPage } from "../../../src/pages/pmtool/login_page.ts";

// eslint-disable-next-line playwright/valid-title
test("Test Login Using Fluent Interface", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage
    .open()
    .then((login) => login.fillUsername("pw_academy"))
    .then((login) => login.fillPassword("Playwright321!"))
    .then((login) => login.clickLoginButton())
    .then((dashboard) => dashboard.clickProfile())
    .then((dashboard) => dashboard.clickLogout());
});
