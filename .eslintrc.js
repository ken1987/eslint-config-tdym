module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['./configs/vue.js', './configs/airbnb.js', './configs/prettier.js'],
}
