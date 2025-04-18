import { expect, test } from '@fixtures/fixtures';

test.describe('Login', () => {
    test('Successful Login with Valid Credentials', { tag: '@001' }, async ({loginPage, inventoryPage }) => {
        await loginPage.open();
        await loginPage.login({ username: process.env.LOGIN_STANDART_USER, password: process.env.LOGIN_PASSWORD });
        await expect(inventoryPage.extendSidebarMenuBtn).toBeVisible();
        await expect(inventoryPage.page).toHaveURL(inventoryPage.endpoint);
    });
});

