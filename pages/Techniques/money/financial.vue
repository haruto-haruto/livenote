<template>
    <Insert1>
        <template #title>ファイナンシャルメイクオーバー</template>
        <template #explanation>ああはあはっはははははああｈｈ</template>
    </Insert1>
    <div class="mx-5 ou-morphism">
        <div class="p-2 mb-4 text-3xl text-center">
            <div>１．自分が抱えているマネースクリプトを、左の欄に書き出す(３つ)<br>
                それを正当化するマネースクリプトに変換し、右の欄に書き出す</div>
            <div class="flex justify-around space-x-3 p-5">
                <div>マネースクリプト</div>
                <div>正当化する</div>
            </div>
            <div class="flex justify-around space-x-3 p-5">
                <input class="w-[90%] min-h-[4rem]"><div>→</div><input class="w-[90%] min-h-[4rem]">
            </div>
            <div class="flex justify-around space-x-3 p-5">
                <input class="w-[90%] min-h-[4rem]"><div>→</div><input class="w-[90%] min-h-[4rem]">
            </div>
            <div class="flex justify-around space-x-3 p-5">
                <input class="w-[90%] min-h-[4rem]"><div>→</div><input class="w-[90%] min-h-[4rem]">
            </div>
        </div>
        <hr class="m-5 border">
        <div class="p-2 mb-4 text-3xl text-center">
            <div class="p-2 mb-4">実用生の高い形</div>
            <div class="flex justify-around space-x-3 p-5">
                <input class="w-[90%] min-h-[8rem]"><input class="w-[90%] min-h-[8rem]"><input class="w-[90%] min-h-[8rem]">
            </div>
        </div>
        <hr class="m-5 border">
        <div class="text-center">
            <div class="mb-2 text-2xl">２．1で選んだマネースクリプトが正しくないと思われる様な具体的な状況を書き出す</div>
            <textarea class="w-[80%] min-h-[20rem] mb-3 text-xl"></textarea>
        </div>
        <hr class="m-5 border">
        <div class="text-center mb-7">
            <div class="mb-2 text-2xl">３．1と2を踏まえて、1で選んだマネースクリプトを実用性が高い形に書き換える</div>
            <div>
                <div class="text-xl">meno</div>
                <textarea class="w-[80%] min-h-[20rem] mb-5 text-xl"></textarea>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import Insert1 from '../../../components/insert1.vue';
export default defineComponent({
    name: "money_financial",
    setup() {
        return {};
    },
    components: { Insert1 }
})
</script>