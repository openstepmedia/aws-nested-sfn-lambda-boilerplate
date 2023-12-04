/**
 * 
 */

export class Base {

    constructor (event, context, response) {
        this.event = event;
        this.context = context;
        this.response = response;
    }

    async process() {
        console.debug('Base process()');
    }

}