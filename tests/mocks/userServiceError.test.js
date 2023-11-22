import { AuthenticatorMock } from "./security/AuthenticatiorMock";
import { HashManagerMock } from "./security/HashManagerMock";
import { IdGeneratorMock } from "./security/IdGeneratorMock";
import { UserDataBaseMock } from "./data/UserDataBaseMock";
import { UserService } from "../../src/services/UserService";
import { BaseError } from "../../src/errors/BaseError";

const userService = new UserService(
    new UserDataBaseMock(),
    new IdGeneratorMock(),
    new HashManagerMock(),
    new AuthenticatorMock()
);

describe("Testes de unidade de erro para UserService - signup", () => {

    test("Testando erro para um dos parâmetros inválidos", async () => {
        expect.assertions(2);
        try {
            const input = {
                nome: "user1",
                email: "user@escribo.com",
                senha: "senha-mock",
                telefones: [],
            };
            await userService.signup(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Parâmetros inválidos ou faltando");
                expect(error.statusCode).toBe(400);
            }
        }
    });

    test("Testando erro para nome != string", async () => {
        expect.assertions(2);
        try {
            const input = {
                nome: 123,
                email: "user@escribo.com",
                senha: "senha-mock",
                telefones: [{ numero: "123456789", ddd: "11" }],
            };
            await userService.signup(input);

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Parâmetros inválidos ou faltando");
                expect(error.statusCode).toBe(400);
            }
        }
    });

    test("Testando erro para nome.length < 3", async () => {
        expect.assertions(2);
        try {
            const input = {
                nome: "aa",
                email: "user@escribo.com",
                senha: "senha-mock",
                telefones: [{ numero: "123456789", ddd: "11" }],
            };
            await userService.signup(input);

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Parâmetros inválidos ou faltando");
                expect(error.statusCode).toBe(400);
            }
        }
    });

    test("Testando erro para email inválido", async () => {
        expect.assertions(2);
        try {
            const input = {
                nome: "user1",
                email: "user@escribo",
                senha: "senha-mock",
                telefones: [{ numero: "123456789", ddd: "11" }],
            };
            await userService.signup(input);

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Email não atende aos requisitos de um email válido.");
                expect(error.statusCode).toBe(422);
            }
        }
    });

    test("Testando erro para senha != string", async () => {
        expect.assertions(2);
        try {
            const input = {
                nome: "user1",
                email: "user@escribo.com",
                senha: 123456,
                telefones: [{ numero: "123456789", ddd: "11" }],
            };
            await userService.signup(input);

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Parâmetros inválidos ou faltando");
                expect(error.statusCode).toBe(400);
            }
        }
    });

    test("Testando erro para senha.length < 6", async () => {
        expect.assertions(2);
        try {
            const input = {
                nome: "user1",
                email: "user@escribo.com",
                senha: "12345",
                telefones: [{ numero: "123456789", ddd: "11" }],
            };
            await userService.signup(input);

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Parâmetros inválidos ou faltando");
                expect(error.statusCode).toBe(400);
            }
        }
    });

    test("Testando erro para campo de telefone vazio", async () => {
        expect.assertions(2);
        try {
            const input = {
                nome: "user1",
                email: "user@escribo.com",
                senha: "123456",
                telefones: [],
            };
            await userService.signup(input);

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Parâmetros inválidos ou faltando");
                expect(error.statusCode).toBe(400);
            }
        }
    });

    test("Testando erro para campo de telefone onde não seja possível transformar 'numero' ou 'ddd' um número válido", async () => {
        expect.assertions(2);
        try {
            const input = {
                nome: "user1",
                email: "user@escribo.com",
                senha: "123456",
                telefones: [{ numero: "aaaaaaaaa", ddd: "11" }],
            };
            await userService.signup(input);

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Parâmetros inválidos ou faltando");
                expect(error.statusCode).toBe(400);
            }
        }
    });

    test("Testando erro para campo de telefone que não atenda ao formato: 00 000000000", async () => {
        expect.assertions(2);
        try {
            const input = {
                nome: "user1",
                email: "user@escribo.com",
                senha: "123456",
                telefones: [{ numero: "12345678", ddd: "11" }],
            };
            await userService.signup(input);

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Parâmetros inválidos ou faltando");
                expect(error.statusCode).toBe(400);
            }
        }
    });

    test("Testando erro para um email ja existente", async () => {
        expect.assertions(2);
        try {
            const input = {
                nome: "user1",
                email: "user1@escribo.com",
                senha: "123456",
                telefones: [{ numero: "123456789", ddd: "11" }],
            };
            await userService.signup(input);

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("E-mail já existente");
                expect(error.statusCode).toBe(409);
            }
        }
    });
});

describe("Teste de unidade de erro para UserService - login", () => {

    test("testando erro para algum campo faltando", async () => {
        expect.assertions(2);

        try {
            const input = {
                email: "test@escribo.com",
            };
            const response = await userService.login(input);
            console.log(response);

        } catch (error) {
            if (error instanceof BaseError) {
                console.log(error.message);
                expect(error.message).toBe("Parâmetros inválidos ou faltando");
                expect(error.statusCode).toBe(400);
            }
        }
    });

    test("Testando erro para email inválido", async () => {
        expect.assertions(2);
        try {
            const input = {
                email: "user@escribo",
                senha: "senha-mock"
            };
            await userService.login(input);

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Email não atende aos requisitos de um email válido.");
                expect(error.statusCode).toBe(422);
            }
        }
    });

    test("testando erro para typeof de 'senha' !== 'string'", async () => {
        expect.assertions(2);

        try {
            const input = {
                email: "teste@escribo.com",
                senha: 123456
            };
            await userService.login(input);

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Parâmetros inválidos ou faltando");
                expect(error.statusCode).toBe(400);
            }
        }
    });

    test("testando erro para typeof de senha.length < 6", async () => {
        expect.assertions(2);

        try {
            const input = {
                email: "teste@escribo.com",
                senha: "12345"
            };
            await userService.login(input);

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Parâmetros inválidos ou faltando");
                expect(error.statusCode).toBe(400);
            }
        }
    });

    test("testando erro para um usuário não cadastrado", async () => {
        expect.assertions(2);

        try {
            const input = {
                email: "teste@escribo.com",
                senha: "123456"
            };
            await userService.login(input);

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Usuário e/ou senha inválidos");
                expect(error.statusCode).toBe(401);
            }
        }
    });

    test("testando erro para um usuário cadastrado, mas com senha inválida", async () => {
        expect.assertions(2);

        try {
            const input = {
                email: "user1@escribo.com",
                senha: "123456"
            };
            await userService.login(input);

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Usuário e/ou senha inválidos");
                expect(error.statusCode).toBe(401);
            }
        }
    });

});