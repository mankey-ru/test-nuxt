<template>
	<div>
		<UiHead1 :title="title" />
		<p>Это страница "О нас" (pages/about.vue)</p>
	</div>
</template>

<script setup lang="ts">
const title = 'О нас'
useHead({ title })
</script>