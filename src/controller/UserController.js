import { BaseError } from "../errors/BaseError.js";

export class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    signup = async (req, res) => {
        try {
            const input = {
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha,
                telefones: req.body.telefones
            };

            const response = await this.userService.signup(input);

            res.status(201).send(response);

        } catch (error) {
            if (error instanceof BaseError) {
                res.status(400).send({ message: error.message });
            } else {
                res.status(500).send({ message: "Um erro inesperado ocorreu :/" });
            }
        }
    };

    login = async (req, res) => {
        try {
            const input = {
                email: req.body.email,
                senha: req.body.senha,
            };

            const response = await this.userService.login(input);

            res.status(200).send(response);

        } catch (error) {
            if (error instanceof BaseError) {
                res.status(400).send({ message: error.message });
            } else {
                res.status(500).send({ message: "Um erro inesperado ocorreu :/" });
            }
        }
    };

    getInfoUser = async (req, res) => {
        try {
            const token = req.headers.authorization;

            const response = await this.userService.getInfoUser(token);

            res.status(200).send(response);

        } catch (error) {
            if (error instanceof BaseError) {
                res.status(400).send({ message: error.message });
            } else {
                res.status(500).send({ message: "Um erro inesperado ocorreu :/" });
            }
        }
    };
}