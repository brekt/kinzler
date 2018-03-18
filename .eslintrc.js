module.exports = {
	"extends": "airbnb",
	"rules": {
		"indent": ["error", "tab", { "SwitchCase": 1}],
		"quotes": ["error", "single"],
		"no-tabs": 0,
		"function-paren-newline": 0,
		"react/no-array-index-key": 0,
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-indent-props": ["error", "tab"],
		"jsx-quotes": ["error", 'prefer-single'],
	},
	"env": {
		"browser": true,
		"node": true,
		"jest/globals": true,
	},
	"plugins": ["jest"]
};