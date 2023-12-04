/* eslint-disable global-require */
/**
 * run:
 * npm run test -- unit/customer/app.spec.js
 */

import * as app from '../../../functions/customer/app.mjs';

describe('customer app test', () => {

    beforeEach(() => {
    });

    afterEach(() => {
    });

    it('should throw error 1000', async () => {
        const event = {};
        const context = {};
        await app.handler(event, context);
    });

    it('should process purchase', async () => {
        const event = {
            operation: 'purchase'
        };
        const context = {};
        await app.handler(event, context);
    });

    it('should process return', async () => {
        const event = {
            operation: 'return'
        };
        const context = {};
        await app.handler(event, context);
    });
});