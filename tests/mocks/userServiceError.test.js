import { AuthenticatorMock } from "./security/AuthenticatiorMock";
import { HashManagerMock } from "./security/HashManagerMock";
import { IdGeneratorMock } from "./security/IdGeneratorMock";
import { UserDataBaseMock } from "./data/UserDataBaseMock";
import { UserService } from "../../src/services/UserService";
import { BaseError } from "../../src/errors/BaseError";


describe("Testes de unidade de erro para UserService", () => {

    const userService = new UserService(
        new UserDataBaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    );

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
                telefones: [{numero: "123456789", ddd: "11"}],
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
                telefones: [{numero: "123456789", ddd: "11"}],
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
                telefones: [{numero: "123456789", ddd: "11"}],
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
                telefones: [{numero: "123456789", ddd: "11"}],
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
                telefones: [{numero: "123456789", ddd: "11"}],
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
                telefones: [{numero: "aaaaaaaaa", ddd: "11"}],
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
                telefones: [{numero: "12345678", ddd: "11"}],
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
                telefones: [{numero: "123456789", ddd: "11"}],
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