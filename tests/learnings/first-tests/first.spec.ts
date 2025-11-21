import { test } from "@playwright/test";

// ? Snippet; pwt (pw-test)

test("First Test", async ({ page }) => {
  // ? Testovaci kroky
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("pw_academy");
  await page.locator("#password").fill("Playwright321!");
  await page.locator('[type="submit"]').click();
});

/*
V tomto asistovaném cvičení vytvoříme nový test pro založení nového projektu v Pmtool aplikaci.
Náš cíl je:
  Přihlásit se do Pmtoolu.
  Otevřít menu Projects.
  Kliknout na tlačítko Add Project.
  Vyplnit povinná pole.
  Uložit nový projekt.

Budeme potřebovat nové Page Objecty:
  ProjectsPage
  CreateNewProjectModal
  ProjectTasksPage

Využijeme také knihovnu Faker.js pro generování dat.

Vytvoříme pro naše cvičení branch: exercise_assisted_pages

Části cvičení
  1. Vytvoření PO
  2. Vytvoření selektorů a metod v PO
  3. Úprava stávajících PO
  4. Vytvoření testu

*/
