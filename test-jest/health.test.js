const request = require("supertest");
const { app } = require("../backend/server"); // NOTE: server is in /backend

describe("GET /api/health", () => {
  it("returns 200 and { status: 'ok' }", async () => {
    const res = await request(app).get("/api/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });
});
