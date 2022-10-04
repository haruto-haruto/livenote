<template>
    <insert1>
        <template #title>ロス認識トレーニング</template>
        <template #explanation>あはははははははｈ</template>
    </insert1>
    <div class="p-4 ou-morphism">
        <div class="flex justify-center mx-5 my-2 p-5 space-x-2 text-center text-2xl">
        <div class="w-1/2 ">
            <div class="mb-2">辛い経験</div>
            <textarea  class="w-full min-h-[20rem]"></textarea>
        </div>
        <div class="w-1/2 ">
            <div class="mb-2">お金の使い方との関連</div>
            <textarea  class="w-full min-h-[20rem]"></textarea>
        </div>
        </div>
        <div class="text-center text-2xl">
            <div>マネースクリプトとのつながり</div>
            <p>その出来事は実はマネースクリプトとつながっていないか？</p>
            <textarea class="w-[80%] min-h-[20rem]"></textarea>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name:'money_dlos',
    comportnents:{},
    setup(){
        return{

        }
    }
})
</script>