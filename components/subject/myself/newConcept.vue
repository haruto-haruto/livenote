<template>
<div class="flex flex-col totu-morphism h-[37rem]">
  <div class="text-center text-4xl py-3">
      <slot name="title">Title</slot>
  </div>
  <div class="flex flex-raw justify-around">
      <div class="w-1/2 p-3">
          <div class="mb-2 text-center text-2xl">自分にとっての意味</div>
          <slot name="meaning">
               <textarea class="text-xl items-center w-full" placeholder="ここに意味を記述します" @mousedown.stop ></textarea>
          </slot>
      </div>
      <div class="w-1/2 p-3">
          <div class="pb-2 text-center text-2xl">その価値観が大事な理由</div>
          <slot name="reason">
               <textarea class="text-xl items-center w-full" placeholder="ここに理由を記述します" @mousedown.stop></textarea>
          </slot>
      </div>
  </div>
</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: "newconcept",
    setup() {
        return {
        }
    }
})
</script>

<style>
</style>