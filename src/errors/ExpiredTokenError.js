import { BaseError } from "./BaseError";

export class ExpiredTokenError extends BaseError {
    constructor(
        message = "Sessão inválida"
    ) {
        super(401, message);
    }
}