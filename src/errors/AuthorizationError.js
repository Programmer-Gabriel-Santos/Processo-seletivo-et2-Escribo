import { BaseError } from "./BaseError.js";

export class AuthorizationError extends BaseError {
    constructor(
        message = "Não autorizado" 
    ) {
        super(401, message);
    }
}