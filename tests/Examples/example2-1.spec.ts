import { test, expect, Page } from '@playwright/test';

// Define locators as constants for reusability
const USERNAME_INPUT = '#user-name';
const PASSWORD_INPUT = '#password';
const LOGIN_BUTTON = '#login-button';
const PRODUCTS_TITLE = '.title';
const ADD_TO_CART_BUTTON = 'button[data-test="add-to-cart-sauce-labs-backpack"]';
const SHOPPING_CART_LINK = '.shopping_cart_link';
const INVENTORY_ITEM_NAME = '.inventory_item_name';
const CONTINUE_SHOPPING_BUTTON = '#continue-shopping';
const MENU_BUTTON = '#react-burger-menu-btn';
const LOGOUT_LINK = '#logout_sidebar_link';

async function login(page: Page, username: string, password: string) {
  await page.fill(USERNAME_INPUT, username); // Fill username
  await page.fill(PASSWORD_INPUT, password);   // Fill password
  await page.click(LOGIN_BUTTON); // Click login button
}

test.describe('SauceDemo User Flow Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  test('Complete flow on saucedemo.com', async ({ page }) => {
    await login(page, 'standard_user', 'secret_sauce');
    await expect(page.locator(PRODUCTS_TITLE)).toHaveText('Products');
    await page.click(ADD_TO_CART_BUTTON);
    await page.click(SHOPPING_CART_LINK);
    await expect(page.locator(INVENTORY_ITEM_NAME)).toHaveText('Sauce Labs Backpack');
    await page.click(CONTINUE_SHOPPING_BUTTON);
    await page.click(MENU_BUTTON);
    await page.click(LOGOUT_LINK);
    await expect(page.locator(LOGIN_BUTTON)).toBeVisible();
  });

  test('Login with invalid credentials', async ({ page }) => {
    await login(page, 'invalid_user', 'wrong_password');
    await expect(page.locator('.error-message-container')).toBeVisible();
  });

  test('Add multiple products to the cart', async ({ page }) => {
    await login(page, 'standard_user', 'secret_sauce');
    await page.click(ADD_TO_CART_BUTTON);
    await page.click('button[data-test="add-to-cart-sauce-labs-bike-light"]');
    await page.click(SHOPPING_CART_LINK);
    await expect(page.locator(INVENTORY_ITEM_NAME)).toHaveText(['Sauce Labs Backpack', 'Sauce Labs Bike Light']);
  });
});