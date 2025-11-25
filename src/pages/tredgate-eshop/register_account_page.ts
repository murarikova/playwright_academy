import { Locator, Page } from "@playwright/test";

export class RegisterAccountPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly telephoneInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly subsribeYesRadio: Locator;
  readonly privacyPolicyCheckbox: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator("#input-firstname");
    this.lastNameInput = page.locator("#input-lastname");
    this.emailInput = page.locator("#input-email");
    this.telephoneInput = page.locator("#input-telephone");
    this.passwordInput = page.locator("#input-password");
    this.confirmPasswordInput = page.locator("#input-confirm");
    this.subsribeYesRadio = page.locator("input[value='1'][name='newsletter']");
    this.privacyPolicyCheckbox = page.locator("//input[@name='agree']");
    this.continueButton = page.locator('input[type="submit"]');
  }

  async fillFirstName(firstName: string) {
    await this.firstNameInput.fill(firstName);
    return this;
  }

  async fillLastName(lastname: string) {
    await this.lastNameInput.fill(lastname);
    return this;
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
    return this;
  }

  //  async fillTelephone(telephone: number) {
  //    await this.telephoneInput.fill(telephone);
  //    return this;
  //  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
    return this;
  }

  async confirmPassword(password: string) {
    await this.confirmPasswordInput.fill(password);
  }

  async subscribeNewsletter() {
    await this.subsribeYesRadio.check();
    return this;
  }

  async checkPrivacyPolicyCheckbox() {
    await this.privacyPolicyCheckbox.check();
    return this;
  }

  async clickContinueButton() {
    await this.continueButton.click();
    //TODO: return
  }
}
