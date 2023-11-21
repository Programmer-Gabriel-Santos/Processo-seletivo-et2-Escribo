export class HashManagerMock {
    hash = async (plaintext) => {
        if (plaintext == "senha-mock") {
            return "hash-senha-mock";
        }

        return "hash-mock";
    };

    compare = async (plaintext, hash) => {
        if (plaintext == "senha-mock" && hash == "hash-senha-mock") {
            return true;
        }

        return false;
    };
}