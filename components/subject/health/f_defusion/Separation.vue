<template>
<div class="flex flex-col w-full h-auto bg-[e0e0e0] totu-morphism rounded-lg" :style="{ 'background-color': color }">
    <dMain>
        <template v-slot:title>四つの分割</template>
        <template v-slot:explanation><p><span class="se-none">心理学者のトビアス・ランドグレンが考案したテクニックです。</span><br>
          <span>ACTのような最新の心理療法でも</span><span>盛んに使われているテクニックで、</span><br>
        <span>【どこまで自分の価値観に従って生きることができているか】をチェックすることができます。</span></p>

        <p><span>「ブルズアイ」は、</span>
          <span>人生における重要な領域を</span><span class="se-none">大きく</span><span>４つに分け</span><span>それぞれについて</span><span>「自分が価値観に従って生きているか」</span><span class="se-none">どうか</span>
          <span>を調べるために開発されたもので、</span><span>以下のステップで行います。</span></p>
        <p>STEP１
          <br><span class="se-none">まずは</span><span class="se-none">人生の４つの領域について</span><span>自分の価値観を改めてチェックしていきましょう</span>
          <span>「仕事・勉強」「遊び・趣味」</span><span>「人間関係」「成長・健康」</span><span>それぞれで、</span>
          <span>質問に対して内省し、答えを書き出す。</span></p>
        <p>STEP２
         <br><span>書き出した内容をもとに、</span><span>価値観に沿って入れば内側、</span><span>そうでなければ外側に</span>
         <br><span>ブルズアイサークルにチェックを入れる</span></p>
        <p>STEP３
          <br><span>あなたの価値観と人生の融合をはばむ</span><span>「障害」を特定する</span></p>
        <p>STEP４
          <br><span>自分の価値観に沿った人生を送るためには、具体的にどのように行動をとればいいのか考え、</span><span>リストアップする。</span></p>
        <p class="se-none"><span>以上のステップを踏めば、</span><span>あとは思いついたアクションを実際の行動に移すだけです。</span>
          <span>そのアクションをやり終えたら、</span><span>再び違うアクションを考え、少しずつ自分の価値観を実現させていきましょう。</span></p></template>
    </dMain>
    <div class="flex flex-col mx-auto my-5 w-[95%] h-auto ou-morphism">
        <div class="flex mx-auto my-5 w-[60%] h-[20rem] text-[14rem] totu-morphism items-center justify-center">{{ count }}</div>
        <button class="block w-[50%] h-[5rem] mx-auto mb-5 totu-morphism" @click="count += 1">count</button>
    </div>
</div>
</template>

<script>
import { defineComponent } from 'vue';
import dMain from './dMain';
export default defineComponent ({
    name:'separation',
    components: {
        dMain
    },
    setup() {
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
            color,
            count,
        }
    }
})
</script>
