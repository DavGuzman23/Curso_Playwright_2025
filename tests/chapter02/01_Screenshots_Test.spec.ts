// Import playwright module
import { test, expect } from "@playwright/test";

test("Capture screenshots in playwright", async ({ page }) => {
  //Go to URL
  await page.goto("https://www.youtube.com/@testerstalk");
  await page.getByRole('button', { name: 'Accept all' }).click()

  //Element screenshots 
  //!En el path ponemos primero la carpeta donde se va a guardar/ nombre del archivo que vamos a poner
  await page.locator('#page-header-container').screenshot({path: './screenshots/ElementScreenshot.png'})

  //Page screenshots
  await page.screenshot({path: './screenshots/PageScreenshot.png'})

  //Full page screenshots
  await page.screenshot({path: './screenshots/FullPageScreenshot.png', fullPage: true})

});
