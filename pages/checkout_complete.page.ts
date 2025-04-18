import { Locator, Page } from '@fixtures/fixtures';
import { checkoutComplete } from '@constants/endpoints.constants.json';
import BasePage from './base.page';

export default class CheckoutCompletePage extends BasePage {
    public checkoutCompleteLabel: Locator;
    
    constructor(page: Page) {
        super(page);
        this.usePage = page;
        this.endpoint = checkoutComplete;
    }

    set usePage(page: Page) {
        super.usePage = page;
        this.checkoutCompleteLabel = page.locator('.complete-header');
    }

    /** Open the Inventory page */
    async open(): Promise<void> {
        await super.open(this.endpoint);
    }
}
