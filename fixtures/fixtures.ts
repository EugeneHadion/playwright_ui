import { test as base } from '@playwright/test';

import LoginPage from '@pages/login.page';
import InventoryPage from '@pages/inventory.page';
import CartPage from '@pages/cart.page';
import CheckoutStepOnePage from '@pages/checkout_step_one.page';
import CheckoutStepTwoPage from '@pages/checkout_step_two.page';
import CheckoutCompletePage from '@pages/checkout_complete.page';

export const test = base.extend<{
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    cartPage: CartPage;
    checkoutStepOnePage: CheckoutStepOnePage;
    checkoutStepTwoPage: CheckoutStepTwoPage;
    checkoutCompletePage: CheckoutCompletePage;


}>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    inventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
    checkoutStepOnePage: async ({ page }, use) => {
        await use(new CheckoutStepOnePage(page));
    },
    checkoutStepTwoPage: async ({ page }, use) => {
        await use(new CheckoutStepTwoPage(page));
    },
    checkoutCompletePage: async ({ page }, use) => {
        await use(new CheckoutCompletePage(page));
    },
});

export { expect, type Page, type Download, type Locator, type TestInfo } from '@playwright/test';
