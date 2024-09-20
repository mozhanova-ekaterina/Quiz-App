<script lang="ts" setup>
defineProps({
  text: String
})
</script>

<template>
  <button class="border px-4 rounded-md">{{ text }}</button>
</template>