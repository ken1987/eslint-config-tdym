module.exports = {
  extends: ['plugin:vue/recommended'],
  rules: {
    'vue/v-on-function-call': 'error',
    'vue/no-boolean-default': 'error',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
  },
}
