<script lang="ts" setup>
import { PropType, Ref, ref } from 'vue';
import { EAnswer, EQuestion } from '../models';

const props = defineProps({
  question: { type: Object as PropType<EQuestion>, required: true },
  id: { type: String, required: true },
  latest: { type: Boolean, required: true }
})
const emits = defineEmits(['chooseAnswer'])

const selectedAnswer = ref({}) as Ref<EAnswer>
const onChooseAnswer = () => {
  emits('chooseAnswer', selectedAnswer.value, props.id, props.latest)

}


</script>
<template>
  <div class="border p-3">
    <h2 class="text-center">{{ question.question }}</h2>
    <ul>
      <li v-for="(answer, i) in question.answers">
        <label :for="`${id + i}`">{{ answer.text }}</label>
        <input type="radio" :id="`${id + i}`" v-model="selectedAnswer" :value="answer">
      </li>
    </ul>
    <div class=" text-right">
      <button class="border p-1" v-if="latest" @click="onChooseAnswer">Finish</button>
      <button class="border p-1" v-else @click="onChooseAnswer">Next</button>
    </div>
  </div>
</template>