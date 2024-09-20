<script lang="ts" setup>
import Button from "./Button.vue";
import { PropType, Ref, ref } from "vue";
import { EAnswer, EQuestion } from "../models";

const props = defineProps({
  question: {
    type: Object as PropType<EQuestion>,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  latest: {
    type: Boolean,
    required: true,
  },
});
const emits = defineEmits(["chooseAnswer"]);

const selectedAnswer = ref({}) as Ref<EAnswer>;
const onChooseAnswer = () => {
  emits("chooseAnswer", selectedAnswer.value, props.id, props.latest);
};
</script>
<template>
  <div class="border p-3 rounded-md min-w-[600px]">
    <h2 class="text-center mb-3">{{ question.question }}</h2>
    <ul class="flex flex-col gap-2">
      <li
        v-for="(answer, i) in question.answers"
        class="flex justify-between gap-5"
      >
        <label :for="`${id + i}`">{{ answer.text }}</label>
        <input
          type="radio"
          :id="`${id + i}`"
          v-model="selectedAnswer"
          :value="answer"
        />
      </li>
    </ul>
    <div class="text-right mt-3">
      <Button v-if="latest" @click="onChooseAnswer" text="Finish" />
      <Button v-else @click="onChooseAnswer" text="Next" />
    </div>
  </div>
</template>
