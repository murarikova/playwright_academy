import { expect, test } from "@playwright/test";

test.describe("Fronted with API Tests", () => {
  test("Login API Check", async ({ page }) => {
    await page.goto("http://localhost:3001/");
    await page.locator('[data-testid="username"]').fill("fifka_petr");
    await page.locator('[data-testid="password"]').fill("Tredgate2023#");

    // ? Zapiname listenera waitForResponse, ktery odchytava HTTP requesty pomoci adresy/regularniho vyrazu pro cast URL (napriklad path)
    const loginPromise = page.waitForResponse(/auth\/login/);
    await page.locator('[data-testid="log_in"]').click();

    await loginPromise; // ? Pocka, nez se dokonci login API (uzitecne cekani kdy vim ze az tahle API dobehne nacte se vsechno, protoze nekdy muze byt playwright moc rychly a klikat driv nez je aplikace uplne nactena)

    await page.locator('[data-testid="logout_button"]').click();
  });

  test("Intercepted Login Test (SIT)", async ({ page }) => {
    const username = "fifka_petr";
    const password = "Tredgate2023#";

    await page.goto("http://localhost:3001/");
    await page.locator('[data-testid="username"]').fill(username);
    await page.locator('[data-testid="password"]').fill(password);

    const loginPromise = page.waitForResponse(/auth\/login/);
    await page.locator('[data-testid="log_in"]').click();

    const loginApiResult = await loginPromise; // ? Počká, než se dokončí login API
    //await page.locator('[data-testid="logout_button"]').click();

    // * Testy na odchycenou API
    const loginRequest = loginApiResult.request();

    // * Login request (pozadavek) cast testu
    const requestUrl = loginRequest.url();
    expect(requestUrl, "Login Request URL should be correct").toContain(
      "/auth/login"
    );
    const requestMethod = loginRequest.method();
    expect(requestMethod, "Login Request should have POST method").toEqual(
      "POST"
    );

    const requestBody = loginRequest.postDataJSON();
    expect(
      requestBody.username,
      "Login Request body.username should have text"
    ).toBe(username);
    expect(
      requestBody.password,
      "Login Request body.password should have text"
    ).toBe(password);

    // * Login response (odpoved) cast testu
    const responseStatus = loginApiResult.status();
    expect(responseStatus, "Login Response Status is 201").toBe(201);
    const responseBody = await loginApiResult.json();
    expect(
      responseBody,
      "Login Response body have property: Access_token"
    ).toHaveProperty("access_token");
  });
});
