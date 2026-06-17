import type { Config } from 'prettier';
import type { PluginOptions } from 'prettier-plugin-tailwindcss';

/**
 * Зеркалит .editorconfig; расхождения и «по уму» — см. комментарии в репо / ответ ассистента.
 * Prettier 3.x также читает .editorconfig сам, но явные значения здесь — для предсказуемости CI/IDE.
 */
const config = {
	plugins: ['prettier-plugin-tailwindcss'],
	tailwindStylesheet: './assets/css/main.css',
	// [*]
	useTabs: true,
	tabWidth: 4,
	printWidth: 120,
	endOfLine: 'lf',
	singleQuote: true,
	// curly_bracket_next_line = false → K&R; для HTML/Vue-тегов:
	bracketSameLine: true,

	// Prettier-специфика (в .editorconfig этого нет)
	semi: true,
	trailingComma: 'all',

	overrides: [
		// [{*.json,*.yml}]
		{
			files: ['*.json', '*.yml', '*.yaml'],
			options: {
				useTabs: false,
				tabWidth: 2,
			},
		},
	],
} satisfies Config & PluginOptions;

export default config;
