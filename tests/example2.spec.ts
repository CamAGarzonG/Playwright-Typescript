import { test, expect } from '@playwright/test';

test('Flujo completo en saucedemo.com', async ({ page }) => {
  // 1. Navegar a la página de login
  await page.goto('https://www.saucedemo.com/');
  // -----  await page.getByLabel('Username').fill('standard_user');
  await page.fill('#user-name', 'standard_user'); // Locator por id
  await page.fill('#password', 'secret_sauce');   // Locator por id
  // 3. Hacer clic en el botón de login
  // -----  await page.getByRole('button', { name: 'login-button' }).click();
  await page.click('#login-button'); // Locator por id
  await expect(page.locator('.title')).toHaveText('Products');
  await page.click('button[data-test="add-to-cart-sauce-labs-backpack"]'); 
  await page.click('.shopping_cart_link'); // Locator por clase
  // 7. Verificar que el producto está en el carrito
  await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
  // 8. Volver a la página de productos
  await page.click('#continue-shopping');
  // 9. Abrir el menú y cerrar sesión
  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');
  await expect(page.locator('#login-button')).toBeVisible();
});



test('iframe validation', async ({ page }) => {
  await page.goto('https://www.automationtesting.co.uk/iframes.html');
  const frameLocator = page.frameLocator('iframe[src="index.html"]');
  await frameLocator.locator('.toggle').click(); 
  //await frameLocator.click('.toggle'); // Replace with the actual button selector
  await expect(frameLocator.locator('a[href="dropdown.html"]')).toHaveText('DropDown Checkbox Radio');
});




//test('iframe', async ({ page }) => {
//  const context = await browser.newContext();

//  await page.goto('https://www.automationtesting.co.uk/popups.html');

  
//  await page.click('button[onclick="alertTrigger()"]');
//  await page.waitForTimeout(1000); // Esperar 1 segundo (opcional)

//  page.on('dialog', async dialog => {
//    console.log(`Dialog message: ${dialog.message()}`); // Imprimir el mensaje del confirm
//    await dialog.accept(); // Aceptar el confirm
//  });

  // Hacer clic en el botón que abre el pop-up (en una nueva pestaña)
//    const [newPage] = await Promise.all([
//        context.waitForEvent('page'), // Esperar a que se abra una nueva pestaña
//        page.click('#boton-abrir-popup') // Hacer clic en el botón
//    ]);

  
//    await newPage.close();// Cerrar la nueva pestaña
//    const originalPage = context.pages()[0]; // Obtener la pestaña original  
//});



test('Validate API response elements', async ({ page }) => {
  // Intercept the GET request to the API
  await page.route('https://jsonplaceholder.typicode.com/posts/1', async (route) => {
    // Continue with the original request
    await route.continue();
  });

  // Wait for the response and validate the response data
  const response = await page.waitForResponse('https://jsonplaceholder.typicode.com/posts/1');
  const responseData = await response.json();

  // Validate the response data
  expect(responseData).toHaveProperty('userId', 1); // Validate that userId is 1
  expect(responseData).toHaveProperty('id', 1); // Validate that id is 1
  expect(responseData).toHaveProperty('title', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'); // Validate title
  expect(responseData).toHaveProperty('body'); // Validate that body property exists

  // Validate the body content
  expect(responseData.body).toBe(`quia et suscipit
suscipit recusandae consequuntur expedita et cum
reprehenderit molestiae ut ut quas totam
nostrum rerum est autem sunt rem eveniet architecto`); // Validate the body content
});




const users = [
  { username: 'standard_user', password: 'secret_sauce', expectedTitle: 'Products' },
  { username: 'locked_out_user', password: 'secret_sauce', expectedTitle: 'Epic sadface: Sorry, this user has been locked out.' },
  { username: 'problem_user', password: 'secret_sauce', expectedTitle: 'Products' },
  { username: 'invalid_user', password: 'wrong_password', expectedTitle: 'Epic sadface: Username and password do not match any user in this service' }, // Escenario negativo
];

for (const user of users) {
  test(`Login como ${user.username}`, async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', user.username);
    await page.fill('#password', user.password);
    await page.click('#login-button');

    // Verificar el resultado esperado
    if (user.username === 'standard_user' || user.username === 'problem_user') {
      await expect(page.locator('.title')).toHaveText(user.expectedTitle);
    } else {
      await expect(page.locator('.error-message-container')).toHaveText(user.expectedTitle);
    }
  });
}