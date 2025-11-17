/* eslint-disable playwright/valid-title */
import { test } from "@playwright/test";
import { LoginPage } from "../../src/pages/pmtool/login_page.ts";

test("Ztracene heslo end to end", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage
    .open()
    .then((loginPage) => loginPage.clickLostPasswordButton())
    .then((lostPassword) => lostPassword.fillEmail("test@tredgate.cz"))
    .then((lostPassword) => lostPassword.fillUsername("test"))
    .then((lostPassword) => lostPassword.clickSend());
});

test("Test Otevreni ztranky ztraceneho hesla a navrat na Login stranku", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);

  await loginPage
    .open()
    .then((loginPage) => loginPage.clickLostPasswordButton())
    .then((lostPassword) => lostPassword.clickBack());
});
