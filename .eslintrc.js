module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/essential',
        'prettier',
        'plugin:prettier/recommended',
    ],
    rules: {
        'vue/require-default-prop': 'off',
        'no-undef': 'off',
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
}
