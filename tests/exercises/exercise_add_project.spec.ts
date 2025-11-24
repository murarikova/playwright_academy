import { test } from "@playwright/test";
import { LoginPage } from "../../src/pages/pmtool/login_page.ts";
import { faker } from "@faker-js/faker";

test("Create New Project", async ({ page }) => {
  const projectName =
    faker.animal.rabbit() + "_" + faker.number.int({ max: 1_000_000 });
  const loginPage = new LoginPage(page);

  await loginPage
    .open()
    .then((login) => login.login("pw_academy", "Playwright321!"))
    .then((dashboardPage) => dashboardPage.clickProjets())
    .then((projectsPage) => projectsPage.clickAddProject())
    .then((createNewProjectPage) => createNewProjectPage.fillName(projectName))
    .then((createNewProjectPage) => createNewProjectPage.clickSave())
    .then((dashboardPage) => dashboardPage.clickProfile())
    .then((dashboardPage) => dashboardPage.clickLogout());
});
