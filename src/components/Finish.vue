<script lang="ts" setup>
import { computed, PropType } from "vue";
import { EAnswer } from "../models";
import { questions } from "../questions";

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
<template>
  <h2>Результат {{ result }} %</h2>
  <div
    class="border rounded-md w-[400px] p-4 text-center"
    v-for="(answer, index) in selectedAnswers"
  >
    <h3 class="border-b p-2">
      <div class="text-sm">Вопрос:</div>
      <span class="">{{ questions[index].question }}</span>
    </h3>
    <h3 class="p-2">
      <div class="text-sm">Ваш ответ:</div>
      <span :class="answer.correct ? 'text-green-400' : 'text-red-400'">{{
        answer.text
      }}</span>
    </h3>
  </div>
</template>
