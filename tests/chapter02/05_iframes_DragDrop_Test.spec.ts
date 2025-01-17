import { test, expect } from "@playwright/test";

test("Handling Iframes, Drag and Drop element in playwright", async ({ page }) => {

    await page.goto("https://jqueryui.com/droppable/");

    const iframe = page.frameLocator('.demo-frame')
    //drag element, drop element
    const dragElement = iframe.locator('#draggable')
    const dropElement = iframe.locator('#droppable')

    //!Mover el elemento hasta el dropelement
    await dragElement.dragTo(dropElement)


    await page.close()
 
});
