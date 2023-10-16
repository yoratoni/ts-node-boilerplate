module.exports = {
    plugins: [
        "@typescript-eslint",
        "import"
    ],
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {},
        ecmaVersion: "latest",
        sourceType: "module"
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts"]
        },
        "import/resolver": {
            "typescript": {
                "alwaysTryTypes": true,
                "project": "./tsconfig.json"
            }
        },
    },
    rules: {
        "indent": "off",
        "@typescript-eslint/indent": [
            "warn",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "warn",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "object-curly-spacing": [
            "warn",
            "always"
        ],
        "no-unused-vars": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "sort-imports": [
            "warn",
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
                allowSeparatedGroups: true
            }
        ],
        "import/no-unresolved": "error",
        "import/order": [
            "warn",
            {
                groups: [
                    "builtin",
                    "external",
                    "internal",
                    ["sibling", "parent"],
                    "index",
                    "unknown"
                ],
                "newlines-between": "always",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true
                }
            }
        ],
        "import/no-useless-path-segments": [
            "warn",
            {
                noUselessIndex: true
            }
        ],
        "arrow-body-style": [
            "warn",
            "as-needed"
        ],
        "import/newline-after-import": [
            "warn",
            {
                count: 2
            }
        ]
    }
};