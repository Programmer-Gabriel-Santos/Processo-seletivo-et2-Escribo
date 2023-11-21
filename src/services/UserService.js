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

}