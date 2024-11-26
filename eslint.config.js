import js from "@eslint/js"; // Importar configuración predefinida de ESLint

export default [
	{
		// Configuración predefinida para "eslint:recommended"
		...js.configs.recommended,

		// Opciones de lenguaje y entorno
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				window: "readonly",
				document: "readonly",
				console: "readonly",
			},
		},
		linterOptions: {
			reportUnusedDisableDirectives: true,
		},

		// Reglas personalizadas
		rules: {
			indent: ["error", "tab"],
			"linebreak-style": ["error", "windows"],
			quotes: ["error", "double"],
			semi: ["error", "always"],
		},
	},
];
