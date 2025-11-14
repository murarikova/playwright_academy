import { test } from "@playwright/test";
import { LoginPage } from "../../src/pages/pmtool/login_page.ts";
import { LostPasswordPage } from "../../src/pages/pmtool/lost_password_page.ts";

test("Lost password test - Resend", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const lostPasswordPage = new LostPasswordPage(page);

  await loginPage.open();
  await loginPage.clickLostPasswordButton();
  await lostPasswordPage.fillEmail("test@tredgate.cz");
  await lostPasswordPage.fillUsername("test");
  await lostPasswordPage.clickSend();
});
