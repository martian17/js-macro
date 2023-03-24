module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    rules: {
        "indent": ["error", 4],
        "quotes": ["error", "double"],
        "brace-style": ["error", "1tbs"],
        "no-var": "error",
        "no-trailing-spaces": ["error", {
            "skipBlankLines": true
        }],
        "semi": ["error", "always", {
            "omitLastInOneLineBlock": true
        }],
        "comma-dangle": ["error", "never"],
        /*"key-spacing": ["error", {
            "singleLine": {
                "afterColon": false,
                "beforeColon": false
            },
            "multiLine": {
                "afterColon": true
            }
        }]*/
        "space-before-blocks": ["warn", {
            "functions": "never",
            "keywords": "never",
            "classes": "always"
        }],
        "@typescript-eslint/naming-convention": ["error",
            { selector: "default", format: ["camelCase"] },
          
            //{ selector: "variableLike", format: ["camelCase"] },
            //{ selector: "variable", format: ["camelCase", "UPPER_CASE"] },
            { selector: "variableLike", format: null, custom: { regex: "^([a-z].*)|([A-Z][A-Z_]*)", match: true } },
            { selector: "variable", format: null, custom: { regex: "^([a-z].*)|([A-Z][A-Z_]*)", match: true } },
            { selector: "parameter", format: ["camelCase"], leadingUnderscore: "allow" },
          
            { selector: "memberLike", format: ["camelCase"] },
            { selector: "memberLike", modifiers: ["private"], format: ["camelCase"], leadingUnderscore: "require"  },
            { selector: "objectLiteralProperty", format: null, custom: { regex: "^.+", match: true } },

            { selector: "typeLike", format: ["PascalCase"] },
            { selector: "typeParameter", format: ["PascalCase"], prefix: ["T"] },
          
            { selector: "interface", format: ["PascalCase"], custom: { regex: "^I[A-Z]", match: false } },
        ]
    }
}
