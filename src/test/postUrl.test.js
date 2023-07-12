const request = require("supertest");
require("dotenv").config();

describe("GoodPostUrlTest", () => {
  test("Should return object for correct url", async () => {
    const res = await request(process.env.baseUrl)
      .post("/api/url/shorten")
      .send({
        longUrl:
          "https://www.google.com/search?q=amazon+playstation+6&rlz=1C1CHBD_enIL1027IL1027&sxsrf=AB5stBiMC0juqnbEEfW5FzZuMg1iUeKDuw%3A1689085035797&ei=a2StZIalMMnJkwXo2qrICw&ved=0ahUKEwjGhreM7IaAAxXJ5KQKHWitCrkQ4dUDCA8&uact=5&oq=amazon+playstation+6&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCCMQigUQJzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoKCAAQRxDWBBCwAzoKCAAQigUQsAMQQ0oECEEYAFDgBFjOBmCbB2gBcAF4AIAB_AGIAfwBkgEDMi0xmAEAoAEBwAEByAEK&sclient=gws-wiz-serp",
      });

    expect(res).toBeInstanceOf(Object);
  });
});

describe("PostBadBaseUrlTest", () => {
  test("Should return 401 for wrong baseurl", async () => {
    const res = await request(process.env.baseUrl)
      .post("/api/url/short")
      .send({
        longUrl:
          "https://www.google.com/search?q=amazon+playstation+6&rlz=1C1CHBD_enIL1027IL1027&sxsrf=AB5stBiMC0juqnbEEfW5FzZuMg1iUeKDuw%3A1689085035797&ei=a2StZIalMMnJkwXo2qrICw&ved=0ahUKEwjGhreM7IaAAxXJ5KQKHWitCrkQ4dUDCA8&uact=5&oq=amazon+playstation+6&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCCMQigUQJzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoKCAAQRxDWBBCwAzoKCAAQigUQsAMQQ0oECEEYAFDgBFjOBmCbB2gBcAF4AIAB_AGIAfwBkgEDMi0xmAEAoAEBwAEByAEK&sclient=gws-wiz-serp",
      })
      .expect(401);
  });
});

describe("PostWrongUrlTest", () => {
  test("Should return 401 for wrong long url", async () => {
    const res = await request(process.env.baseUrl)
      .post("/api/url/shorten")
      .send({
        longUrl:
          "https://www.google.com/searchq=am+playstation+6&rlz=1C1CHBD_enL1027&sxsrf=AB5stBiMC0juqnbEEfW5FzZuMg1iUeKDuw%3A1689085035797&ei=a2StZIalMMnJkwXo2qrICw&ved=0ahUKEwjGhreM7IaAAxXJ5KQKHWitCrkQ4dUDCA8&uact=5&oq=amazon+playstation+6&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCCMQigUQJzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoKCAAQRxDWBBCwAzoKCAAQigUQsAMQQ0oECEEYAFDgBFjOBmCbB2gBcAF4AIAB_AGIAfwBkgEDMi0xmAEAoAEBwAEByAEK&sclient=gws-wiz-serp",
      })
      .expect(401);
  });
});

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
