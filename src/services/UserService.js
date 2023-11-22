// import { EmailInvalid } from "../errors/EmailInvalid";
import { ParamsError } from "../errors/ParamsError";

export class UserService {
    constructor(
        userDatabase,
        idGenerator,
        hashManager,
        authenticator
    ) {
        this.userDatabase = userDatabase;
        this.idGenerator = idGenerator;
        this.hashManager = hashManager;
        this.authenticator = authenticator;
    }

    async signup(input) {
        const { nome, email, senha, telefones } = input;

        if(!nome || !email || !senha || !telefones || telefones.length < 1) {
            throw new ParamsError();
        }

    }

}