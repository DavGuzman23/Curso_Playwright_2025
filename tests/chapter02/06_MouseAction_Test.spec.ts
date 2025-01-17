import { test, expect, BrowserContext, Page, chromium } from "@playwright/test";

let context: BrowserContext
let page: Page

const userDataDir = './user-data-dir'

test.beforeAll(async() => {
    context = await chromium.launchPersistentContext(userDataDir, {
        headless: false,
    })
    page = context.pages()[0] || await context.newPage();
})

test.afterAll(async() => {
    await context.close()
})

test("Mouse actions in playwright", async ( ) => {

    await page.goto("https://www.google.com/search?q=playwright+by+testers+talk");
    await page.getByRole('button', { name: 'Aceptar todo' }).click()

    //!Click on el boton izquierdo
    await page.getByRole('link', {name: "Playwright by Testers Talk☑️"}).click({button: 'left'})

    // Middle button click
    // await page.getByRole('link', { name : 'Playwright by Testers Talk☑️'}).first().click({ button :'middle'});

    // Right button click
    //await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).first().click({ button: 'right' });

    // Mouse hover
    // await page.getByLabel('Search by voice').hover();

    // Double click
    // await page.getByLabel('Search by voice').dblclick();

    //await page.close()
 
});
