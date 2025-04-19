import { expect, test } from '../fixtures/fixtures';
import { errorInvalidCredentials } from '../constants/errors.constants.json';

test.describe('Error Message for Invalid Credentials', { tag: '@002' }, () => {
    test('Try to login with invalid credentials', async ({loginPage }) => {
        await loginPage.open();
        await loginPage.login({ username: process.env.LOGIN_STANDART_USER, password: process.env.LOGIN_PASSWORD_INVALID });
        await expect(loginPage.errorLabel).toHaveText(errorInvalidCredentials);
    })
});

