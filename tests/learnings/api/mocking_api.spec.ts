import { expect, test } from "@playwright/test";

const mockedJson = [
  {
    _id: "6626f7f13fcf6b9a1fc88191",
    userId: 123,
    accountId: "4321",
    balance: 500_000_000,
    transactionLimits: {
      dailyLimit: 1000,
      monthlyLimit: 54564,
      _id: "6626f7f13fcf6b9a1fc88192",
    },
    accountType: "playwright mock",
    loginHistory: [],
    transactionHistory: [],
    createdAt: "2024-04-22T23:51:13.095Z",
    __v: 0,
  },
];

test("Using Mocks to Replace API Response", async ({ page }) => {
  // * Nastaveni mocku (po odchyceni API)
  await page.route(/accounts\/user/, async (interceptedApi) => {
    console.log("Odchycena API! Mockujeme!");
    await interceptedApi.fulfill({ json: mockedJson });
  });

  const username = "fifka_petr";
  const password = "Tredgate2023#";

  await page.goto("http://localhost:3001/");
  await page.locator('[data-testid="username"]').fill(username);
  await page.locator('[data-testid="password"]').fill(password);
  const loginPromise = page.waitForResponse(/auth\/login/);
  await page.locator('[data-testid="log_in"]').click();
  await loginPromise;
  await page.locator('[data-testid="accounts_section_link"]').click();
  await expect(page.locator('[data-testid="loader"]')).toBeHidden();
  await expect(page.locator('[data-testid="title"]')).toHaveText("Account");
});
