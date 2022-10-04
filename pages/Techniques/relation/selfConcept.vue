<template>
    <insert1>
        <template #title>セルフコンセプト</template>
        <template #explanation>あはあはははははははｈ</template>
    </insert1>
    <div class="grid grid-cols-2 gap-3 m-5 p-10 text-center ou-morphism">
        <div class="">
            <p class="text-3xl">特徴</p>
            <P class="text-xl">説明</P>
            <textarea class="w-full min-h-[10rem] text-2xl"></textarea>
        </div>
        <div class="">
            <p class="text-3xl">目標</p>
            <P class="text-xl">説明</P>
            <textarea class="w-full min-h-[10rem] text-2xl"></textarea>
        </div>
        <div class="">
            <p class="text-3xl">動機</p>
            <P class="text-xl">説明</P>
            <textarea class="w-full min-h-[10rem] text-2xl"></textarea>
        </div>
        <div class="">
            <p class="text-3xl">価値観</p>
            <P class="text-xl">説明</P>
            <textarea class="w-full min-h-[10rem] text-2xl"></textarea>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name:'selfConcept',
    components:{},
    setup(){
        return{

        }
    }
})
</script>