import { test } from "@playwright/test";
import { LoginPage } from "../../src/pages/pmtool/login_page.ts";

test("Cviceni - pouziti assertu v page objects", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage
    .open()
    .then((login) => login.login("pw_academy", "Playwright321!"))
    .then((dashboard) => dashboard.dashboardAsserts("TEG Project Management"));

  //  const profileButton = page.locator(".username");
  //  await expect(profileButton, "Profile Button is Visible").toBeVisible();
  // * Assert je ulozen v page obejctu v metode
});
