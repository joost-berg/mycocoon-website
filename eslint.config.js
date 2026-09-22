import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default [
    ...tseslint.configs.recommended,
    ...eslintPluginAstro.configs.recommended,

    {
        files: ['**/*.astro'],
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
                extraFileExtensions: ['.astro'],
            },
        },
    },
];
