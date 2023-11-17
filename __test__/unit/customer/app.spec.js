/* eslint-disable global-require */
/**
 * run:
 * npm run test -- unit/customer/app.spec.js
 */

import { handler } as app from '../../functions/customer/app';

describe('customer app test', () => {

    beforeEach(() => {
    });

    afterEach(() => {
    });

    it('should process purchase', async () => {

        const app = require('../../functions/trx-morpheus-v2-converter-error/converterError');
        const event = {
            body: JSON.stringify(body)
        };
        const context = {};
        await app.handler(event, context);

    });
});