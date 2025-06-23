# Playwright-Typescript

1. Instalar NVM, Bash, Node
    1.1 https://playwright.dev/docs/intro

    1.2 https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

    1.3 https://github.com/nvm-sh/nvm 

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
4. Instalar "Playwright Snippets" (Se ve mejor) o "Playwright Test Snippets" (Segunt el del curso)
5. Instalar "Playwright Test for VSCode" (Levanta casos de prueba facil) ***
    5.1. Hace recordings, encuentra locators, muestra browser