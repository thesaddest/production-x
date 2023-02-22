module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["plugin:react/recommended"],
    overrides: [],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    parser: "@typescript-eslint/parser",
    plugins: ["react", "@typescript-eslint"],
    rules: {
        "react/jsx-indent": [2, 4],
        "react/react-in-jsx-scope": 0,
        indent: [2, 4],
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    globals: {
        __IS__DEV__: true,
    },
};
