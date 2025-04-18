import { expect, test } from '@fixtures/fixtures';
import { errorInvalidCredentials } from '@constants/errors.constants.json';

test.describe('Error Message for Invalid Credentials', { tag: '@003' }, () => {
    test('Login with invalid credentials', async ({loginPage }) => {
        await loginPage.open();
        await loginPage.fillCreds({ username: process.env.LOGIN_STANDART_USER, password: process.env.LOGIN_PASSWORD_INVALID });
        const inputType = await loginPage.passwordField.getAttribute('type');
        expect(inputType).toBe('password');

    });
});

