import * as fs from 'fs';

/**
 * 
 * @param {*} event 
 * @param {*} context 
 * @returns 
 */

import * as Logger from 'lambda-log';
import { Return } from './states/opReturn.mjs';
import { Purchase } from './states/opPurchase.mjs';
import { CustomerError } from './errors.mjs';

export const handler = async (event, context) => {

  let instance = null;
  let response = {};

    console.log('Event: ', event);
    console.log('Context:', context);

    switch (event.operation) {
        case 'purchase':
          instance = new Purchase(event, context, response);
          break;
        case 'return':
          instance = new Return(event, context, response);
          break;
        default:
          break;
      }
  
      if (!instance) {
        Logger.error(event);
        throw new CustomerError(`${event.operation} not supported`);
      }

      await instance.process();    


    return response;
};
