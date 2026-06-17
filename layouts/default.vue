<template>
	<div class="layout-default container">
		<!-- Общая шапка -->
		<header>
			<div class="row">
				<div class="col-auto">
					<h1>Мой Nuxt 3 проект</h1>
				</div>
				<div class="col">
					<nav>
						<NuxtLink to="/">Главная</NuxtLink>
						<NuxtLink to="/about">О нас</NuxtLink>
					</nav>
				</div>
			</div>
			<div class="row">
				<div class="col-3">11</div>
				<div class="col-7">22</div>
			</div>
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