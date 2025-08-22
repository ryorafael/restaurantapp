const request = require("supertest");
const { app } = require("../backend/server");

describe("POST /api/reservations validation", () => {
  it("returns 400 when required fields are missing", async () => {
    const res = await request(app)
      .post("/api/reservations")
      .send({ name: "Test User" }); // missing date/time

    expect(res.status).toBe(400);

    // Accept either message variant
    const msg = (res.body && res.body.msg) || "";
    expect(msg.toLowerCase()).toMatch(
      /please provide (all required fields|name, date, and time)\./i
    );
  });
});
