/**
 * 
 */

import { Base } from './opBase';

export class Purchase extends Base {

    async process() {
        console.debug('Customer.Purchase.process()');

        this.response = {
            products: [
                {
                    name: 'transcript',
                    price: 20.00,
                    qty: 1,
                },
                {
                    name: 'transcript',
                    price: 20.00,
                    qty: 1,
                },
            ]
        };

    }

}