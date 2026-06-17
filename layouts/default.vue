<template>
	<div class="layout-default">
		<!-- Общая шапка -->
		<header>
			<h1>Мой Nuxt 3 проект</h1>
			<nav>
				<NuxtLink to="/">Главная</NuxtLink>
				<NuxtLink to="/about">О нас</NuxtLink>
			</nav>
		</header>
		<!-- <AppHeader /> -->

		<!-- Основное содержимое страницы -->
		<main>
			<NuxtPage />
		</main>

		<!-- Общий футер -->
		<footer>
			<p>&copy; {{ currYear }} Мой Nuxt 3 проект</p>
		</footer>
		<!-- <AppFooter /> -->
	</div>
</template>

<script setup lang="ts">
// Здесь можно добавить логику макета
// Например: useHead, composables, обработка состояний
const route = useRoute();
console.log(route);
const currYear = new Date().getFullYear();
</script>

<style scoped>
.layout-default {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}

main {
	flex: 1;
}
</style>