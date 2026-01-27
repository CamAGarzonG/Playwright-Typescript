import { test, expect, Page } from '@playwright/test';
const EMAIL_INPUT = "#element-0";
const PASSWORD_INPUT = "#element-2";
const LOGIN_BUTTON = 'button[type="submit"]';

const locators = {};



test.describe('navigation in page', () => {

  
  test.beforeEach(async ({ page }) => {
    //LOCATORS
    var passwordInput = page.getByPlaceholder('Enter your password...');

    await page.goto('https://www.todoist.com/');

    //await page.locator('(//span[text()= "Log in"])[1]').click(); Not a good practice css and xpath
    const loginAccessButton = page.getByRole('link')
                                  .filter({ has: page.getByText('Log in') })  //https://playwright.dev/docs/locators#filter-by-childdescendant
    await loginAccessButton.click()

    //await page.fill(EMAIL_INPUT, "wl.interview.session@gmail.com");
    //await page.fill(PASSWORD_INPUT, "WL2021&*");
  });

  test('validate log in with correct credentials', async ({ page }) => {
    // Assertions use the expect API.
    await page.type(EMAIL_INPUT, "wl.interview.session@gmail.com");
    await page.fill(PASSWORD_INPUT, "WL2021&*");
    await page.click(LOGIN_BUTTON);
    await expect(page.getByTestId('app-sidebar-container')).toBeVisible();
  });

  test('validate log in with wrong credentials', async ({ page }) => {
    // Assertions use the expect API.
    await page.fill(EMAIL_INPUT, "wl.interview.session@gmail.com");
    await page.fill(PASSWORD_INPUT, "asdf1234*");
    await expect(page.getByText('Wrong email or password.')).toBeVisible(); 
  });

});

