/**
 * Custom error class for domain-specific validation errors.
 */
export class ValidationError extends Error {

    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}