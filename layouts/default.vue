<template>
	<div class="layout-default container">
		<AppHeader class="my-3"/>

		<main class="my-3">
			<NuxtPage />
		</main>

		<AppFooter class="my-3" />
	</div>
</template>

<script setup lang="ts">
import AppFooter from '~/components/layout/AppFooter.vue'
import AppHeader from '~/components/layout/AppHeader.vue'

const route = useRoute();
console.log('Current route:', route)

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