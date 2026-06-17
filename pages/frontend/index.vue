<template>
	<div>
		<UiHead1 :title="title" />
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
			dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
			ea commodo consequat.
		</p>
	</div>
</template>

<script setup lang="ts">
// Здесь можно писать логику
const title = 'Фронт';
useHead({ title });
</script>
