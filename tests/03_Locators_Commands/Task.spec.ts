import { test, chromium, Locator, expect } from "@playwright/test";

test("Verify the xpath of the page", async ({ page }) => {

    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await page.locator("#btn-make-appointment").click();

    //username
    let username: Locator = page.locator("#txt-username");
    await username.fill("John Doe");

    //password
    let password: Locator = page.locator("#txt-password");
    await password.fill("ThisIsNotAPassword");

    //Login button
    let loginBtn: Locator = page.locator("#btn-login");
    await loginBtn.click();

    // verify url
    await expect(page).toHaveURL(/appointment/);


    //click header
    let header: Locator = page.locator("//h2[text()='Make Appointment']");
    await expect(header).toContainText('Make Appointment');

    //checkbox
    let checkbox: Locator = page.locator("#chk_hospotal_readmission");
    await checkbox.check();

    //radio
    let radio: Locator = page.locator("#radio_program_medicare");
    await radio.check();

    //date
    let calendar: Locator = page.locator("#txt_visit_date");
    await calendar.fill("07/19/2026");

    //comments
    let comment: Locator = page.locator("#txt_comment");
    await comment.pressSequentially("This is a test comment");

    //book appointment
    let bookApt: Locator = page.locator("#btn-book-appointment");
    await bookApt.click();

    await page.waitForTimeout(3000);



});