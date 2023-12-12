module.exports = {
    "extends": ["plugin:react/recommended", 'plugin:prettier/recommended'],
    "rules": {
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
    },
    "parser": "@typescript-eslint/parser",
    "settings": {
        "react": {
          "version": "detect"
       }
    }
}
