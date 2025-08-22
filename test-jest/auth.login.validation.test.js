const request = require("supertest");
const { app } = require("../backend/server");

describe("POST /api/auth/login validation", () => {
  it("returns 400 when email or password is missing", async () => {
    // missing password
    const res1 = await request(app)
      .post("/api/auth/login")
      .send({ email: "user@test.com" });
    expect(res1.status).toBe(400);
    const msg1 = (res1.body && res1.body.msg) || "";
    // order-agnostic checks
    expect(msg1).toMatch(/provide|required/i);
    expect(msg1).toMatch(/email/i);
    expect(msg1).toMatch(/password/i);

    // missing email
    const res2 = await request(app)
      .post("/api/auth/login")
      .send({ password: "Secret123!" });
    expect(res2.status).toBe(400);
    const msg2 = (res2.body && res2.body.msg) || "";
    expect(msg2).toMatch(/provide|required/i);
    expect(msg2).toMatch(/email/i);
    expect(msg2).toMatch(/password/i);
  });
});
