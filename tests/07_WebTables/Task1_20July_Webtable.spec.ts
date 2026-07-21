import { test, expect } from '@playwright/test';

test('Verify name and country in the Webtable', async ({ page }) => {


    await page.goto('https://app.thetestingacademy.com/playwright/tables/webtable');

    const country = await page.locator('#companies-table tr').filter({ hasText: 'Yoshi Tannamuri' }).locator("[data-col='country']").innerText()

    console.log(`Yoshi Tannamuri stays in : ${country}`);


});

