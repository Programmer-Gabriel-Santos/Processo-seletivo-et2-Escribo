import { AuthenticatorMock } from "./security/AuthenticatiorMock";
import { HashManagerMock } from "./security/HashManagerMock";
import { IdGeneratorMock } from "./security/IdGeneratorMock";
import { UserDataBaseMock } from "./data/UserDataBaseMock";
import { UserService } from "../../src/services/UserService";


describe("testando casos de sucesso para UserServices", () => {
    const userService = new UserService(
        new UserDataBaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    );

    test(
        "testando o método signup, deve obter sucesso retornando um objeto como resposta", async () => {
            expect.assertions(1);

            const input = {
                nome: "user1",
                email: "user@escribo.com",
                senha: "senha-mock",
                telefones: [{ numero: "123456789", ddd: "11" }],
            };
            const date = new Date().toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" });
            const expectedResponse = {
                id: "id-mock",
                data_criacao: date,
                data_atualizacao: date,
                ultimo_login: date,
                token: "token-mock",
            };

            const response = await userService.signup(input);
            expect(response).toStrictEqual(expectedResponse);
        });
});