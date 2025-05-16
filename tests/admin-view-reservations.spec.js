import { test, expect } from "@playwright/test";

test("Admin can view reservations", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await page.getByRole("link", { name: "Login" }).click();
  await page.getByPlaceholder("Email").fill("ryorafael18@gmail.com");
  await page.getByPlaceholder("Password").fill("123456");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page).toHaveURL("http://localhost:3000/admin");

  await expect(
    page.getByRole("heading", { name: "Reservations" })
  ).toBeVisible();

  // Use Locator directly instead of .all()
  const guestRow = page.getByRole("row", { name: /Playwright Guest/i }).first();

  await expect(guestRow).toBeVisible();
  await guestRow.getByRole("button", { name: "Edit" }).click();
});
