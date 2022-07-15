<template>
    <div class="flex flex-col">
        <div class="text-2xl pb-2"><slot name="title">ahaha</slot></div>
        <div  class="text-xl pb-2"><slot name="subtitle">hahaha</slot></div>
        <div class="pb-1"><slot name="question">ahahah</slot></div>
        <div class="items-end"><textarea class="w-full h-[4.5rem]" placeholder="ここに記述してください" @mousedown.stop></textarea></div>
    </div>
</template>

<script>
import  {defineComponent } from 'vue';


export default defineComponent({
    name:'questions',
    setup() {
        return {
        }
    }
})
</script>