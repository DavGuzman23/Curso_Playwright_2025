import { test, expect } from "@playwright/test";

test("Handling dropdown list in playwright", async ({ page }) => {
  await page.goto("https://www.facebook.com");
  await page.getByRole("button", { name: "Allow all cookies" }).click();
  await page.getByRole("button", { name: "Create new account" }).click();
  //await page.getByRole("button", { name: "Allow all cookies" }).click();

  //Select dropdown using value
  await page.getByLabel("Day").selectOption("23");

  //Select dropdown using visible text
  await page.getByLabel("Month").selectOption("Oct");

  //Validate all the options
  await expect(page.locator("#month > option")).toHaveText([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]);

  await page.close();
});
