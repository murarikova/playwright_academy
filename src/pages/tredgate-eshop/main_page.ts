import { Locator, Page } from "@playwright/test";
import { RegisterAccountPage } from "./register_account_page.ts";

export class MainPage {
  readonly page: Page;
  readonly url = "https://tredgate.com/eshop/";
  readonly myAccountButton: Locator;
  readonly registerButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myAccountButton = page.locator("//a[@title='My Account']");
    this.registerButton = page.locator("//a[normalize-space()='Register']");
  }

  async open() {
    await this.page.goto(this.url);
    return this;
  }

  async clickMyAccount() {
    await this.myAccountButton.click();
    return this;
  }

  async clickRegister() {
    await this.registerButton.click();
    return new RegisterAccountPage(this.page);
  }
}
