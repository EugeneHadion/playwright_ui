import { Locator, Page } from '@fixtures/fixtures';
import { checkoutStepOne } from '@constants/endpoints.constants.json';
import BasePage from './base.page';

export default class CheckoutStepOnePage extends BasePage {
    public firstnameField: Locator;
    public lastnameField: Locator;
    public postalCodeField: Locator;
    public contBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.usePage = page;
        this.endpoint = checkoutStepOne;
    }

    set usePage(page: Page) {
        super.usePage = page;
        this.firstnameField = page.locator('#first-name');
        this.lastnameField = page.locator('#last-name');
        this.postalCodeField = page.locator('#postal-code');
        this.contBtn = page.locator('#continue');
    }

    /** Open the Inventory page */
    async open(): Promise<void> {
        await super.open(this.endpoint);
    }
}
