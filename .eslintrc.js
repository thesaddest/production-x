module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["plugin:react/recommended", "plugin:i18next/recommended"],
    overrides: [],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    parser: "@typescript-eslint/parser",
    plugins: ["react", "@typescript-eslint", "i18next"],
    rules: {
        "react/jsx-indent": [2, 4],
        "react/react-in-jsx-scope": 0,
        indent: [2, 4],
        "i18next/no-literal-string": [
            "error",
            {
                markupOnly: true,
                ignoreAttributes: ["data-testid", "to"],
            },
        ],
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
