<template>
<Explanation>
    <template v-slot:title>subSixQuestion</template>
    <template v-slot:explanation><p><span>組織心理学者の</span><span>ターシャ・ユーリック博士が</span><span>考案したもので、</span><br>
        <span>【あなたの周囲の人間との関係性】から</span><span>価値観をあぶりだす</span><span>ような</span><span>内容になっています。</span></p>

        <p><span>たとえば、いきなり</span><span>「あなたは何を大事にしていますか？」</span>
          <span>と尋ねられても困ってしまいますが、</span><span>ここで</span></p>
          <p><span>「あなたの親友は何を大事にしてますか？</span><span>そして、その価値観はあなたに影響を与えていますか？」</span><span>のような聞き方をされると、</span>
        <span>急に</span><span>答えやすくなるのではないでしょうか？</span></p>
        <p><span>あなたと価値観の間に第三者を挟んだおかげで</span><span>客観的な視点が生まれて、</span>
      <span>より引いた視点でものごとを見つめられるようになったからです。</span></p>
      <p>以下の質問に答えたいただきます</p>
      <p>Q１「家庭の価値観」</p>
      <p>Q２「過去の出来事」</p>
      <p>Q３「尊敬できる人」</p>
      <p>Q４「尊敬できない人」</p>
      <p>Q５「最高のリーダー」</p>
      <p>Q６「伝えたい行動」</p>
      <p><span>本当の価値観を探り出すために、</span><span>簡単なエクササイズで凝り固まった頭をほぐしていきましょう。</span></p>
      <nuxt-link to="/sixquestion">Leat's Go</nuxt-link>
      </template>
</Explanation>
</template>

<script>
import { defineComponent } from 'vue';
import Explanation from '~/components/subject/Explanation';
export default defineComponent ({
    name:'subsubSixQuestion',
        components: {
        Explanation
    }
})
</script>