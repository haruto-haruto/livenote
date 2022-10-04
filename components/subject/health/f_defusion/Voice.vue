<template>
    <div class="w-full h-auto bg-[e0e0e0] totu-morphism rounded-lg" :style="{ 'background-color': color }">
        <dMain>
            <template v-slot:title>という考え</template>
            <template v-slot:explanation>
            <p><span class="se-none">心理学者のトビアス・ランドグレンが考案したテクニックです。</span><br>
                <span>ACTのような最新の心理療法でも</span><span>盛んに使われているテクニックで、</span><br>
                <span>【どこまで自分の価値観に従って生きることができているか】をチェックすることができます。</span></p>
            <p><span>「ブルズアイ」は、</span>
                <span>人生における重要な領域を</span><span class="se-none">大きく</span><span>４つに分け</span>
                <span>それぞれについて</span><span>「自分が価値観に従って生きているか」</span><span class="se-none">どうか</span>
                <span>を調べるために開発されたもので、</span><span>以下のステップで行います。</span></p>
            </template>
        </dMain>
        <div>
            <Flicking class="w-full p-4">
                <div class="flex flex-col w-[50%] totu-morphism" :key="s1">
                     <div class="flex flex-col p-4 justify-center items-center">
                        <div class="text-6xl">Step1</div>
                        <div class="pt-5">
                            <p><span class="se-none">まずは</span><span class="se-none">人生の４つの領域について</span><span>自分の価値観を改めてチェックしていきましょう</span>
                            <span>「仕事・勉強」「遊び・趣味」</span><span>「人間関係」「成長・健康」</span><span>それぞれで、</span>
                            <span>質問に対して内省し、答えを書き出す。</span></p>
                        </div>
                    </div>
                    <button class="w-1/6 h-8 mx-auto mb-2 totu-morphism" @click="count += 1">add</button>
                </div>
                <div class="flex flex-col w-[50%] totu-morphism" :key="s2">
                     <div class="flex flex-col p-4 justify-center items-center">
                        <div class="text-6xl">Step1</div>
                        <div class="pt-5">
                            <p><span class="se-none">まずは</span><span class="se-none">人生の４つの領域について</span><span>自分の価値観を改めてチェックしていきましょう</span>
                            <span>「仕事・勉強」「遊び・趣味」</span><span>「人間関係」「成長・健康」</span><span>それぞれで、</span>
                            <span>質問に対して内省し、答えを書き出す。</span></p>
                        </div>
                    </div>
                    <button class="w-1/6 h-8 mx-auto mb-2 totu-morphism" @click="count += 1">add</button>
                </div>
            </Flicking>
        </div>
        <div class="w-full p-4 text-center">
            <textarea class="w-5/6"></textarea>
        </div>
    </div>
    </template>
    
    <script>
    import { defineComponent } from 'vue';
    import Flicking from "@egjs/vue3-flicking";
    import dMain from './dMain';
    export default defineComponent ({
        name:'voice',
        components: {
            Flicking,
            dMain
        },
        setup() {
            const s1 = "step1";
            const s2 = "step2";
    
            const color = ref("")
            const count = ref(0)
            const setColor = () => {
                switch (count.value) {
                    case 0:
                        color.value = "#FFFFFF"
                        break;
                    case 1:
                        color.value = "rgba(54, 162, 235, 0.2)"
                        break;
                    case 2:
                        color.value = "rgba(255, 206, 86, 0.2)"
                        break;
                    case 3:
                        color.value = "rgba(75, 192, 192, 0.2)"
                        break;
                    default:
                    color.value = "rgba(255, 99, 132, 0.2)"
                }
            }
            watch (count, () => setColor())
            return {
                s1,s2,
                color,
                count,
            }
        }
    })
    </script>
    
    <style>
    
    </style>