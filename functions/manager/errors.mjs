/**
 * @class ManagerError
 * @description Error code 1001
 */
export class ManagerError extends Error {
    constructor(...args) {
        super(...args);
        this.name = this.constructor.name;
        this.errorCode = 1001;
        this.message = `${this.errorCode} - ${this.message || 'manager error'}`;
        Error.captureStackTrace(this, ManagerError);
    }
}

export class ProductError extends Error {
    constructor(...args) {
        super(...args);
        this.name = this.constructor.name;
        this.errorCode = 1002;
        this.message = `${this.errorCode} - ${this.message || 'product error'}`;
        Error.captureStackTrace(this, ProductError);
    }
}