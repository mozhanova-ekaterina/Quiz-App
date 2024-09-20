<script setup lang="ts">
import Finish from './components/Finish.vue'
import { Ref, ref } from 'vue';
import Card from './components/Card.vue';
import { questions } from './questions';
import { EAnswer } from './models';

const selectedAnswers = ref([]) as Ref<EAnswer[]>
const finish = ref(false)
const answerHandle = (answer: EAnswer, id: number, latest: boolean) => {
  if (selectedAnswers.value[id]) selectedAnswers.value[id] = answer
  else selectedAnswers.value.push(answer)
  if (latest) finish.value = true
}
</script>

<template>
  <main class="h-screen bg-[#fffaf7] flex flex-col items-center gap-3 p-10">
    <Card v-for="(question, index) in questions" :question="question" :id="`${index}`" @choose-answer="answerHandle"
      :latest="questions.length - 1 === index" />
    <Finish :selectedAnswers="selectedAnswers" v-if="finish" />
  </main>
</template>
