import { Locator, Page } from '../fixtures/fixtures';
import { cart } from '../constants/endpoints.constants.json';
import BasePage from './base.page';

export default class CartPage extends BasePage {
    public checkoutBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.usePage = page;
        this.endpoint = cart;
    }

    set usePage(page: Page) {
        super.usePage = page;
        this.checkoutBtn = page.locator('#checkout');
    }

    /** Open the Inventory page */
    async open(): Promise<void> {
        await super.open(this.endpoint);
    }
}
