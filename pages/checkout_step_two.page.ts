import { Locator, Page } from '../fixtures/fixtures';
import { checkoutStepTwo } from '../constants/endpoints.constants.json';
import BasePage from './base.page';

export default class CheckoutStepTwoPage extends BasePage {
    public priceTotalLabel: Locator;
    public finishBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.usePage = page;
        this.endpoint = checkoutStepTwo;
    }

    set usePage(page: Page) {
        super.usePage = page;
        this.priceTotalLabel = page.locator('[data-test="shipping-info-value"]');
        this.finishBtn = page.locator('#finish');
    }

    /** Open the Inventory page */
    async open(): Promise<void> {
        await super.open(this.endpoint);
    }
}
