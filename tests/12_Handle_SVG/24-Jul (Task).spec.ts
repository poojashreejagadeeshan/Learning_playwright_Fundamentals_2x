//Find the cheapest Macmini while search

import { test, type Locator } from '@playwright/test'

const URL = 'https://www.flipkart.com/search';

test.describe('Find all Flipkart products and get the cheapest one from page ', () => {

    test.beforeEach(async ({ page }) => {
        console.log("Going to flipkart search page.....");
        await page.goto(URL);
    });
    test("Searching macmini and getting all products", async ({ page }) => {
        await page.getByRole('textbox', { name: 'Search for products, brands' }).fill('macmini');
        await page.getByRole('textbox', { name: 'Search for products, brands' }).press('Enter');

        await page.waitForLoadState('networkidle');//waiting for page to get load
        const productPath: Locator = page.locator('//a[@target="_blank"][2]');

        const productCount: number = await productPath.count();

        for (let i = 0; i < productCount; i++) {
            const productName: string | null = await productPath.nth(i).textContent();
            if (productName && !productName.includes('Cleartrip')) {
                console.log(productName);
            }
        }
    });

    test("Sorting the cheapest product", async ({ page }) => {
        await page.getByRole('textbox', { name: 'Search for products, brands' }).fill('macmini');
        await page.getByRole('textbox', { name: 'Search for products, brands' }).press('Enter');
        await page.waitForLoadState('networkidle');
        await page.getByText('Price -- Low to High', { exact: true }).click();
        await page.waitForLoadState('networkidle');
        const cheapestPrice: string = await page.locator("//a[@class='fb4uj3'][div]").first().innerText();
        await page.waitForTimeout(5000);
        console.log("Cheapest price of macmini is:", cheapestPrice);
        // await page.pause();

    });
});