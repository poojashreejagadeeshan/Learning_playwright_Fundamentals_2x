import { test, expect } from '@playwright/test';

test("Verify the title of the page", async ({ page }) => {

    await page.goto("https://app.vwo.com");
    await expect(page).toHaveTitle("Login - Wingify");
})

test.skip("Skipped test", async ({ page }) => {
    //test is skipped
})

test.only("Only test to run", async ({ page }) => {
    //only run this test
})

test.fail("Mark as failing", async ({ page }) => {
    //test is expected to fail
})