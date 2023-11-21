import { AuthenticatorMock } from "./security/AuthenticatiorMock";
import { HashManagerMock } from "./security/HashManagerMock";
import { IdGeneratorMock } from "./security/IdGeneratorMock";
import { UserDataBaseMock } from "./data/UserDataBaseMock";
import { UserService } from "../../src/services/UserService";
import { describe, test, expect } from "jest";

describe("Testes de unidade de erro para UserService", () => {
    
    const userService = new UserService(
        new UserDataBaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    );

    test("Testando o método signup", async () => {
        expect.assertions(2);
        const input = {
            nome: "user test",
            email: "user@escribo.com",
            senha: "senha-mock",
            telefones: [{numero: "123456789", ddd: "11"}],
        };

        const response = await userService.signup(input);
        expect(response.message).toBe("Cadastro realizado com sucesso!");
        expect(response.token).toBe("token-mock");
    });

});