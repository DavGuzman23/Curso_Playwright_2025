// Import playwright module
import { test, expect } from "@playwright/test";

//Write a test
test("Record cursor test", async ({ page }) => {
  //Go to URL
  await page.goto("https://www.google.com");
  await page.getByRole("button", { name: "Aceptar todo" }).click();
  //Search with keywords
  await page
    .getByLabel("Buscar", { exact: true })
    .fill("playwright by testers talk");
  await page.getByLabel("Buscar", { exact: true }).press("Enter");
  //Click on playlist
  await page
    .getByRole("link", { name: "Playwright by Testers Talk" })
    .first()
    .click();
  await page.getByRole("button", { name: "Accept all" }).click();
  //Validate webpage title
  await expect(page).toHaveTitle("Playwright by Testers Talk☑️ - YouTube");

  //Grabando el cursor
  await expect(
    page.getByRole("link", { name: "Playwright Tutorial Full" })
  ).toBeVisible();

  await expect(
    page.getByRole("link", {
      name: "Playwright API Testing Tutorial Crash Course",
    })
  ).toBeVisible();

  await expect(
    page.getByLabel("Playwright Tutorial Full Course 2024").locator("#video-title")
  ).toContainText(
    "Playwright Tutorial Full Course 2024 | Playwright Testing Tutorial"
  );

  await expect(
    page
      .getByLabel(
        "Playwright API Testing Tutorial Crash Course 2024"
      )
      .locator("#video-title")
  ).toContainText("Playwright API Testing Tutorial Crash Course 2024");

  await page.close()
});