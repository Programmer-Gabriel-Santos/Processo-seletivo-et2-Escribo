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
            const response = await userService.signup(input);
            console.log("response: ", response);

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Parâmetros inválidos ou faltando");
                expect(error.statusCode).toBe(400);
            }
        }
    });

    

});