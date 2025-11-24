import { expect, Locator, Page } from "@playwright/test";
import { LoginPage } from "./login_page.ts";
import { ProjectsPage } from "./projects_page.ts";

export class DashboardPage {
  readonly page: Page;
  readonly profileButton: Locator;
  readonly logoutButton: Locator;
  readonly bellButton: Locator;
  readonly projectsButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileButton = page.locator("#user_dropdown");
    this.logoutButton = page.locator("#logout");
    this.bellButton = page.locator("#user_notifications_report");
    this.projectsButton = page.locator("#Projects");
  }

  async clickProfile() {
    await expect(this.bellButton).toBeVisible();
    await this.profileButton.click();
    return this;
  }

  async clickLogout() {
    //    await expect(this.logoutButton).toBeVisible();
    await this.logoutButton.click();
    return new LoginPage(this.page);
  }

  async clickProjets() {
    await this.clickProjets();
    return new ProjectsPage(this.page);
  }
}
