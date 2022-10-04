<template>
    <insert1>
        <template #title>マネーマントラ</template>
        <template #explanation>あはははは</template>
    </insert1>
    <div class="flex flex-col p-5 space-y-14 text-center ou-morphism">
        <div>
            <div class="text-3xl pb-5">１．お金に関する嫌な思考や感情を特定する</div>
            <div class="flex justify-around">
                <p class="text-2xl">思考</p>
                <p class="text-2xl">感情</p>
            </div>
            <div class="flex justify-center space-x-7">
                <textarea class="w-[40%] min-h-[15rem]"></textarea>
                <textarea class="w-[40%] min-h-[15rem]"></textarea>
            </div>
        </div>
        
        <div class="flex justify-center space-x-7">
            <div class="w-[40%]">
                <p class="text-3xl pb-5">２．その感情の根底にどんなマネースクリプトがあるかを書き出す</p>
                <textarea class="w-full min-h-[15rem]"></textarea>
            </div>
            <div class="flex items-center text-2xl">⇒</div>
            <div class="w-[40%]">
                <p class="text-3xl pb-5">５．現在の自分の状況からマネースクリプトを書き換える</p>
                <textarea class="w-full min-h-[15rem]"></textarea>
            </div>
        </div>
        <hr class="border m-5">
        <div class="flex justify-center space-x-7">
            <div class="w-[40%]">
                <p class="text-3xl pb-5">３ステップ2で特定した内容が人生でどんなメリットをもたらしたか</p>
                <textarea class="w-full min-h-[15rem]"></textarea>
            </div>
            <div class="flex items-center">しかし今は</div>
            <div class="w-[40%]">
                <p class="text-3xl pb-5">４．ステップ3の文章に「しかし今は」・・・を付け加えた<br>メリットが役に立っていない現在の状況を書き出す</p>
                <textarea class="w-full min-h-[15rem]"></textarea>
            </div>
        </div>
        <hr class="border m-5">
        <div>
            <div class="text-3xl">６．新しく作ったマネースクリプトの根底の価値観を見る</div>
        </div>
        <hr class="border m-5">
        <div>
            <div class="text-3xl pb-5">７.新しいマネースクリプトの基づいて具体的な行動を考える</div>
            <div class="flex justify-center space-x-3">
                <div class="w-[25rem]">
                    <div class="text-left text-2xl">○○の時</div>
                    <input class="w-full min-h-[4rem]">
                </div>
                <div class="w-[25rem]">
                    <div class="text-left  text-2xl">○○する</div>
                    <input class="w-full min-h-[4rem]">
                </div>
            </div>
        </div>
        <div>
            <div class="text-3xl pb-5">８.ステップ1～6を繋げて名言にする</div>
            <div>
                <p class=" text-2xl">マントラ（名言）</p>
                <input class="w-[60%] min-h-[4rem] text-center text-5xl">
            </div>
        </div>
        <hr class="border m-5">
        <div class="pb-7 text-2xl">これをスマホや紙に書き出し目につく様にする</div>
        <hr class="border m-5">
    </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name:'  money_mantra',
    compontns:{},
    setup(){
        return{

        }
    }
})
</script>