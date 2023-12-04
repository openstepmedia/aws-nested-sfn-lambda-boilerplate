import * as fs from 'fs';

/**
 * Worker checks ware house / restocks return
 * @param {*} event 
 * @param {*} context 
 * @returns 
 */

import * as Logger from 'lambda-log';
import { HandleReturn } from './states/HandleReturn.mjs';
import { HandlePurchase } from './states/HandlePurchase.mjs';
import { WorkerError } from './error.mjs';

export const handler = async (event, context) => {

  let instance = null;
  let response = {};

    console.log('Event: ', event);
    console.log('Context:', context);

    switch (event.operation) {
        case 'purchase':
          instance = new HandlePurchase(event, context, response);
          break;
        case 'return':
          instance = new HandleReturn(event, context, response);
          break;
        default:
          break;
      }
  
      if (!instance) {
        Logger.error(event);
        throw new WorkerError(`${event.operation} not supported`);
      }

      await instance.process();    


    return response;
};
