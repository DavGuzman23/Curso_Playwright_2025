// Import playwright module
import { test, expect } from "@playwright/test";

//Write a test
test("My first playwright TS test", async ({ page }) => {
  //Go to URL
  await page.goto("https://www.google.com");
  await page.getByRole('button', { name: 'Aceptar todo' }).click()
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
  await page.getByRole('button', { name: 'Accept all' }).click()
  //Validate webpage title
  await expect(page).toHaveTitle("Playwright by Testers Talk☑️ - YouTube");
});
