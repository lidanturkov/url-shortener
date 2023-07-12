const request = require("supertest");
require("dotenv").config();

describe("GetGoodShortUrlTest", () => {
  test("Should Return the long url", async () => {
    const res = await request(process.env.baseUrl)
      .get("/url/rnx9pbY3j")
      .expect(200);
  });
});

describe("GetBadShortUrlTest", () => {
  test("Should Return 404 not found long url", async () => {
    const res = await request(process.env.baseUrl)
      .get("/url/rnx9pbY333efgwerj")
      .expect(404);
  });
});
