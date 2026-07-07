import { Browser, BrowserContext, chromium, Page } from 'playwright';

async function run() {
    const browser: Browser = await chromium.launch({ headless: false });

    const context1: BrowserContext = await browser.newContext();

    const context2: BrowserContext = await browser.newContext();

    const page: Page = await context1.newPage();

    await page.goto("https://app.vwo.com");
    await page.title();

    await page.close();
    await context1.close();
    await context2.close();
    await browser.close();


}