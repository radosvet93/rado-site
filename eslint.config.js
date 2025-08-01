import eslintPluginAstro from 'eslint-plugin-astro';

export default [
	// add more generic rule sets here, such as:
	// js.configs.recommended,
	...eslintPluginAstro.configs.recommended,
	{
		files: ['*.astro'],
		processor: 'astro/client-side-ts', // <- Uses the "client-side-ts" processor.
		rules: {
			// override/add rules settings here, such as:
			// "astro/no-set-html-directive": "error"
		}
	}
];
