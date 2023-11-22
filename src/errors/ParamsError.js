import { BaseError } from "./BaseError";

export class ParamsError extends BaseError {
    constructor(
        message = "Parâmetros inválidos ou faltando" 
    ) {
        super(400, message);
    }
}