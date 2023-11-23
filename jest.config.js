
export default {
    roots: ["./tests"],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.js?$",
    moduleFileExtensions: ["js", "json", "node"],
    testEnvironment: "node",
    transform: {
        "^.+\\.js$": "babel-jest",
    },
    globals: {
        "ts-jest": {
            useESM: true,
        },
    },
};