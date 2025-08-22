const bcrypt = require("bcryptjs");
const { hashPassword } = require("../backend/hashPassword"); // adjust if path differs

describe("hashPassword utility", () => {
  it("should hash a password and validate it with bcrypt", async () => {
    const plainPassword = "MySecret123";
    const hashed = await hashPassword(plainPassword);

    // hashed should not equal the plain password
    expect(hashed).not.toBe(plainPassword);

    // bcrypt should confirm the hash matches the original password
    const match = await bcrypt.compare(plainPassword, hashed);
    expect(match).toBe(true);
  });
});
