import { test, expect } from "@playwright/test";

test("Admin can log in successfully", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Login" }).click();
  await page.getByLabel("Email").fill("ryorafael18@gmail.com");
  await page.getByLabel("Password").fill("LeFouFrog!Admin2025");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page).toHaveURL("/admin");
});
