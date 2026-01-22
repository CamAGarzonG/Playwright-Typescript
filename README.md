# Playwright-Typescript

1. Instalar NVM, Bash, Node, TS
    1.1 https://playwright.dev/docs/intro

    1.2 https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

    1.3 https://github.com/nvm-sh/nvm 

    1.4 ts= npm install -g typescript // npm install -g ts-node (Para correrlo en vsc)

2. Instalar Playwright "https://playwright.dev/docs/intro#installing-playwright" con comando "npm init playwright@latest"
    Inside that directory, you can run several commands:

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test
3. Correr "npx playwright test" y luego "npx playwright show-report"  

4. Instalar "Playwright Snippets" (Se ve mejor) o "Playwright Test Snippets" (Segunt el del curso) [Para VSC]

5. Instalar "Playwright Test for VSCode" (Levanta casos de prueba facil) ***
    5.1. Hace recordings, encuentra locators, muestra browser

***
VSC

- Plugin para seleccionar browser, mostrarlo o seleccionar trace viewer (*Playwright Test Snippets*)

WebStorm

- Muestra esquema del pom
- No necesita plugins para correr TP
- Facil de usar pliugin de GIT


vsc
.-Playwright Test for VSCode


npm install @playwright/test @cucumber/cucumber ts-node typescript

---

# Playwright + TypeScript

## 1. Requisitos previos

- **NVM (Node Version Manager):**  
  [Guía de instalación](https://github.com/nvm-sh/nvm)
- **Node.js y npm:**  
  [Descargar e instalar Node.js y npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- **Bash:**  
  (Recomendado para usuarios de Windows: [Git Bash](https://gitforwindows.org/))
- **TypeScript y ts-node:**  
  ```bash
  npm install -g typescript ts-node
  ```

Para más información, consulta la [documentación oficial de Playwright](https://playwright.dev/docs/intro).

---

## 2. Instalación de Playwright

Ejecuta el siguiente comando en la raíz de tu proyecto:

```bash
npm init playwright@latest
```

Esto instalará Playwright y generará la estructura básica del proyecto.

---

## 3. Comandos útiles

Dentro del directorio del proyecto, puedes ejecutar:

- `npx playwright test`  
  Ejecuta todos los tests end-to-end.

- `npx playwright test --ui`  
  Inicia el modo interactivo de UI.

- `npx playwright test --project=chromium`  
  Ejecuta los tests solo en Chrome de escritorio.

- `npx playwright test example`  
  Ejecuta los tests de un archivo específico.

- `npx playwright test --debug`  
  Ejecuta los tests en modo debug.

- `npx playwright codegen`  
  Genera tests automáticamente con Codegen.

- `npx playwright show-report`  
  Muestra el reporte de los tests ejecutados.

**Sugerencia:**  
Comienza ejecutando:

```bash
npx playwright test
```

---

## 4. Ejemplo básico de test

```typescript
import { test, expect } from '@playwright/test';

test('homepage has title and get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
  await expect(page.locator('text=Get Started')).toBeVisible();
});
```

Guarda este archivo en la carpeta `tests` o `e2e` y ejecútalo con `npx playwright test`.

---

## 5. Extensiones recomendadas para Visual Studio Code

- **Playwright Snippets**  
  Mejora la escritura de código Playwright.
- **Playwright Test Snippets**  
  Recomendado en algunos cursos.
- **Playwright Test for VSCode**  
  Permite grabar, encontrar locators y visualizar el navegador fácilmente.

---

## 6. Consejos para IDEs

### Visual Studio Code (VSC)
- Usa los plugins mencionados para seleccionar navegador, ver el trace viewer y facilitar la grabación de tests.

### WebStorm
- Muestra el esquema del proyecto.
- No requiere plugins adicionales para ejecutar tests.
- Integración sencilla con Git.

---

## 7. Troubleshooting (Solución de problemas)

- **Error: "Cannot find module 'playwright'"**  
  Asegúrate de haber ejecutado `npm install` y de estar en la carpeta correcta.
- **Problemas con TypeScript:**  
  Verifica que tienes un archivo `tsconfig.json` y que TypeScript está instalado globalmente o como dependencia de desarrollo.
- **El navegador no abre:**  
  Ejecuta `npx playwright install` para instalar los navegadores requeridos.
- **Tests no se ejecutan:**  
  Verifica que tus archivos de test tengan la extensión `.spec.ts` o `.test.ts`.

---

## 8. Integración Continua (CI/CD) básica con GitHub Actions

Crea un archivo en tu proyecto en la ruta `.github/workflows/playwright.yml` con el siguiente contenido:

```yaml
name: Playwright Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npx playwright install --with-deps
      - run: npx playwright test
      - run: npx playwright show-report
```

Esto ejecutará tus tests automáticamente en cada push o pull request a la rama `main`.

---

¿Te gustaría agregar ejemplos de configuración avanzada, manejo de variables de entorno o integración con otros servicios? Si necesitas otra sección, ¡dímelo!