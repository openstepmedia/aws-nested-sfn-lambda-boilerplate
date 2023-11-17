'use strict';

/**
 * 
 * @param {*} event 
 * @param {*} context 
 * @returns 
 */
export const handler = async (event, context) => {

    let response = {};

    console.log('Event: ', event);
    console.log('Context:', context);

    // event.operation must be set:

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
  
      await instance.process();    


    return response;
};
