<template>
	<h1 class="bg-sky-500 text-2xl text-white p-4">{{ props.title }}</h1>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
	type: String,
	required: true
  }
})
</script>