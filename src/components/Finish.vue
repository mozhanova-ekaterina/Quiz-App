<script lang="ts" setup>
import { computed, PropType } from "vue";
import { EAnswer } from "../models";

const props = defineProps({
  selectedAnswers: { type: Object as PropType<EAnswer[]>, required: true },
});
const result = computed(() => {
  const rightAnswers = props.selectedAnswers.filter(
    (answer) => answer.correct,
  ).length;
  return Math.round((rightAnswers / props.selectedAnswers.length) * 100);
});
</script>
<template>{{ result }} %</template>
