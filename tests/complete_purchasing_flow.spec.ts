import { expect, test } from "@fixtures/fixtures";
import { generateRandomNumber, generateRandomString } from "helper/random_generator.helper";

test.describe("Complete Flow for Purchasing", () => {
    test("Complete Flow for Purchasing", { tag: "@005" }, async ({ loginPage, inventoryPage, cartPage, checkoutStepOnePage, checkoutStepTwoPage, checkoutCompletePage }) => {
        await test.step("Successful Login with Valid Credentials", async () => {
            await loginPage.open();
            await loginPage.login({ username: process.env.LOGIN_STANDART_USER, password: process.env.LOGIN_PASSWORD });
            await expect(inventoryPage.extendSidebarMenuBtn).toBeVisible();
            await expect(inventoryPage.page).toHaveURL(inventoryPage.endpoint);
        });

        await test.step("Add item to the card", async () => {
            await inventoryPage.addToCardBtn.nth(0).click();
            await expect(inventoryPage.shoppingCardBadge).toBeVisible();
        });

        await test.step("Open cart page", async () => {
            await inventoryPage.shoppingCartBtn.click();
            await expect(cartPage.page).toHaveURL(cartPage.endpoint);
        });

        await test.step("Confirm item.Go to checkout", async () => {
            await cartPage.checkoutBtn.click();
            await expect(checkoutStepOnePage.page).toHaveURL(checkoutStepOnePage.endpoint);
        });

        await test.step("Checkout. Fill payment info", async () => {
            await checkoutStepOnePage.firstnameField.fill(generateRandomString(5));
            await checkoutStepOnePage.lastnameField.fill(generateRandomString(5));
            await checkoutStepOnePage.postalCodeField.fill(generateRandomNumber(5));
            await checkoutStepOnePage.contBtn.click();
            await expect(checkoutStepTwoPage.page).toHaveURL(checkoutStepTwoPage.endpoint);
            await expect(checkoutStepTwoPage.priceTotalLabel).toBeVisible();
        });

        await test.step("Finish payment", async () => {
            await checkoutStepTwoPage.finishBtn.click();
            await expect(checkoutCompletePage.checkoutCompleteLabel).toBeVisible();
          
        });
    });
});
