import { BaseError } from "./BaseError";

export class AuthenticationError extends BaseError {
    constructor(
        message = "Usuário e/ou senha inválidos"
    ) {
        super(401, message);
    }
}