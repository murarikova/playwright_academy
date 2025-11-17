import { test } from "@playwright/test";
import { LoginPage } from "../../src/pages/pmtool/login_page.ts";
import { DashboardPage } from "../../src/pages/pmtool/dashboard_page.ts";

test("Page Objects Exercise - Login and Logout", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const logoutPage = new DashboardPage(page);

  await loginPage.open();
  await loginPage.login("pw_academy", "Playwright321!");
  await logoutPage.clickProfile();
  await logoutPage.clickLogout();
});
