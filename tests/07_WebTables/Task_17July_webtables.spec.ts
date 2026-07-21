import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('Verify the row having "Terminated" status and click on delete icon from Orange HRM', async ({ page }) => {
    await page.goto('https://awesomeqa.com/hr/web/index.php/auth/login');

    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'Awesomeqa@4321');
    await page.click('button[type="submit"]');

    await expect(page).toHaveURL(/viewEmployeeList/, { timeout: 60000 });
    await page.waitForSelector('.oxd-table-card', { timeout: 60000 });

    const rows = page.locator('.oxd-table-card');
    const rowCount = await rows.count();
    console.log(`Found ${rowCount} row(s)`);

    for (let i = 0; i < rowCount; i++) {
        const row = rows.nth(i);
        const rowData = await row.locator('.oxd-table-cell').allInnerTexts();
        if (rowData.some(text => text.includes('Terminated'))) {
            console.log(`Row ${i + 1} contains Terminated`);
            await row.locator('i.oxd-icon.bi-trash').first().click();
            break;
        }
    }
});