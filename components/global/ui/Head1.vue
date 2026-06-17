<template>
	<h1 class="bg-sky-500 p-4 text-2xl text-white">{{ props.title }}</h1>
</template>

<script setup lang="ts">
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
});
</script>
