import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});


test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('successful login', async ({ page }) => {
  await page.goto('https://example.com/login');
  await page.locator('#username').fill('testuser');
  await page.locator('#password').fill('password123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.locator('.welcome-message')).toHaveText('Welcome, testuser');
});