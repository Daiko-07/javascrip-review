import {generateUuid, validateUuid} from "./uuid.js";
import {ValidationError} from "./errors.js";

export class PurchaseOrderId {
    #value;

    constructor(value) {
        if (!validateUuid(value)) {
            throw new ValidationError(`Invalid PurchaseOrderID: ${value}. Must be a valid UUID.`);
        }
        this.#value = value;
        Object.freeze(this);
    }

    get value() {
        return this.#value;
    }

    toString() {
        return this.#value;
    }

    equals(other) {
        return other instanceof PurchaseOrderId && this.#value === other.#value;
    }

    static generate() {
        return new PurchaseOrderId(generateUuid());
    }
}