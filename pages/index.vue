<template>
	<div>
		<h1>Привет, Nuxt 3! 👋</h1>
		<p>Это главная страница (pages/index.vue)</p>
	</div>
</template>

<script setup lang="ts">
// Здесь можно писать логику
const title = 'Мой Nuxt 3 проект'
useHead({ title })
</script>

<style scoped>
h1 {
	color: #00dc82;
}
</style>