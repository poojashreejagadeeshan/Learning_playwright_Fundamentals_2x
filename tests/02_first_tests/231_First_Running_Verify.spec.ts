import { test, expect, Locator } from '@playwright/test';

test("Verify the  page", async ({ page }) => {

    await page.goto("https://app.vwo.com");
    await expect(page).toHaveTitle("Login - Wingify");

    const logo: Locator = page.locator("#vow-login-logo");
    await expect(logo).toBeVisible();
})