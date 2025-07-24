import { test, expect } from "@playwright/test";

test("User cannot log in with wrong credentials", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Login" }).click();
  await page.getByLabel("Email").fill("ryorafael18@gmail.com");
  await page.getByLabel("Password").fill("wrongpassword");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page).not.toHaveURL("/admin");
});
