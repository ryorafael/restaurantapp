import { test, expect } from "@playwright/test";

test("Guest can submit a reservation without logging in", async ({ page }) => {
  await page.goto("http://localhost:3000");

  // Scroll to the reservation form if needed
  await page.locator("text=Book A Table").scrollIntoViewIfNeeded();

  // Fill out form fields
  await page.getByLabel("Full Name (required)").fill("Playwright Guest");
  await page.getByLabel("Phone Number").fill("1234567890");
  await page.getByLabel("Email").fill(`guest_${Date.now()}@example.com`);

  // Pick a valid date
  const dateInput = await page.getByPlaceholder("Select a date");
  await dateInput.click();
  await page.locator(".react-datepicker__day--015").click(); // Change this to a day you know is valid

  await page.getByLabel("Time").fill("18:00");
  await page.getByLabel("Guest").fill("2");
  await page.getByLabel("Comments").fill("Playwright test reservation");

  // Submit
  page.once("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Reservation submitted successfully");
    await dialog.dismiss(); // or .accept() to close alert
  });

  await page.getByRole("button", { name: "Reservation" }).click();
});
