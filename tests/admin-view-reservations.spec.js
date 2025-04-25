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

  // ✅ Wait for at least one table row
  const firstRow = page.locator("table tbody tr").first();
  await expect(firstRow).toBeVisible();
  await page
    .getByRole("row", { name: "21 Playwright Guest" })
    .getByRole("button")
    .first()
    .click();
  await expect(page.locator("#root")).toMatchAriaSnapshot(`
    - heading "Admin Dashboard" [level=1]
    - button "Logout"
    - heading "Reservations" [level=2]
    - table:
      - rowgroup:
        - row "ID Name Email Phone Date Time Party Size Actions":
          - cell "ID"
          - cell "Name"
          - cell "Email"
          - cell "Phone"
          - cell "Date"
          - cell "Time"
          - cell "Party Size"
          - cell "Actions"
      - rowgroup:
        - row /\\d+ Playwright Guest guest_1744360026666@example\\.com \\d+ 4\\/\\d+\\/\\d+ \\d+:\\d+ Edit Delete/:
          - cell /\\d+/
          - cell "Playwright Guest"
          - cell "guest_1744360026666@example.com"
          - cell /\\d+/
          - cell /4\\/\\d+\\/\\d+/
          - cell /\\d+:\\d+/
          - cell
          - cell "Edit Delete":
            - button "Edit"
            - button "Delete"
        - row /\\d+ Playwright Guest guest_1744360027532@example\\.com \\d+ 4\\/\\d+\\/\\d+ \\d+:\\d+ Edit Delete/:
          - cell /\\d+/
          - cell "Playwright Guest"
          - cell "guest_1744360027532@example.com"
          - cell /\\d+/
          - cell /4\\/\\d+\\/\\d+/
          - cell /\\d+:\\d+/
          - cell
          - cell "Edit Delete":
            - button "Edit"
            - button "Delete"
        - row /\\d+ Playwright Guest guest_1744360028190@example\\.com \\d+ 4\\/\\d+\\/\\d+ \\d+:\\d+ Edit Delete/:
          - cell /\\d+/
          - cell "Playwright Guest"
          - cell "guest_1744360028190@example.com"
          - cell /\\d+/
          - cell /4\\/\\d+\\/\\d+/
          - cell /\\d+:\\d+/
          - cell
          - cell "Edit Delete":
            - button "Edit"
            - button "Delete"
        - row /\\d+ Anais anais@gmail\\.com \\d+ 3\\/\\d+\\/\\d+ \\d+:\\d+ Edit Delete/:
          - cell /\\d+/
          - cell "Anais"
          - cell "anais@gmail.com"
          - cell /\\d+/
          - cell /3\\/\\d+\\/\\d+/
          - cell /\\d+:\\d+/
          - cell
          - cell "Edit Delete":
            - button "Edit"
            - button "Delete"
        - row /\\d+ Harry harry@gmail\\.com \\d+ 3\\/\\d+\\/\\d+ \\d+:\\d+ Edit Delete/:
          - cell /\\d+/
          - cell "Harry"
          - cell "harry@gmail.com"
          - cell /\\d+/
          - cell /3\\/\\d+\\/\\d+/
          - cell /\\d+:\\d+/
          - cell
          - cell "Edit Delete":
            - button "Edit"
            - button "Delete"
        - row /\\d+ John Doe johndoe@example\\.com \\d+ 1\\/\\d+\\/\\d+ \\d+:\\d+ Edit Delete/:
          - cell /\\d+/
          - cell "John Doe"
          - cell "johndoe@example.com"
          - cell /\\d+/
          - cell /1\\/\\d+\\/\\d+/
          - cell /\\d+:\\d+/
          - cell
          - cell "Edit Delete":
            - button "Edit"
            - button "Delete"
        - row /9 Ryo test@example\\.com \\d+ 1\\/\\d+\\/\\d+ \\d+:\\d+ Edit Delete/:
          - cell "9"
          - cell "Ryo"
          - cell "test@example.com"
          - cell /\\d+/
          - cell /1\\/\\d+\\/\\d+/
          - cell /\\d+:\\d+/
          - cell
          - cell "Edit Delete":
            - button "Edit"
            - button "Delete"
    - heading "Edit Reservation" [level=2]
    - textbox "Guest Name": Playwright Guest
    - textbox "Guest Email": guest_1744360026666@example.com
    - textbox "Guest Phone"
    - textbox: /\\d+-\\d+-\\d+/
    - textbox: /\\d+:\\d+/
    - spinbutton
    - button "Save"
    - button "Cancel"
    `);
  await expect(page.locator("tbody")).toMatchAriaSnapshot(`
    - cell "Edit Delete":
      - button "Edit"
      - button "Delete"
    `);
});
