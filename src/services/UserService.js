import { DuplicateEmailError } from "../errors/DuplicateEmailError";
import { EmailInvalid } from "../errors/EmailInvalid";
import { ParamsError } from "../errors/ParamsError";
import { User, UserRole } from "../model/User";

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

        if (!nome || !email || !senha || !telefones || telefones.length < 1) {
            throw new ParamsError();
        }


        if (typeof nome !== "string") {
            throw new ParamsError();
        }

        if (nome.length < 3) {
            throw new ParamsError();
        }

        if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            throw new EmailInvalid();
        }

        if (typeof senha !== "string") {
            throw new ParamsError();
        }

        if (senha.length < 6) {
            throw new ParamsError();
        }

        if (telefones.length < 1) {
            throw new ParamsError();
        }

        telefones.forEach((tel) => {
            if (!Number(tel.numero) || !Number(tel.ddd)) {
                throw new ParamsError();
            }
        });

        telefones.forEach((tel) => {
            if (tel.numero.length < 9 || tel.ddd.length < 2) {
                throw new ParamsError();
            }
        });

        const userDB = await this.userDatabase.findByEmail(email);

        if (userDB) {
            throw new DuplicateEmailError();
        }
    }

}