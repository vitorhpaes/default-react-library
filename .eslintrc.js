module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
  ],
  settings: {
    react: {
      version: 'detect',
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks"],
  rules: {
    semi: [2, "always"],
    "no-mixed-operators": 0,
    "prefer-promise-reject-errors": 0,
    "react/prop-types": 0,
    "react/no-children-prop": 0,
    'no-unused-vars': 'warn',
    "react/display-name": 0,
    "no-useless-escape": 0,
    "jest/no-export": 0,
    "jest/no-test-callback": 0,
    "promise/param-names": 0,
    "react/no-string-refs": 0,
    "standard/no-callback-literal": 0,
    "react/no-deprecated": 0,
    "jest/expect-expect": 0,
    "jest/no-disabled-tests": 0,
    "jest/no-commented-out-tests": 0,
    "jest/valid-expect-in-promise": 0,
    "media-feature-name-no-unknown": 0,
    "react/jsx-filename-extension": ["warn", {
      extensions: [".jsx", ".js"]
    }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "one-var": "off",
  },

};
