import { test, expect } from '@playwright/test';

// async: Le decimos a JavaScript que esta función hará cosas que pueden tardar,
// como esperar que cargue una página. Así, no se bloquea el programa.
test('ejemplo de async/await en Playwright', async ({ page }) => {

  // await: Es como decir "espera aquí hasta que esto termine".
  // Aquí, esperamos a que la página cargue antes de seguir.
  await page.goto('https://example.com');

  // await: También esperamos a que el navegador nos dé el título de la página.
  const titulo = await page.title();

  // Asíncrono: Significa que el código no se ejecuta todo de una vez,
  // sino que algunas partes pueden tardar (como cargar una web),
  // y el programa puede seguir haciendo otras cosas mientras tanto.

  expect(titulo).toBe('Example Domain');
});

//--------------------------------------------
/*
Uso Básico de async:

Al marcar una función con async, automáticamente la convertimos en una función que retorna una promesa.

Por ejemplo, async function obtenerDatos() { ... }.

Implementando await:

Dentro de una función async, podemos usar await para esperar el resultado de una promesa sin bloquear la ejecución del resto del programa.

Por ejemplo, let resultado = await algunaPromesa();.

Demostración con Playwright:

Veamos cómo esto se aplica en Playwright. Al realizar pruebas de navegación, frecuentemente esperamos a que las páginas carguen o a que los elementos estén disponibles. Aquí es donde async y await se vuelven indispensables.

Ejemplo en Código:
*/


import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://ejemplo.com');
  // Más operaciones asíncronas...
  await browser.close();
})();