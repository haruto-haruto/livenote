<template>
<Explanation>
    <template v-slot:title>ValueList</template>
    <template v-slot:explanation><p><span>これは「動機付け面接」などで使われる</span><span>手法で、</span>
          <span>100を超す試験で効果が確認された</span><span>由緒正しいテクニックで、</span><br>
        <span>【自分がどんな価値観を持っているのかを把握】することができます</span></p>

        <p><span>「価値観リスト」は、</span>
          <span>多くの人が無意識のうちに抱いている</span><span>価値観を８０種類にまとめたもので、</span>
          <span>以下のステップで使います。</span></p>
        <p>STEP１
          <br><span>リストを見ながら、それぞれの項目を</span>
          <span>「とても重要◎」「重要〇」</span><span>「重要でない×」</span><span>のいずれかに分類</span></p>
        <p>STEP２
         <br><span>「とても重要◎」</span><span>に分類した価値観のなかから、</span><span>特に大事だと思うものを</span><span>１０個まで絞り込む</span></p>
        <p>STEP３
          <br><span>選んだ価値観を重要度が高い順に</span><span>１～１０位までランク付けする</span></p>
        <p>STEP４
          <br><span>価値観のトップ１０を選んだら、</span><span>それぞれの「意味」と「理由」を考える</span></p>
        <p class="se-none"><span>リストで作った価値観が</span><span>自分の主軸なのだと改めて理解できてれば、</span>
          <span>今後の人生で何らかのトラブルが起きても、</span>
          <br><span>「この問題を自分の価値観に役立てることはできないか」</span><span>や</span>
          <span>「この問題から価値観に活かせるものを得られないか？」</span>
          <br>といった方向で考えることができるため
          <br><span>いたずらに気持ちを落ちこませることもなく、</span>
          <span>なおかつ客観的なスタンスも維持しやすくなります。</span></p>
        <p><span class="se-none">いわば</span><span>価値観が人生の羅針盤として</span><span>働いてくれます。</span></p></template>
        <template v-slot:link>
        <nuxt-link to="/valuelist">Leat's Go</nuxt-link>
        </template>
</Explanation>
</template>

<script>
import { defineComponent } from 'vue';
import Explanation from '~/components/subject/Explanation';
export default defineComponent ({
    name:'subvaluelist',
        components: {
        Explanation
    }
})
</script>