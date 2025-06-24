import { test, expect } from '@playwright/test';

test('Flujo completo en saucedemo.com', async ({ page }) => {
  // 1. Navegar a la página de login
  await page.goto('https://www.saucedemo.com/');

  // 2. Ingresar usuario y contraseña
  await page.fill('#user-name', 'standard_user'); // Locator por id
  await page.fill('#password', 'secret_sauce');   // Locator por id

  // 3. Hacer clic en el botón de login
  await page.click('#login-button'); // Locator por id

  // 4. Verificar que el login fue exitoso (chequeando que aparece el título de productos)
  await expect(page.locator('.title')).toHaveText('Products');

  // 5. Agregar el primer producto al carrito
  await page.click('button[data-test="add-to-cart-sauce-labs-backpack"]'); // Locator por atributo data-test

  // 6. Ir al carrito
  await page.click('.shopping_cart_link'); // Locator por clase

  // 7. Verificar que el producto está en el carrito
  await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');

  // 8. Volver a la página de productos
  await page.click('#continue-shopping');

  // 9. Abrir el menú y cerrar sesión
  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');

  // 10. Verificar que regresó a la página de login
  await expect(page.locator('#login-button')).toBeVisible();
});