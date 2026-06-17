import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	components: {
		// https://nuxt.com/docs/3.x/guide/concepts/auto-imports#auto-imported-components
		dirs: ['~/components/global'],
	},
	imports: {
		// https://nuxt.com/docs/3.x/guide/concepts/auto-imports#partially-disabling-auto-imports
		scan: false,
	},
	vite: {
		plugins: [tailwindcss()],
	},
	app: {
		head: {
			titleTemplate: '%s | nuxt-test', // %s заменяется на title страницы
			title: 'MyDefaultTitle', // fallback / дефолтный titlecharset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			meta: [{ name: 'description', content: 'Описание сайта' }],
		},
	},
});
