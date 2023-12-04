/**
 * @class WorkerError
 * @description Error code 1002
 */
export class WorkerError extends Error {
    constructor(...args) {
        super(...args);
        this.name = this.constructor.name;
        this.errorCode = 1002;
        this.message = `${this.errorCode} - ${this.message || 'worker error'}`;
        Error.captureStackTrace(this, WorkerError);
    }
}