import { BaseError } from "./BaseError.js";

export class EmailInvalid extends BaseError {
    constructor(
        message = "Email não atende aos requisitos de um email válido." 
    ) {
        super(422, message);
    }
}