

import { BaseError } from "./BaseError.js";

export class DuplicateEmailError extends BaseError {
    constructor(
        message = "E-mail já existente"
    ) {
        super(409, message);
    }
}