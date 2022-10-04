<template>
    <insert1>
        <template #title>他己開示</template>
        <template #explanation>あはあはははははははｈ</template>
    </insert1>
    <div class="m-5 p-5 text-center ou-morphism">
        <div class="flex justify-around text-2xl mb-5">
            <p>親しい人</p>
            <p>他己紹介</p>
        </div>
        <div class="flex flex-col space-y-4">
            <div class="flex justify-around space-x-5">
                <div class="flex flex-col">
                    <img src="~/assets/images/icon.png">
                    <input class="w-full min-h-[3rem] text-center">
                </div>
                <textarea class="w-full min-h-[10rem]"></textarea>
            </div>
            <hr class="border m-3">
            <div class="flex justify-around space-x-5">
                <div class="flex flex-col">
                    <img src="~/assets/images/icon.png">
                    <input class="w-full min-h-[3rem] text-center">
                </div>
                <textarea class="w-full min-h-[10rem]"></textarea>
            </div>
            <hr class="border m-3">
            <div class="flex justify-around space-x-5">
                <div class="flex flex-col">
                    <img src="~/assets/images/icon.png">
                    <input class="w-full min-h-[3rem] text-center">
                </div>
                <textarea class="w-full min-h-[10rem]"></textarea>
            </div>
        </div>
        <div class="my-5">
            <p class="text-2xl">紹介文</p>
            <textarea class="w-[80%] min-h-[15rem]"></textarea>
            <p>「よく友達にこう言われます」といった紹介の仕方でOK</p>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name:'',
    components:{},
    setup(){
        return{

        }
    }
})
</script>