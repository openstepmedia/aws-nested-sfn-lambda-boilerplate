/**
 * @class ConfigurationError
 * @description Error code 1000
 */
export class CustomerError extends Error {
    constructor(...args) {
        super(...args);
        this.name = this.constructor.name;
        this.errorCode = 1000;
        this.message = `${this.errorCode} - ${this.message || 'customer error'}`;
        Error.captureStackTrace(this, CustomerError);
    }
}