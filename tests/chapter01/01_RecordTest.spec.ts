import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  //Haciendo de esta manera los steps se veran de manera mas clara en el reporte
  await test.step("Navigating to URL", async () => {
    await page.goto("https://github.com/");
    await page.getByRole("link", { name: "Sign in" }).click();
  });

  await test.step("Enter username and password", async () => {
    await page.getByLabel("Username or email address").click();
    await page.getByLabel("Username or email address").fill("davidTEst");
    await page.getByLabel("Username or email address").press("Tab");
    await page.getByLabel("Password").fill("12234");
  });

  await test.step("Click on Sign in", async () => {
    await page.getByRole("button", { name: "Sign in", exact: true }).click();
  });

  await test.step("Validate error message", async () => {
    await expect(page.getByRole("alert")).toContainText(
      "Incorrect username or password."
    );
  });
});
