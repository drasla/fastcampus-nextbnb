module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint/eslint-plugin", "prettier"],
    extends: ["plugin:@typescript-eslint/recommended"],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    rules: {
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                argsIgnorePattern: "^_",
            },
        ],
        "prettier/prettier": "error",
        "no-unused-vars": "off",
        quotes: ["off", "double"],
        indent: ["off", 0],
    },
};