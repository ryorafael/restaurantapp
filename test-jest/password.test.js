const { hashPassword, verifyPassword } = require("../utils/utils/password");

describe("password utils", () => {
  it("hashes and verifies a password", async () => {
    const plain = "MySecret123!";
    const hash = await hashPassword(plain);

    expect(hash).toEqual(expect.any(String));
    expect(hash).not.toBe(plain);

    const ok = await verifyPassword(plain, hash);
    expect(ok).toBe(true);

    const bad = await verifyPassword("wrong", hash);
    expect(bad).toBe(false);
  });
});
