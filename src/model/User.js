export const UserRole = {
    ADMIN: "ADMIN",
    NORMAL: "NORMAL",
};

export class User {
    constructor(
        id,
        nome,
        email,
        senha,
        telefones,
        role,
        data_criacao,
        data_atualizacao,
        ultimo_login
    ) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.telefones = telefones;
        this.role = role;
        this.data_criacao = data_criacao;
        this.data_atualizacao = data_atualizacao;
        this.ultimo_login = ultimo_login;
    }

    getId() {
        return this.id;
    }

    getNome() {
        return this.nome;
    }

    getEmail() {
        return this.email;
    }

    getSenha() {
        return this.senha;
    }

    getTelefones() {
        return this.telefones;
    }

    getDataCriacao() {
        return this.data_criacao;
    }

    getDataAtualizacao() {
        return this.data_atualizacao;
    }

    getUltimoLogin() {
        return this.ultimo_login;
    }

    getRole() {
        return this.role;
    }

    setNome(nome) {
        this.nome = nome;
    }

    setEmail(email) {
        this.email = email;
    }

    setSenha(senha) {
        this.senha = senha;
    }

    setTelefones(telefones) {
        this.telefones = telefones;
    }

    setDataCriacao(data_criacao) {
        this.data_criacao = data_criacao;
    }

    setDataAtualizacao(data_atualizacao) {
        this.data_atualizacao = data_atualizacao;
    }

    setUltimoLogin(ultimo_login) {
        this.ultimo_login = ultimo_login;
    }

    setRole(role) {
        this.role = role;
    }
}
