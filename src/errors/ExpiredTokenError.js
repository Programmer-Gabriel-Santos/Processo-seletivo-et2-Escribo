import { BaseError } from "./BaseError.js";

export class ExpiredTokenError extends BaseError {
    constructor(
        message = "Sessão inválida"
    ) {
        super(401, message);
    }
}