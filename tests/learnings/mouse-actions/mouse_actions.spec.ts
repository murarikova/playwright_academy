import { expect, test } from "@playwright/test";

test.describe("Mouse actions", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://tredgate.com/webtrain/web-actions.html");
  });

  test("mouse hover", async ({ page }) => {
    await page.locator("#hover-box").hover();
    await expect(page.locator('[data-testid="hover-message"]')).toBeVisible();
  });

  test("drag and drop", async ({ page }) => {
    const draggable = page.locator("#drag1");
    const dropZone = page.locator("#drop1");

    await dropZone.scrollIntoViewIfNeeded(); // ? Zascrolovani na misto kam pretahujeme prvek (pokud neni pro playwright prvek videt, nepretahne)
    await draggable.dragTo(dropZone);
    await expect(page.locator("#dropped-message")).toBeVisible();
  });

  test("Double Click", async ({ page }) => {
    await page.locator('[data-testid="double-click-box"]').dblclick();
    await expect(page.locator('[data-testid="double-click-box"]')).toHaveClass(
      /action-active/
    ); // ? /action-active/ - regex, který ověří, že element má třídu action-active. Používáme proto, že prvek má více tříd a toHaveClass ověřuje všechny třídy. Regulární výraz ověří, že prvek má třídu action-active a ostatní třídy jsou libovolné
  });

  test("Click and hold", async ({ page }) => {
    const hold = page.locator(".hold-button").click({ delay: 2000 });
    await expect(page.locator(".hold-button")).toContainClass("hold-active");
    await hold;
  });
});
