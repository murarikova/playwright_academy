import { test } from "@playwright/test";
import { MainPage } from "../../src/pages/tredgate-eshop/main_page.ts";
import { RegisterAccountPage } from "../../src/pages/tredgate-eshop/register_account_page.ts";
import { faker } from "@faker-js/faker";

test("Tredgate eshop - registration", async ({ page }) => {
  const mainPage = new MainPage(page);
  const registerAccountPage = new RegisterAccountPage(page);
  const firstName = faker.person.firstName("female");
  const lastName = faker.person.lastName("female");
  const email = faker.internet.email({
    firstName: firstName,
    lastName: lastName,
    provider: "seznam.cz",
  });
  const password = faker.internet.password();

  await mainPage.open();
  await mainPage.clickMyAccount();
  await mainPage.clickRegister();
  await registerAccountPage.fillFirstName(firstName);
  await registerAccountPage.fillLastName(lastName);
  await registerAccountPage.fillEmail(email);
  await registerAccountPage.fillPassword(password);
  await registerAccountPage.confirmPassword(password);
  await registerAccountPage.checkPrivacyPolicyCheckbox();
  await registerAccountPage.clickContinueButton();
});
