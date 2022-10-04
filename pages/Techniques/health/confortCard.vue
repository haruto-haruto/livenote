<template>
    <insert1>
        <template #title>コンフォートカード</template>
        <template #explanation>あははあははあｈ</template>
    </insert1>
    <div class="text-center">
        <div class="flex justify-center space-x-4">
            <div class="w-[45%]">
                <p>1.ネガティブだった時の感情を紙に書き出す</p>
                <textarea class="w-full min-h-[20rem]"></textarea>
            </div>
            <div class="w-[45%]">
                <p>2.駄目だった自分を慰める言葉を書いてあげる</p>
                <textarea class="w-full min-h-[20rem]"></textarea>
            </div>
        </div>
        <div class="m-5 p-5">
            <p>3.優しい言葉を持ち歩く　見る</p>
            <div class="flex flex-wrap space-x-1 space-y-1">
                <div class="w-[35rem] min-w-[33%] h-auto min-h-[12rem]  p-6 bg-[#e0e0e0] rounded-lg border shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <textarea class="w-full h-full text-2xl font-extraboold tracking-tight p-2.5 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 
                        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="自分へのやさしい言葉"></textarea>
                </div>
                <div class="w-[35rem] min-w-[33%] h-auto min-h-[12rem]  p-6 bg-[#e0e0e0] rounded-lg border shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <textarea class="w-full h-full text-2xl font-extraboold tracking-tight p-2.5 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 
                        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="自分へのやさしい言葉"></textarea>
                </div>
                <div class="w-[35rem] min-w-[33%] h-auto min-h-[12rem]  p-6 bg-[#e0e0e0] rounded-lg border shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <textarea class="w-full h-full text-2xl font-extraboold tracking-tight p-2.5 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 
                        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="自分へのやさしい言葉"></textarea>
                </div>
            </div>
        </div>
    </div>
        
    
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name:'confortCard',
    setup(){
        return{

        }
    }
})
</script>