const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.foodora.fr/restaurant/s6cg/zappo");
  await page.screenshot({ path: "example.jpg" });

  await browser.close();
})();
