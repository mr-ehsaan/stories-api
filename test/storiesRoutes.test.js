const request = require("supertest");
const app = require("../src/app");

describe("Stories Routes", () => {
  it("should fetch top stories", async () => {
    const res = await request(app).get("/api/stories/top");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeDefined();
    expect(res.body.length).toBeGreaterThan(0);
  });
});
