import { UserRole } from "../../../src/model/User";

export const users = [
    {
        id: "id-mock",
        nome: "user test 1",
        email: "user1@escribo.com",
        senha: "hash-senha-mock",
        telefones: [{ numero: "123456789", ddd: "11" }],
        role: UserRole.NORMAL,
        data_criacao: "22/11/2023",
        data_atualizacao: "22/11/2023",
        ultimo_login: "22/11/2023",
    },
    {
        id: "id-mock",
        nome: "user test 2",
        email: "user3@escribo.com",
        senha: "hash-senha-mock",
        telefones: [{ numero: "123456788", ddd: "21" }],
        role: UserRole.NORMAL,
        data_criacao: "22/11/2023",
        data_atualizacao: "22/11/2023",
        ultimo_login: "22/11/2023",
    },
    {
        id: "id-mock",
        nome: "user test 3",
        email: "user3@escribo.com",
        senha: "hash-senha-mock",
        telefones: [{ numero: "123456799", ddd: "19" }],
        role: UserRole.NORMAL,
        data_criacao: "22/11/2023",
        data_atualizacao: "22/11/2023",
        ultimo_login: "22/11/2023",
    }
];
