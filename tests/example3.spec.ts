import { test, expect, Page } from '@playwright/test';

test.describe('Flujo de usuario en saucedemo.com', () => {
  let url = 'https://www.saucedemo.com/';
  let page: Page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(url);
  });

  test.afterEach(async () => {
    await page.close();
  });

  test('Login, agregar producto, validar carrito y logout', async () => {
    await test.step('Validar URL de login', async () => {
      await expect(page).toHaveURL(url);
    });

    await test.step('Ingresar credenciales y hacer login', async () => {
      await page.fill('#user-name', 'standard_user');
      await page.fill('#password', 'secret_sauce');
      await Promise.all([
        page.waitForURL('**/inventory.html'),
        page.click('#login-button')
      ]);
      await expect(page.locator('.title')).toHaveText('Products');
      await expect(page).toHaveURL(/.*inventory.html/);
    });

    let nombreProducto = '';
    await test.step('Agregar primer producto al carrito', async () => {
    const productos = page.locator('.inventory_item');
    const count = await productos.count();
    expect(count).toBeGreaterThan(0); // Asegura que hay al menos un producto
    
    const primerProducto = productos.first();
    nombreProducto = await primerProducto.locator('.inventory_item_name').innerText();
    await primerProducto.locator('button').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    });

    await test.step('Validar producto en el carrito', async () => {
      await page.click('.shopping_cart_link');
      await expect(page).toHaveURL(/.*cart.html/);
      await expect(page.locator('.inventory_item_name')).toHaveText(nombreProducto);
    });

    await test.step('Volver a productos y validar botón Remove', async () => {
      await page.click('#continue-shopping');
      await expect(page).toHaveURL(/.*inventory.html/);
      const productos = page.locator('.inventory_item');
      const primerProducto = productos.first();
      await expect(primerProducto.locator('button')).toHaveText('Remove');
    });

    await test.step('Logout', async () => {
      await page.click('#react-burger-menu-btn');
      await page.click('#logout_sidebar_link');
      await expect(page).toHaveURL(url);
      await expect(page.locator('#login-button')).toBeVisible();
    });
  });
});