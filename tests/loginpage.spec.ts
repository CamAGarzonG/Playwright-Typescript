import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test.describe('Login Tests', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await page.goto('https://www.todoist.com/');
        const loginAccessButton = page.getByRole('link').filter({ has: page.getByText('Log in') });
        await loginAccessButton.click();
    });

    test('validate log in with correct credentials', async () => {
        await loginPage.login("wl.interview.session@gmail.com", "WL2021&*");
        expect(await loginPage.isSidebarVisible()).toBeTruthy();

        

    });

    test('another test using the same locators', async () => {
        await loginPage.login("another.email@example.com", "AnotherPassword123");
        expect(await loginPage.isSidebarVisible()).toBeTruthy();
    });
});