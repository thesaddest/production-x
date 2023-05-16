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
    plugins: ["react", "@typescript-eslint", "i18next", "react-hooks"],
    rules: {
        "react/prop-types": [0],
        "react/jsx-indent": [2, 4],
        "react/react-in-jsx-scope": 0,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        indent: ["error", 4, { SwitchCase: 1 }],
        "i18next/no-literal-string": [
            "error",
            {
                markupOnly: true,
                ignoreAttributes: ["data-testid", "to"],
            },
        ],
        "react/display-name": [0],
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    globals: {
        __IS__DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
};
