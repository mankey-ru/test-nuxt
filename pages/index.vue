<template>
	<div>
		<UiHead1 :title="title" />
		<p>Это главная страница (pages/index.vue)</p>
	</div>
</template>

<script setup lang="ts">
// Здесь можно писать логику
const title = 'Привет';
useHead({ title });
</script>
