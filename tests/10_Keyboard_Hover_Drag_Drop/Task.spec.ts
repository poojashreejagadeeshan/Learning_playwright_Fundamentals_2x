import { test, expect } from '@playwright/test';

test('Hover over the Add On and Find All menu optins and click on the wifi', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");

    let menu = page.getByTestId("nav-add-ons");
    await menu.hover();

    let submenu = await page.getByLabel('Add-ons submenu', { exact: true }).all();
    for (let listOfMenu of submenu) {
        console.log("List of Menu items: ", await listOfMenu.innerText());
    }

    await page.getByLabel('menu').getByTestId('test-id-Wifi').click();
    await page.pause();

})