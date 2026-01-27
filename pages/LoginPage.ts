// pageObjects/LoginPage.ts
import { Page,Locator  } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        // Inicialización de locators
        this.emailInput = page.getByPlaceholder('Enter your email...');
        this.passwordInput = page.getByPlaceholder('Enter your password...');
        this.loginButton = page.getByRole('button', { name: 'Log in' });
    }

    async login(email: string, password: string): Promise<void> {
        // Usando los locators para interactuar con la página
        await this.emailInput.type(email); // Llenar el campo de email
        await this.passwordInput.fill(password); // Llenar el campo de password
        await this.loginButton.click(); // Hacer clic en el botón de login
    }

    async isSidebarVisible(): Promise<boolean> {
        const sidebar = this.page.getByTestId('app-sidebar-container');
        return await sidebar.isVisible();
    }
}

export default LoginPage;