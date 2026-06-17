<template>
	<footer>
		<p>&copy; {{ currYear }} Мой Nuxt 3 проект</p>
	</footer>
</template>

<script setup lang="ts">
const currYear = new Date().getFullYear()
</script>