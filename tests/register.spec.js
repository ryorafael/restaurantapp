import { test, expect } from "@playwright/test";

test("New user can register successfully", async ({ page }) => {
  await page.goto("http://localhost:3000");

  // Click the register link
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Register" })
    .click();

  await page.getByPlaceholder("Your name").fill("Test User");
  await page.getByPlaceholder("Email").fill(`user_${Date.now()}@example.com`);
  await page.getByPlaceholder("Create password").fill("testpassword123");
  await page.getByPlaceholder("Confirm password").fill("testpassword123");

  await page.getByRole("button", { name: /register/i }).click();

  await expect(page).toHaveURL("http://localhost:3000/login");
});
