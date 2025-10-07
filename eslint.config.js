import js from "@eslint/js";
import cypress from "eslint-plugin-cypress";

export default [
  // Configuración para archivos del proyecto
  {
    files: ["**/*.js"],
    ignores: ["cypress/**", "node_modules/**"],
    extends: [js.configs.recommended],
    rules: {
      indent: ["error", 2],
      quotes: ["error", "single"],
    },
  },

  // Configuración exclusiva para Cypress
  {
    files: ["cypress/**/*.js", "cypress/**/*.ts"],
    extends: [cypress.configs.recommended],
    languageOptions: {
      globals: {
        ...cypress.environments.globals.globals,
        // otros globals si es necesario
      },
    },
    rules: {
      // Reglas específicas para Cypress
      "cypress/no-assigning-return-values": "error",
      "cypress/no-unnecessary-waiting": "warn",
    },
  },
];
