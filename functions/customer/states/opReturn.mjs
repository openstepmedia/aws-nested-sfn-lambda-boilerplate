/**
 * 
 */

import { Base } from './opBase';

export class Return extends Base {

    async process() {
        console.debug('Customer.Return.process()');

        this.response = {
            products: [
                {
                    name: 'transcript',
                    price: 20.00,
                    qty: 1,
                },
            ]
        };        
    }

}