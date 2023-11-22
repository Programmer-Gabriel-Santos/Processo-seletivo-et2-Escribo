export class HashManagerMock {
    hash = async () => {
        return "hash-senha-mock";
    };

    compare = async (plaintext, hash) => {
        if (plaintext == "senha-mock" && hash == "hash-senha-mock") {
            return true;
        }
        return false;
    };
}