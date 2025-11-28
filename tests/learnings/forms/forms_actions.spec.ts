import { test } from "@playwright/test";
import path from "path";

test.describe("Forms actions", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://tredgate.com/webtrain/registration.html");
  });

  test("fill and pressSequentially", async ({ page }) => {
    const nameInput = page.locator("#name");
    await nameInput.fill("Start"); // * vyplneni pole pomoci fill
    await nameInput.fill("End"); // * Vyplneni pole - fill prepise stavajici hodnotu
    await nameInput.pressSequentially("Kde toto bude?"); // * Vyplneni pomoci simulace klavesnice (jeden znak za druhym)  -> nemaze stavajici hodnoty v poli
    await nameInput.clear(); // ? Vycisti hodnotu v inputu, neni potreba pouzivat s fill, ktery hodnotu maze automaticky, ale muzeme chtit po pressSequentially
    await nameInput.pressSequentially("Pomalu pisu", { delay: 500 }); // ? Vypise string, v tomto pripade v rychlosti: 2 Znaky za sekundu (500ms cekani za kazdym znakem)
  });

  test("select option", async ({ page }) => {
    const genderSelection = page.locator("#gender");
    await genderSelection.selectOption("female"); // ? Vyber z prvku <select> pomoci atributu value v prvku <option>
    await genderSelection.selectOption({ label: "Male" }); // ? Vyber z <select> pomoci textu <option>
  });

  test("checkbox and radio check", async ({ page }) => {
    await page.locator("#contact-email").check(); // * Zakliknutí radio buttonu
    await page.locator("#interests-music").check();
    await page.locator("#interests-travel").check();
    await page.locator("#interests-travel").uncheck(); // * Odkliknutí prvku, funguje jen pro checkbox
  });

  test("date fill", async ({ page }) => {
    await page.locator("#date-of-birth").fill("1999-01-30"); // ! Pozor, toto funguje jen na prvek <input type="date">, často v aplikacích jsou datumy vytvořená jako zvláštní komponenta, pak uvidíme namísto inputu nejspíš sestavu <div>
  });

  test("upload file", async ({ page }) => {
    const filePath = path.resolve(__dirname, "../../../assets/upload_file.txt");
    // require("../../../assets/upload_file.txt");    // ? require slouzi pouze pro to, aby nam pomohl pripravit cestu (napovida), path.resolve nenapovida a je v nem slozitejsi cestu vytvorit

    // * Zapneme listenera (odchytavac) na vybrani souboru (filechooser) -> toto je asynchronni akce, NESMIME pred ni dat await (chceme aby listener poslouchal, ale necekal)
    const fileChooserPromise = page.waitForEvent("filechooser"); // ? do const ulozime odkaz na listenera, abychom se po kliknuti na input type='file' mohli odkazat na vyber souboru

    // * Klikneme na tlacitko pro nahrani souboru (inout type='file')
    await page.locator("#file-upload").click();

    // * Pockame nez listener fileChooserPromise odchyti otevreni okna pro vyber okna a ulozime vysledek (odchycene okno) do promenne (abychom mohli nasledne vlozit soubor)
    const fileChooser = await fileChooserPromise;

    // * Nahrajeme soubor pomocí proměnné filePath, kterou máme nachystanou z předchozích kroků
    await fileChooser.setFiles(filePath);

    // * Počkáme několik sekund, abychom v screenshotu viděli soubor vybraný
    // eslint-disable-next-line playwright/no-wait-for-timeout
    await page.waitForTimeout(2000);
  });
});
