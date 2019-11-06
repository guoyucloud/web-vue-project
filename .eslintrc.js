module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/strongly-recommended',
    '@vue/standard'
  ],
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-useless-escape': 'off',
    'indent': ['error', 'tab'],
    'no-tabs': 'off',
    'vue/html-indent': ['error', 'tab'],
    'vue/component-name-in-template-casing': 'off',
    'vue/max-attributes-per-line': ['warn', {
      'singleline': 3,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    }
  ],
  plugins: [
    'vue'
  ]
}

