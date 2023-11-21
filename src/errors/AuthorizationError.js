import { BaseError } from "./BaseError";

export class AuthorizationError extends BaseError {
	constructor(
		message = "Não autorizado" 
	) {
		super(401, message);
	}
}