module.exports = {
  plugins: ['prettier'],
  extends: ['prettier', 'prettier/vue'],
  rules: {
    'prettier/prettier': 'warn',
    'comma-dangle': ['error', 'only-multiline'],
  },
}
