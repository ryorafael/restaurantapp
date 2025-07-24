import { test, expect } from "@playwright/test";

test("New user can register successfully", async ({ page }) => {
  await page.goto("/");

  // Click the register link
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Register" })
    .click();

  await page.getByLabel("Name").fill("Test User");
  await page.getByLabel("Email").fill(`user_${Date.now()}@example.com`);
  await page.locator("#password").fill("testpassword123");
  await page.locator("#confirmPassword").fill("testpassword123");

  await page.getByRole("button", { name: /register/i }).click();

  await expect(page).toHaveURL("/registration");
});
