import { Locator, Page } from '../fixtures/fixtures';
import { login } from '../constants/endpoints.constants.json';
import BasePage from './base.page';

export default class LoginPage extends BasePage {
    public usernameField: Locator;
    public passwordField: Locator;
    public loginBtn: Locator;
    public errorLabel: Locator;

    constructor(page: Page) {
        super(page);
        this.usePage = page;
        this.endpoint = login;
    }

    set usePage(page: Page) {
        super.usePage = page;
        this.usernameField = page.locator('#user-name');
        this.passwordField = page.locator('#password');
        this.loginBtn = page.locator('#login-button');
        this.errorLabel = page.locator('[data-test="error"]');
    }

    /** Open the Login page */
    async open(): Promise<void> {
        await super.open(this.endpoint);
    }

    async fillCreds(creds?: { username?: string; password?: string }) {
        const { username, password } = creds ?? {};
        if (username !== undefined) await this.usernameField.fill(username);
        if (password !== undefined) await this.passwordField.fill(password);
    }

    async login(creds?: { username?: string; password?: string }) {
        await this.fillCreds(creds)
        await this.loginBtn.click();
    }

}
