import { test, expect } from "@playwright/test";

test("User cannot log in with wrong credentials", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.getByRole("link", { name: "Login" }).click();
  await page.getByPlaceholder("Email").fill("ryorafael18@gmail.com");
  await page.getByPlaceholder("Password").fill("wrongpassword");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page).not.toHaveURL("http://localhost:3000/admin");
});
