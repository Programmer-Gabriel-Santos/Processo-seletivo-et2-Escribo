import { AuthenticationError } from "../errors/AuthenticationError";
import { AuthorizationError } from "../errors/AuthorizationError";
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

        const id = this.idGenerator.generate();
        const hashedPassword = await this.hashManager.hash(senha);

        const options = { timeZone: "America/Sao_Paulo" };
        const date = new Date().toLocaleDateString("pt-BR", options);

        const user = new User(id, nome, email, hashedPassword, telefones, UserRole.NORMAL, date, date, date);

        await this.userDatabase.insertUser(user);


        const payload = {
            id: user.getId(),
            role: user.getRole()
        };

        const token = this.authenticator.generateToken(payload);

        const response = {
            id: user.getId(),
            data_criacao: user.getDataCriacao(),
            data_atualizacao: user.getDataAtualizacao(),
            ultimo_login: user.getUltimoLogin(),
            token
        };

        return response;
    }

    async login(input) {
        const { email, senha } = input;

        if (!email || !senha) {
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

        const userDB = await this.userDatabase.findByEmail(email);

        if (!userDB) {
            throw new AuthenticationError();
        }

        const isPasswordIsCorrect = await this.hashManager.compare(senha, userDB.senha);

        if (!isPasswordIsCorrect) {
            throw new AuthenticationError();
        }

        const payload = {
            id: userDB.id,
            role: userDB.role
        };

        const token = this.authenticator.generateToken(payload);

        const response = {
            id: userDB.id,
            data_criacao: userDB.data_criacao,
            data_atualizacao: userDB.data_atualizacao,
            ultimo_login: userDB.ultimo_login,
            token
        };

        return response;
    }

    async getInfoUser(token) {

        if (!token) {
            throw new AuthorizationError();
        }

        const payload = this.authenticator.getTokenPayload(token);

        if (!payload) {
            throw new AuthorizationError();
        }

        const userDB = await this.userDatabase.findById(payload.id);

        const infoUser = {
            id: userDB.id,
            nome: userDB.nome,
            email: userDB.email,
            telefones: userDB.telefones,
            data_criacao: userDB.data_criacao,
            data_atualizacao: userDB.data_atualizacao,
            ultimo_login: userDB.ultimo_login
        };

        return infoUser;
    }
}