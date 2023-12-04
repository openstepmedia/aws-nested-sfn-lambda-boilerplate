/**
 * 
 */

import { Base } from './Base';

const validProducts = ['transcript', 'recording'];

export class HandlePurchase extends Base {

    async process() {
        console.debug('Manager.HandlePurchase.process()');
        
        for (let product of this.event.products)
        {

            if (this._isValidProduct(product))
            {
                this._prepareWorker();
            }
        }
        
        this._prepareWorker()
    }

    /**
     * Create a "worker" plan in the response
     */
    async _prepareWorker ()
    {
        this.response['worker'] = {
            operation: 'purchase'
        }
    }

    /**
     * Assumes event.products is populated
     */
    async _isValidProduct ()
    {

        for (let product of this.event.products)
        {
            if (validProducts.includes(product.name) === false)
            {
                // bad .. throw error
            }
        }

        return true;
    }

}