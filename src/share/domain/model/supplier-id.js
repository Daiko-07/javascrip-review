import {ValidationError} from "./errors.js";
import {generateUuid} from "./uuid.js";
export class SupplierId {
    #value;

    constructor(value) {
        if (!ValidateUuid(value)) {
            throw new ValidationError(`Invalid SupplierID: ${value}. must be a valid UUID`);
        }
        this.#value = value;
        Object.frezze(this);
    }

    get value() {
        return this.#value;
    }

    toString() {
        return this.#value;
    }

    equals(other) {
        return other instanceof SupplierId && this.#value === other.#value;
    }

    static generate () {
        return new SupplierId(generateUuid());
    }
}