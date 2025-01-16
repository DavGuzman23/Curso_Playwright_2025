// Import playwright module
import { test, expect } from "@playwright/test";

//!Se ejecutara antes de el lote de los test
test.beforeAll(async() => {
    console.log('Running before all tests...')
})

//!Se ejecutara despues de el lote de los test 
test.afterAll(async() => {
    console.log('Running after all tests...')
})

//! Se ejecutara antes de cada test
test.beforeEach(async({page}) => {
    await page.goto("https://www.google.com");
    await page.getByRole('button', { name: 'Aceptar todo' }).click()
    console.log('Running before each test...')
})

//!Se ejecutara despues de cada test
test.afterEach(async() => {
    console.log('Running after each test...')
})

test("Test 1", async ({ page }) => {
    console.log('Execution test1');

  //await page.goto("https://www.google.com");
  //await page.getByRole('button', { name: 'Aceptar todo' }).click()

  await page
    .getByLabel("Buscar", { exact: true })
    .fill("playwright by testers talk");
  await page.getByLabel("Buscar", { exact: true }).press("Enter");

  await page
    .getByRole("link", { name: "Playwright by Testers Talk" })
    .first()
    .click();
  await page.getByRole('button', { name: 'Accept all' }).click()
  
  await expect(page).toHaveTitle("Playwright by Testers Talk☑️ - YouTube");
  
});

test("Test 2", async ({ page }) => {
    console.log('Execution test2');

    //await page.goto("https://www.google.com");
    //await page.getByRole('button', { name: 'Aceptar todo' }).click()
    
  });
