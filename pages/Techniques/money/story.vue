<template>
    <div>
        <insert1>
            <template #title>マネーストーリー</template>
            <template #explanation>あはははあはははははｈ</template>
        </insert1>
        <div class="m-5 ou-morphism">
        <div>
            <div class="my-5 p-3 text-center">
                <p>・子供時代を振り返る</p>
                <p>・一番記憶に残ったお金の経験を思い出す</p>
                <p>・最初にお金を意識した時</p>
                <p>・お金の使い方でも良い（お年玉を貰って使った経験）</p>
                <p>・最もポジティブ・最もネガティブなお金の経験等</p>
            </div>
            <div class="flex p-5 justify-center space-x-5">
                <div class="flex flex-col w-[45%] text-center space-y-3">
                    <div class="text-xl">記憶に残ったお金の経験</div>
                    <input class="h-10"><input class="h-10"><input class="h-10">
                    <input class="h-10"><input class="h-10"><input class="h-10">
                </div>
                <div class="flex items-center">→</div>
                <div class="flex flex-col w-[45%] text-center space-y-3">
                    <div class="text-xl">お金の経験に対する感情</div>
                    <input class="h-10"><input class="h-10"><input class="h-10">
                    <input class="h-10"><input class="h-10"><input class="h-10">
                </div>
            </div>
        </div>
        <div class="text-center text-xl my-6 p-3">
            <div>学んだこと</div>
            <textarea class="w-[80%] min-h-[20rem]"></textarea>
        </div>
    </div>
</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name:'money_story',
    components:{},
    setup(){
        return{

        }
    }
})
</script>