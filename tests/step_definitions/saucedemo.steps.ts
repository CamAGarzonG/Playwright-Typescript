import { Given, When, Then } from '@cucumber/cucumber';
import { test, Page, expect } from '@playwright/test';
//import { chromium, Page } from 'playwright'; // Keep this line for the browser and page creation

let page: Page; // Use the correct type for Page

Given('que estoy en la página de login', async ({ browser }) => {
    browser = await browser.launch();
    page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
});


When('ingreso el usuario {string} y la contraseña {string}', async (username: string, password: string) => {
    await page.fill('#user-name', username);
    await page.fill('#password', password);
});

When('hago clic en el botón de login', async () => {
    await page.click('#login-button');
});

Then('debería ver el título {string}', async (title: string) => {
    await expect(page.locator('.title')).toHaveText(title);
});

When('agrego el primer producto al carrito', async () => {
    await page.click('button[data-test="add-to-cart-sauce-labs-backpack"]');
});

When('voy al carrito', async () => {
    await page.click('.shopping_cart_link');
});

Then('debería ver el producto {string} en el carrito', async (productName: string) => {
    await expect(page.locator('.inventory_item_name')).toHaveText(productName);
});

When('vuelvo a la página de productos', async () => {
    await page.click('#continue-shopping');
});

When('abro el menú y cierro sesión', async () => {
    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');
});

Then('debería regresar a la página de login', async () => {
    await expect(page.locator('#login-button')).toBeVisible();
});