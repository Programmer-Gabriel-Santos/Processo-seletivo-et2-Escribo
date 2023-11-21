export class HashManagerMock {
    hash = async (plaintext) => {
        if (plaintext == "bananinha") {
            return "hash-bananinha"
        }

        return "hash-mock"
    }

    compare = async (plaintext, hash) => {
        if (plaintext == "bananinha" && hash == "hash-bananinha") {
            return true
        }

        return false
    }
}