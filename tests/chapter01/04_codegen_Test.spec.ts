import { test, expect } from "@playwright/test";

test('Codegen test case ', async({page}) => {

    //!Ejemplo del video, no funciona.

    await page.goto('https://youtube.com')
    await page.getByPlaceholder('Search').click()
    await page.getByPlaceholder('Search').fill('playwright by testers talk')
    await page.getByRole('button', { name: 'Search', exact: true }).click()
    await page.getByRole('link', { name: 'Playwright by Testers Talk' }).click()
    await page.locator('video').click()
    await expect(page.getByRole('link', {name: 'Playwright by testers talk'})).toBeVisible();
  
})
