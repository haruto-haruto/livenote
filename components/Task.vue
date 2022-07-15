<template>
    <div class="app__content">
      <div class="text-center">今日のタスク一覧を確認して、達成できたらクリックしましょう</div>
      <div class="content__radial">
        <GradientProgress
          :diameter="diameter"
          :total-steps="totalSteps"
          :completed-steps="completedSteps"
          :animate-speed="animateSpeed"
          :stroke-width="strokeWidth"
          :inner-stroke-width="innerStrokeWidth"
          :stroke-linecap="strokeLinecap"
        >
          <div>
            <small>Completed steps: </small>
            <span>{{ completedSteps }} / {{ totalSteps }}</span>
          </div>
        </GradientProgress>
    </div>
<div class='flex flex-wrap'>
  <keep-alive>
    <card class="w-96 min-w-4/12 h-52 p-1 max-w-sm bg-[#e0e0e0] rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700">
    <template v-slot:select>
      <div v-html="thescam" class="mb-2 text-xl font-medium text-gray-500 dark:text-gray-400"></div>
    </template>
    <template v-slot:behaver>
      <textarea class="w-full text-2xl resize-x font-extraboold tracking-tight p-2.5 mb-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 
      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
      rows="2" placeholder="今日の目標"></textarea>
      </template>
    <template v-slot:achievement>
      <div>
        <label for="toggle1" class="inline-flex relative items-center cursor-pointer">
          <input type="checkbox" value="" id="toggle1" class="sr-only peer" v-on:click='changeCompletedStep(1,State1)'/>
          <div class="w-24 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 
          dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 
          peer-checked:after:translate-x-16 peer-checked:after:border-white 
          after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all 
          dark:border-gray-600 peer-checked:bg-blue-600 text-right peer-checked:text-center peer-checked:after:left-[4px]">
          <span  v-if="State1" class="mx-3 text-sm font-medium text-gray-900 dark:text-gray-300">達成!</span>
          <span  v-if="! State1" class="mx-3 text-sm font-medium text-gray-900 dark:text-gray-300">未達成</span>
          </div>
        </label>
      </div>
    </template>
    </card>
  </keep-alive>
  <keep-alive>
    <card class="w-96 min-w-4/12 h-52 p-1 max-w-sm bg-[#e0e0e0] rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700">
    <template v-slot:select>
      <div v-html="thescam" class="mb-2 text-xl font-medium text-gray-500 dark:text-gray-400 focus:ring-blue-500 focus:border-blue-500 "></div>
    </template>
    <template v-slot:behaver>
      <textarea class="w-full text-2xl resize-x font-extraboold tracking-tight p-2.5 mb-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 
      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
      rows="2" placeholder="今日の目標"></textarea>
      </template>
    <template v-slot:achievement>
      <div>
        <label for="toggle2" class="inline-flex relative items-center cursor-pointer">
          <input type="checkbox" value="" id="toggle2" class="sr-only peer" v-on:click='changeCompletedStep(2,State2)'/>
          <div class="w-24 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 
          dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 
          peer-checked:after:translate-x-16 peer-checked:after:border-white 
          after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all 
          dark:border-gray-600 peer-checked:bg-blue-600 text-right peer-checked:text-center peer-checked:after:left-[4px]">
          <span  v-if="State2" class="mx-3 text-sm font-medium text-gray-900 dark:text-gray-300">達成!</span>
          <span  v-if="! State2" class="mx-3 text-sm font-medium text-gray-900 dark:text-gray-300">未達成</span>
          </div>
        </label>
      </div>
    </template>
    </card>
  </keep-alive>
  <keep-alive>
    <card class="w-96 min-w-4/12 h-52 p-1 max-w-sm bg-[#e0e0e0] rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700">
    <template v-slot:select>
      <div v-html="thescam" class="mb-2 text-xl font-medium text-gray-500 dark:text-gray-400"></div>
    </template>
    <template v-slot:behaver>
      <textarea class="w-full text-2xl resize-x font-extraboold tracking-tight p-2.5 mb-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 
      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
      rows="2" placeholder="今日の目標"></textarea>
      </template>
    <template v-slot:achievement>
      <div>
        <label for="toggle3" class="inline-flex relative items-center cursor-pointer">
          <input type="checkbox" value="" id="toggle3" class="sr-only peer" v-on:click='changeCompletedStep(3,State3)'/>
          <div class="w-24 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 
          dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 
          peer-checked:after:translate-x-16 peer-checked:after:border-white 
          after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all 
          dark:border-gray-600 peer-checked:bg-blue-600 text-right peer-checked:text-center peer-checked:after:left-[4px]">
          <span  v-if="State3" class="mx-3 text-sm font-medium text-gray-900 dark:text-gray-300">達成!</span>
          <span  v-if="! State3" class="mx-3 text-sm font-medium text-gray-900 dark:text-gray-300">未達成</span>
          </div>
        </label>
      </div>
    </template>
    </card>
  </keep-alive>
</div>
</div>
</template >

<script lang="ts">
import { defineComponent} from "vue";
import GradientProgress, { StrokeLinecap } from "vue3-radial-progress";
import Input from "./Input.vue";
export default defineComponent({
  name: "task",
  components: {
    GradientProgress,
    Input,
  },
  setup() {
    const completedSteps = ref(0);
    const totalSteps = 3;
    const animateSpeed = 500;
    const diameter = 300;
    const strokeWidth = 30;
    const innerStrokeWidth = 35;
    const strokeLinecap = "round" as StrokeLinecap;
    const thescam = "<select name='thescam'>\
        <option value='career'>仕事</option>\
        <option value='relation'>人間関係</option>\
        <option value='helth'>健康</option>\
        <option value='money'>お金</option>\
        <option value='change'>自分を変える</option>\
        <option value='study'>勉強</option>\
        <option value='hoby'>趣味</option>\
        </select>";
    const State1 = ref(false);
    const State2 = ref(false);
    const State3 = ref(false);
    const changeCompletedStep = (number,state) => {
      if (number === 1 && state === false){
        completedSteps.value++
        State1.value = true
      }
      else if (number === 1 && state === true) {
        completedSteps.value--
        State1.value = false
      }
      if (number === 2 && state === false){
        completedSteps.value++
        State2.value = true
      }
      else if (number === 2 && state === true) {
        completedSteps.value--
        State2.value = false
      }
      if (number === 3 && state === false){
        completedSteps.value++
        State3.value = true
      }
      else if (number === 3 && state === true) {
        completedSteps.value--
        State3.value = false
      }
    };
    return {
      completedSteps,
      totalSteps,
      animateSpeed,
      diameter,
      strokeWidth,
      innerStrokeWidth,
      strokeLinecap,
      thescam,
      changeCompletedStep,
      State1,State2,State3,
  }
}
});
</script>
<style>
</style>