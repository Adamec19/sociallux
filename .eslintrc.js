module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    settings: {
        react: {
            version: "detect",
        },
    },
    overrides: [
        {
            files: ["**/*.ts", "**/*.tsx"],
            parser: "@typescript-eslint/parser",
            plugins: ["@typescript-eslint"],
            parserOptions: {
                project: ["./tsconfig.json", "./cypress/tsconfig.json"],
            },
            rules: {
                "@typescript-eslint/await-thenable": 2, // Disallow await statements that are not thenable, must be only applied to TS files
            },
        },
    ],
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:storybook/recommended",
        "next/core-web-vitals",
    ],
    plugins: [
        "react",
        "@typescript-eslint/eslint-plugin",
        "import",
        "react-hooks",
    ],
    ignorePatterns: ["Icon/icons"],
    rules: {
        strict: [2, "never"], // Avoid any unsafe functions that would not be allowed under strict mode
        "default-case": 0, // Allow switch without a default case
        "arrow-body-style": [2, "as-needed"], // Remove all explicit returns that are not necessary
        "no-unneeded-ternary": [2, { defaultAssignment: false }], // Default ternary x ? x : 1 results to x || 1
        curly: 2, // Avoid single line ifs, force curly brace on the same line
        "newline-before-return": 2, // Add newline before every return

        "import/no-default-export": 0,
        "react-hooks/exhaustive-deps": 1,

        "import/order": [
            1,
            {
                groups: ["builtin", "external"],
                "newlines-between": "always",
            },
        ], // Sort imports in groups, built-in first and external after, delimit with a newline
        "import/extensions": [
            0,
            "ignorePackages",
            {
                js: "never",
                ts: "never",
                tsx: "never",
            },
        ], // Force extensions on imports apart from the JS/TS related ones
        "object-shorthand": 2, // Shorten objects - { someProp: someProp } result to {  someProp }
        "prefer-const": 2, // Force const declarations for variables that are not mutated
        "no-var": 2, // Forbid var declaration
        "spaced-comment": 2, // Force one whitespace after "//" comment
        "no-useless-return": 2, // Forbid all explicit returns that serve not purpose

        "dot-notation": 2, // Force dot notation whether possible - Object['string'] results to object.string

        "jsx-a11y/anchor-is-valid": 0, // Force anchor tag to have valid href attribute

        "react/display-name": 0, // Force displayName to be used for components
        "react/jsx-boolean-value": 2, // <Component someFlag={true} /> results to <Component someFlag />
        "react/self-closing-comp": 2, // Empty JSX tags will collapse. <div></div> results to <div/>
        "react/jsx-curly-brace-presence": 2, // Avoid having useless curly braces for string props
        "no-template-curly-in-string": 0,

        "no-use-before-define": 0, // handled by TS
        "no-shadow": 0, // handled by TS
        "no-unused-vars": 0, // handled by TS
        "react/no-unused-prop-types": 0, // Forbid unused types for component props

        "@typescript-eslint/explicit-module-boundary-types": 0, // Allow functions without explicit return type
        "@typescript-eslint/no-explicit-any": 0, // Allows any type, does make sense in some places
        "@typescript-eslint/no-unused-vars": [
            2,
            { ignoreRestSiblings: true, args: "all", argsIgnorePattern: "^_" },
        ], // Forbid unused variables, except for the ones that start with "_"

        "@typescript-eslint/no-var-requires": 0, // allow require
        "@typescript-eslint/no-empty-function": 0, // allow empty function
        "@typescript-eslint/no-use-before-define": 2, // Variable must be declared before its use
        "@next/next/no-img-element": 0, // Allow img elements in Next.js

        "react-hooks/rules-of-hooks": 2, // Forbid using hooks outside of React components or hooks, forbid using calling hooks conditionally
        eqeqeq: [2, "always", { null: "ignore" }], // force strict equality, except for null/undefined check
        "no-nested-ternary": 2, // Forbid nesting of optional chaining which hinders readability
        "no-console": ["error", { allow: [""] }], // Forbid console logs
        "no-irregular-whitespace": 0, // Silent guard from weird whitespace clashes in code //prejdem a uvidim
        "jsx-a11y/alt-text": 2, // Forbid img tags without alt attribute
        "@typescript-eslint/no-non-null-assertion": 2, // Forbid non-null assertion via ! operator
        "@typescript-eslint/no-shadow": 2, // Forbid declaring variables that have duplicate names in the same scope

        // Old rules
        "@typescript-eslint/ban-ts-comment": 0,
        "@typescript-eslint/array-type": [2, { default: "generic" }],
        "@typescript-eslint/ban-types": [
            1,
            {
                types: {
                    object: {
                        message: "Use Record<string, any> instead",
                        fixWith: "Record<string, unknown>",
                    },
                    "{}": false,
                },
            },
        ],
    },
};
