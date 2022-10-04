<template>
<Flicking class="h-[90%]">
    <div :key="l" class="flex-cal w-[90%] my-2 mr-3 totu-morphism rounded-lg ">
      <div class="flex justify-center space-x-3 w-full m-2">
        <input type="text" v-model="dataVa.b" class="w-1/6 h-12 p-1 bg-[#ff638433] rounded-lg border totu-morphism dark:bg-gray-800 dark:border-gray-700" />
        <input type="text" v-model="dataVa.m" class="w-1/6 p-1 bg-[#4bc0c033] rounded-lg border totu-morphism dark:bg-gray-800 dark:border-gray-700" />
        <input type="text" v-model="dataVa.s" class="w-1/6 p-1 bg-[#ffce5633] rounded-lg border totu-morphism dark:bg-gray-800 dark:border-gray-700" />
        <input type="text" v-model="dataVa.st" class="w-1/6 p-1 bg-[#36a2eb33] rounded-lg border totu-morphism dark:bg-gray-800 dark:border-gray-700" />
      </div>

       <Line v-bind:body-state="dataVa.b" v-bind:mental-state="dataVa.m" v-bind:social-state="dataVa.s" v-bind:stress-state="dataVa.st" 
       class="m-4 totu-morphism rounded-lg" />
       
    </div>
    <div :key="r" class="flex flex-col my-2 totu-morphism">
    <div class="grid grid-cols-2 gap-4 m-3 pt-16">
    <card class="flex flex-col w-[33rem] min-w-4/12 h-[18rem] p-3 rounded-lg border shadow-md  bg-[#ff638433]">
    <template v-slot:select>
      <div class="absolute w-full">身体</div>
    </template>
    <template v-slot:behaver>
        <div class="mb-2 text-center text-3xl">{{bPower[bNumber].behaver}}</div>
    </template>
    <template v-slot:explanation>
        <div>{{bPower[bNumber].explanation}}</div>
    </template>
        <template v-slot:achievement>
          <div class="flex justify-end">
        <label for="toggle1" class="inline-flex relative items-center cursor-pointer">
          <input type="checkbox" value="" id="toggle1" class="sr-only peer" v-on:click="addPower('b',bPower,bNumber,)"/>
          <div class="w-24 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 
          dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 
          peer-checked:after:translate-x-16 peer-checked:after:border-white 
          after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all 
          dark:border-gray-600 peer-checked:bg-blue-600 text-right peer-checked:text-center peer-checked:after:left-[4px]">
          <span  v-if="state.b" class="mx-3 text-sm font-medium text-gray-900 dark:text-gray-300">達成!</span>
          <span  v-if="! state.b" class="mx-3 text-sm font-medium text-gray-900 dark:text-gray-300">未達成</span>
          </div>
        </label>
      </div>
    </template>
    </card>
    <card class="flex flex-col w-[33rem] min-w-4/12 h-[18rem] p-3 rounded-lg border shadow-md bg-[#4bc0c033]">
    <template v-slot:select>
      <div class="absolute w-full">精神</div>
    </template>
    <template v-slot:behaver><div class="mb-2 text-center text-3xl">{{mPower[mNumber].behaver}}</div></template>
    <template v-slot:explanation><div>{{mPower[mNumber].explanation}}</div></template>
        <template v-slot:achievement>
          <div class="flex justify-end">
        <label for="toggle2" class="inline-flex relative items-center cursor-pointer">
          <input type="checkbox" value="" id="toggle2" class="sr-only peer" v-on:click="addPower('m',mPower,mNumber,)"/>
          <div class="w-24 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 
          dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 
          peer-checked:after:translate-x-16 peer-checked:after:border-white 
          after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all 
          dark:border-gray-600 peer-checked:bg-blue-600 text-right peer-checked:text-center peer-checked:after:left-[4px]">
          <span  v-if="state.m" class="mx-3 text-sm font-medium text-gray-900 dark:text-gray-300">達成!</span>
          <span  v-if="! state.m" class="mx-3 text-sm font-medium text-gray-900 dark:text-gray-300">未達成</span>
          </div>
        </label>
      </div>
      </template>
      </card>
      <card class="flex flex-col w-[33rem] min-w-4/12 h-[18rem] p-3 rounded-lg border shadow-md bg-[#ffce5633]">
    <template v-slot:select>
      <div class="absolute  w-full">ソーシャル</div>
    </template>
    <template v-slot:behaver><div class="mb-2 text-center text-3xl">{{sPower[sNumber].behaver}}</div></template>
    <template v-slot:explanation><div>{{sPower[sNumber].explanation}}</div></template>
        <template v-slot:achievement>
          <div class="flex justify-end">
        <label for="toggle3" class="inline-flex relative items-center cursor-pointer">
          <input type="checkbox" value="" id="toggle3" class="sr-only peer" v-on:click="addPower('s',sPower,sNumber,)"/>
          <div class="w-24 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 
          dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 
          peer-checked:after:translate-x-16 peer-checked:after:border-white 
          after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all 
          dark:border-gray-600 peer-checked:bg-blue-600 text-right peer-checked:text-center peer-checked:after:left-[4px]">
          <span  v-if="state.s" class="mx-3 text-sm font-medium text-gray-900 dark:text-gray-300">達成!</span>
          <span  v-if="! state.s" class="mx-3 text-sm font-medium text-gray-900 dark:text-gray-300">未達成</span>
          </div>
        </label>
      </div>
    </template>
    </card>
    <card class="flex flex-col w-[33rem] min-w-4/12 h-[18rem] p-3 rounded-lg border shadow-md bg-[#36a2eb33]">
    <template v-slot:select>
      <div class="absolute w-full">ストレス</div>
    </template>
    <template v-slot:behaver><div class="mb-2 text-center text-3xl">{{stress[stressNumber].behaver}}</div></template>
    <template v-slot:title><div>{{stress[stressNumber].title}}</div>
    </template>
    <template v-slot:explanation><div>{{stress[stressNumber].explanation}}</div></template>
        <template v-slot:achievement>
          <div class="flex justify-end">
        <label for="toggle4" class="inline-flex relative items-center cursor-pointer">
          <input type="checkbox" value="" id="toggle4" class="sr-only peer" v-on:click="addPower('st',stress,stressNumber,)"/>
          <div class="w-24 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 
          dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 
          peer-checked:after:translate-x-16 peer-checked:after:border-white 
          after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all 
          dark:border-gray-600 peer-checked:bg-blue-600 text-right peer-checked:text-center peer-checked:after:left-[4px]">
          <span  v-if="state.st" class="mx-3 text-sm font-medium text-gray-900 dark:text-gray-300">達成!</span>
          <span  v-if="! state.st" class="mx-3 text-sm font-medium text-gray-900 dark:text-gray-300">未達成</span>
          </div>
        </label>
      </div>
    </template>
    </card>
    </div>
    <button @click="cardShuffle" class="block w-5/6 h-[15%] m-auto totu-morphism">suffle</button>
    </div>
</Flicking>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Flicking from "@egjs/vue3-flicking";
import { Chart, registerables} from "chart.js";
import Line from "./chart";

Chart.register(...registerables);

export default defineComponent ({
    name:'condition',
    components: {
        Flicking,
        Line,
    },
    setup() {
        const dataVa = ref({
          b:0,m:0,s:0,st:0
        })
        const state = ref({
          b:false,m:false,s:false,st:false}
          );
        
        const cardShuffle = () => {
            bNumber.value = Math.floor(Math.random() * 10)
            mNumber.value = Math.floor(Math.random() * 10)
            sNumber.value = Math.floor(Math.random() * 10)
            stressNumber.value = Math.floor(Math.random() * 10)
        }
        const addPower = (category,name,number) => {
            if (state.value[category] === false) {
                dataVa.value.b = parseInt(dataVa.value.b) + parseInt(name[number].effect.b);
                dataVa.value.m = parseInt(dataVa.value.m) + parseInt(name[number].effect.m);
                dataVa.value.s = parseInt(dataVa.value.s) + parseInt(name[number].effect.s);
                dataVa.value.st = parseInt(dataVa.value.st) + parseInt(name[number].effect.st);

                state.value[category] = true;
            }
            else {
                dataVa.value.b = parseInt(dataVa.value.b) - parseInt(name[number].effect.b);
                dataVa.value.m = parseInt(dataVa.value.m) - parseInt(name[number].effect.m);
                dataVa.value.s = parseInt(dataVa.value.s) - parseInt(name[number].effect.s);
                dataVa.value.st = parseInt(dataVa.value.st) - parseInt(name[number].effect.st);

                state.value[category] = false;
            }
        }
        const bNumber = ref(0);
        const mNumber = ref(0);
        const sNumber = ref(0);
        const stressNumber = ref(0);
        const bPower =ref([
            {behaver:'コップ一杯の水を飲む', explanation:'これまでで最も簡単な健康増進のポイント—私たちが水と呼ぶこの魔法の喉の渇きを癒す飲み物を一杯飲んでください。\
            それでおしまい！パワーアップ！ ',effect:{b:1,m:1,s:0,st:0}},
            {behaver:'歩ける場所にいますか？歩き回る！', explanation:'職場、自宅、食料品店の前、どこに立っていても、通常は歩ける場所の近くにいます。パワーアップのためにそこを歩き回ってください！ほんの数分かかります。\
            （都市以外の住人は、代わりに芝生や駐車場を歩き回ることができます！）',effect:{b:1,m:1,s:0,st:0}},
            {behaver:'小さな飛躍を', explanation:'小さくジャンプしてください!。※注意（心臓が少し速くなりますが、病院に着陸することはありません）',effect:{b:1,m:2,s:0,st:0}},
            {behaver:'最初のフライトルール', explanation:'パワーアップのためにエレベーターやエスカレーターを使用するのではなく、\
            少なくとも1つの階段を上ってください！1つ上に歩き、残りは機械的手段に切り替えてOK。',effect:{b:1,m:1,s:0,st:0}},
            {behaver:'体をシェイプ', explanation:'短い散歩、数分のダンス、またはいくつかのヨガのポーズはすべて、このパワーアップにカウントされます！身体活動は私たちの脳にエンドルフィンを放出し、それが私たちの気分を高めるのに役立ちます。ですから、先に進んで体を振ってください！マラソンをする必要はありません。\
            ',effect:{b:1,m:2,s:0,st:0}},
            {behaver:'一日一計', explanation:'運動する時間をスケジュールしたり、冷蔵庫に健康的な食べ物を用意したり、外出先にもっていく水筒を準備しましょう。\
            研究によると、健全な変化 をもたらしたいとき、現時点で意志力に頼るよりも、 前もって計画する方が効果的です。成功を前もって計画しているときはいつでもパワーアップヒーロー！',effect:{b:1,m:1,s:0,st:0}},
            {behaver:'フレンドリーミラー', explanation:'鏡を見ながら、あなたが本当に楽しんでいる時の体や顔の、少なくとも1つの側面を見つけてください。 追加の効果のために大声で感謝を言いなさい！',effect:{b:1,m:1,s:0,st:0}},
            {behaver:'ももあげ、ももあげ', explanation:'その場で膝を高く上げながら足踏みしましょう。疲労時にあえて軽く体を動かすことで血流を改善させ、疲労物質を効率的に排出させることができます',effect:{b:2,m:1,s:0,st:0}},
            {behaver:'スーパースクワッターあなた', explanation:'高速スクワット１０回以上！！　それだけだ！',effect:{b:0,m:0,s:0,st:0}},
            {behaver:'Aaaaaahhhhhhhh', explanation:'リラックスした状態で呼吸に集中して、5回続けて深呼吸をします。科学は、私たち一人一人がストレスを和らげる簡単で自由な方法を発見しました。',effect:{b:2,m:1,s:0,st:0}},
            ]);
        const mPower =ref([
            {behaver:'自分を抱きしめて', explanation:'腕や背中を抱きしめたり、軽くたたいたりしながら、体にどんな素晴らしい仕事をしているのかを伝えましょう。研究によると、\
            自分自身を受け入れることで、気分が良くなるったり幸せになるだけでなく、フィットネスや温かい食事の目標を守り、 自分が望む体を手に入れることができます。',effect:{b:1,m:1,s:0,st:0}},
            {behaver:'素晴らしいこと', explanation:'15秒間は何もしません。ただそこに座っているだけでいいのです。「素晴らしいこと」は、私たちの外見やキャリアなどの外的要因とはほとんど関係がありません。\
            私たちは素晴らしく自己意識を持ち、素晴らしく失業している可能性があります。「YES」または「NO」と返事しても素晴らしいのです。\
            ただあなたであることが、あなたを素晴らしいものにします—あなたは努力する必要さえありません。\
             自分らしくない自分になろうと努力することをあきらめ、代わりに私たちがすでに誰であるかを明らかにし、より自分らしくなっていくことを約束しましょう。 \
            あなたは生きているだけで素晴らしいのですから。',effect:{b:0,m:2,s:0,st:0}},
            {behaver:'ばかげて感謝!', explanation:'感謝することは必ずしも真剣である必要はありません。この短い記事を読んでから、ばかばかしいほど明白であるが、\
            誰もが感謝すべき素晴らしいことを、あなた自身の例で3つ考えてください。',effect:{b:0,m:2,s:0,st:0}},
            {behaver:'I Heart Myself', explanation:'自分のために何か親切なことをしてください。正当な理由はいりません。あなたは自分自身に愛と優しさを与えるために少し時間がかかります。\
            あなたがあなたの好きな友人、家族、またはペットを愛するのと同じくらいあなた自身を愛してください。',effect:{b:0,m:2,s:0,st:0}},
            {behaver:'相棒と何か楽しいことをする', explanation:'ゲームをプレイする、冗談を言う、友達と刺激的な会話を共有する、楽しいお出かけを計画する。パワーアップ！',effect:{b:0,m:1,s:1,st:0}},
            {behaver:'スモールウィン', explanation:'電話代の支払いや友達の誕生日のケーキの注文など、難しいことではないタスクやプロジェクトを早期に完了させましょう。あなたが予定を達成できることを\
            をあなた自身に証明してください。I Can Do it！）',effect:{b:0,m:2,s:0,st:0}},
            {behaver:'衝動をサーフィンする', explanation:'衝動を抑えようとするのではなく、自分でそれを体験してみましょう。どんな考えがあなたの心を駆け巡っていますか？あなたの体の衝動はどのように感じますか？\
            渇望がどのように感じられるかに気づいたら、サーフィンしている波のように衝動を想像してみてください。\
            強烈でパワフルですが、しっかりと握れば溺れることなく乗り切ることができます。',effect:{b:0,m:2,s:0,st:1}},
            {behaver:'僧侶のように', explanation:'5分間瞑想しましょう。1日5分間の瞑想でさえ、私たちの脳の構造を変化させ、 感情的な調節に関連する領域を厚くし、注意を払います。\
            僧侶が好きで瞑想するたびに、たった5分間でパワーアップ！ あなたの脳とあなたの神経はそれをあなたに感謝します。',effect:{b:0,m:2,s:0,st:0}},
            {behaver:'エキサイティングで新しい！', explanation:'新しい方法で日常的なタスクを実行するときはいつでも—パワーアップ！日常の活動を別の順序で実行したり、仕事や学校への別のルートをたどったり、\
            歯を磨くために使用する手を切り替えたりして、脳を揺るがします。',effect:{b:0,m:2,s:0,st:0}},
            {behaver:'趣味に従事する', explanation:'あなたの心を活気づけて集中力を回復するための速い方法のために、あなたの好きな趣味に従事することに数分を費やしてください。',effect:{b:0,m:2,s:0,st:0}},
        ]);
        const sPower =ref([
            {behaver:'ヒューマンタグ', explanation:'他の人と前向きな関係を築くときはいつでも(電話を手に取ったり、メールを送信したり、見知らぬ人に微笑んだり、犬の散歩中に会話をしたり)できます。パワーアップ！\
            積極的な社会的接触を楽しむことは、健康と幸福を改善するためにできる最大のことであることを忘れないでください。',effect:{b:0,m:1,s:1,st:0}},
            {behaver:'優しさの行為', explanation:'困っている人を助けるために時間、エネルギー、またはリソースを与えるときはいつでも、それは二重のパワーアップです。親切な行為をした相手に\
            感謝を生み出しています。そして、あなたもおそらく自分自身について気分が良くなっているでしょう！',effect:{b:0,m:1,s:1,st:0}},
            {behaver:'スマイル！', explanation:'笑顔は伝染性です！それは本当です—あなたが微笑むとき、あなたは他の人からの反応を引き出します—通常は見返りに微笑む。\
             愛する人でも見知らぬ人でも、誰かに暖かい笑顔を提供するたびに、パワーアップ！',effect:{b:0,m:1,s:1,st:0}},
            {behaver:'共通点を見つける', explanation:'共通の経験を共有したり、他の人と共有している人を見つけたりすることは、思いやりと共感を活性化するための主要な方法です。他の人と共有しているものを見つけて、\
            パワーアップしましょう！よく知らない人や緊張した人との共通点を見つけたらボーナスポイント',effect:{b:0,m:1,s:2,st:0}},
            {behaver:'最大の属性を教えてください', explanation:'自分自身についての良いことを思い出すことは、不安や不安の感情と戦うのに役立ちます。\
            社会的な状況のどこに立っているのかわからないときは、自分自身の好きなところ3つ、または自分が友達に対してできること、そして今後自分がどう成長していきたいか考えてみてください。',effect:{b:0,m:1,s:1,st:0}},
            {behaver:'フレンドパワー', explanation:'どんな形でもいいので、関係を作りましょう！友達やLiver(このサービスのユーザーの方)との前向きなつながりを楽しむたびに、意志力が強化され、\
            体重を減らすことに成功する可能性が高まります。メールでも挨拶でもかまいません。',effect:{b:0,m:1,s:1,st:0}},
            {behaver:'ピープルパワー', explanation:'他の人間と意図的に積極的に接触することで、社会的相互作用の信じられないほどの健康上の利点を活性化するときはいつでも、見知らぬ人に微笑んだり、\
            会話をしたり、友人を抱きしめたり、チームスポーツをしたり、接続して話す時間を取ったりすることが重要です。パワーアップ！',effect:{b:0,m:1,s:2,st:0}},
            {behaver:'マッチングソックス', explanation:'あなたが思いやりを活性化し、あなたと別の人の共通点に気づくことによって、別の人間に共通点を伝えるときはいつでも-パワーアップ！\
            同じ色の靴下を履いていることに気付くのと同じくらい簡単かもしれません。「靴下おんなじ色ですね！」',effect:{b:0,m:1,s:1,st:0}},
            {behaver:'アドバンスドマッチングソックス', explanation:'普段は仲良くしていない人や、自分とは大きく違う人との共通点に気づき、大声で表現するときはいつでも、この高度なパワーアップを有効にしてください。\
            ',effect:{b:0,m:1,s:2,st:0}},
            {behaver:'いくつかの肌をギミ', explanation:'多くの研究は、人間のタッチの思いやりを高める健康上の利点を指摘しています。コミュニケーションに敬意を持って適切なタッチを意図的にするときはいつでもパワーアップしてください。\
            （チートシート：腕と背中上部はフェアプレーです。体の正面と中央は立ち入り禁止です！）',effect:{b:0,m:1,s:1,st:0}},
        ]);
        const stress =ref([
            {behaver:'歌っちゃう法',title:'ネガティブな思考を歌に変えてしまう方法です', explanation:'1.ネガティブなフレーズが頭に浮かんだら、その思考をハッピーバースデーのメロディに乗せて歌う「おっれは～だーめー 人間～」など。　2.歌い終わったら自分の好きな曲に乗せて歌う。\
            ※できれば声に出して歌ってみて下さい。いっきにネガティブな思考があほらしく感じられ、ストレスの波が去っていくでしょう。「どんなネガティブな思考も、単なる言葉にすぎない」ことを実感してくことが肝心です。',effect:{b:0,m:0,s:0,st:2}},
            {behaver:'PCモニター法', title:'ネガティブな思考を想像上のPCモニタに表示させてみる方法です', explanation:'1.ネガティブなフレーズが頭に浮かんだら、目を閉じてPCの画面にシンプルなフォントで表示されている様子を想像する。 2.\
            表示さたフレーズのフォントや色を、まる文字や派手な黄色などにして変えて遊ぶ。 3.シンプルなテキストに戻し、文字の間にスペースを入れてみる 4.再びシンプルなテキストに戻し、文字列を画面の下の方に移動させ、カラオケの歌詞のように左から右へ色が変わっていく様子をイメージ。このエクササイズをやっていくと、文字列が自分とは関係ない\
            物と感じられ、ネガティブな思考に巻き込まれなくなります。',effect:{b:0,m:0,s:0,st:2}},
            {behaver:'ブリーズチェック', title:'「正しい呼吸」を体に教えてあげる方法です', explanation:'1.床などのかたい地面に横たわる。2.右手をお腹の上に置き、左手を胸の上に置く。3.のそ状態で呼吸を続ける。この時、ただしく\
            呼吸ができていれば、お腹に追い立てだけがリズミカルに上下し、胸に置いた手はほとんど動きません。この状態をキープするだけでもストレスは大きく下がります',effect:{b:0,m:0,s:0,st:2}},
            {behaver:'サンベイジング', title:'太陽を浴びましょう！', explanation:'6~20分ほど太陽の光を浴びましょう！それだけでビタミンDが生成され、メンタルの不調を防いでくれます。※浴びすぎ注意！お肌がほんのりピンク色になるまでがベストです！',effect:{b:0,m:0,s:0,st:0}},
            {behaver:'ネイチャーポルノ', title:'壮大な自然の写真を見ましょう。', explanation:'自然の写真を五分見ただけでもストレスの解消に役立つことが、オランダのアムステルダム自由大学の研究によって明らかにされています。インスタグラムなどで「natureporn」と検索してみましょう。',effect:{b:0,m:0,s:0,st:0}},
            {behaver:'ポジティブメモリーズ', title:'14秒間、楽しかった思い出を思い出だしてみてください。', explanation:'なんと、たったの14秒だけでストレス反応を大きく減らしてくれます。おもいだすきおくはなんでもOK \
            あなたがあたたかい気分になれる思い出を、とりあえず14秒間思い出してみましょう。それだけでも効果は絶大です。',effect:{b:0,m:0,s:0,st:0}},
            {behaver:'フォアヘッド・タッピング', title:'「おでこをたたく」', explanation:'1.　5本の指を広げて自分のおでこに置く。2.　5本の指で1秒ごとにおでこを軽くたたく。この作業をイライラやネガティブな思考が減るまでやってください。\
            人間の脳は限られた処理能力しか持たないため、おでこをたたくという単純な作業に意識を向けると、ネガティブな情報は追い出されて、ストレスがリセットされるのです。',effect:{b:0,m:0,s:0,st:0}},
            {behaver:'インターベンション・ブレスレット', title:'ブレスレットの付け替え', explanation:'1.簡単に取り外せるブレスレットをつける。2.何かイライラすることが起きたり、批判的な思考が浮かんだら、ブレスレットをもう片方の腕に付け替える。以上のステップを嫌なことが起きるたびに行ってください。自分の不快感に何かアクションを起こすことで、「今自分がストレスを感じた！」と気づくのがポイントですストレスの低下と、自尊心の向上が確認されています。',effect:{b:0,m:0,s:0,st:0}},
            {behaver:'シンプル・ソート・レコード', title:'ストレスを感じた時、どんな思考が浮かんだかを紙に書き込んでいきます', explanation:'1.「状況」あなたにストレスを与えた人、場所、時間など。\
            2.「感情」どんな感情を抱いたかを書き込んで、それぞれの割合をパーセントで採点します3.「思考またはイメージ」どんな思考やイメージが浮かんだかを書き込みます。書いていくうちにストレスの原因がはっきりと見えてきます。気づいただけでストレスは激減します。',effect:{b:0,m:0,s:0,st:0}},
            {behaver:'自動思考キャッチ', title:'自分の思考のバランスをチェックします', explanation:'自動思考とは、自分の意志とは関係なく、ふと頭の中に浮かんでくる思考やイメージのことです。自動思考がネガティブな方に偏っていると、嫌な気持ちになり、行動や身体に影響を与えます。\
            自動思考をチェックして、根拠のない決めつけをしていないか？自問してみましょう。',effect:{b:0,m:0,s:0,st:2}},
        ]);
        const r = "right";
        const l = "left";
        return {
            cardShuffle,
            bNumber,mNumber,sNumber,stressNumber,
            state,
            addPower,
            bPower,mPower,sPower,stress,
            dataVa,
            r,l,
        };
    },
})
</script>