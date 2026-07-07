import { test, chromium } from "@playwright/test";

test("Verify different pages", async ({ }) => {

    let browser = await chromium.launch({ headless: false });
    let context1 = await browser.newContext();
    let page1 = await context1.newPage();

    let context2 = await browser.newContext();
    let page2 = await context2.newPage();

    await page1.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    await page2.goto("https://tta-bank-digital-973242068062.us-west1.run.app/")

    //close the pages, context and browser
    await page1.close();
    await page2.close();
    await context1.close();
    await context2.close();
    await browser.close();

})