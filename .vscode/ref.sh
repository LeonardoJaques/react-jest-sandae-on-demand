create in root of project a file with name => .eslintrc.json
{
  "plugins": ["testing-library", "jest-dom"],
  "extends": [
    "react-app",
    "react-app/jest",
    "plugin:testing-library/recommended",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended"
  ]
}
create a folder in root of project with name => .vscode
create a file in .vscode with name => settings.json
{
  "eslint.options": {
    "configFile": ".eslintrc.json"
  },
  "eslint.validate": ["javascript", "javascriptreact"],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}

install: npm i -D eslint-plugin-testing-library eslint-plugin-jest-dom
zsh: First commit: gc -am"First Commit" && gp


