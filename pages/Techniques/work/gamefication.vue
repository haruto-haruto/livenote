<template>
    <div>
        <insert1>
                <template v-slot:title>ゲーミフィケーション</template>
                <template v-slot:explanation>ゲーミフィケーションゲーミフィケーションゲーミフィケーション</template>
        </insert1>
        <Flicking >
            <div name="step&tips" :key="l" class="flex flex-col w-[90%] my-2 mr-3 totu-morphism rounded-lg ">
                <div name="steps" class="flex flex-col">
                    <div name="stepsTabs" class="flex items-center justify-around">
                        <div class="w-[33%] p-3 text-center text-4xl totu-morphism" @mouseover="changeSteps(1)">STEP1</div>
                        <div class="w-[33%] p-3 text-center text-4xl totu-morphism" @mouseover="changeSteps(2)">STEP2</div>
                        <div class="w-[33%] p-3 text-center text-4xl totu-morphism" @mouseover="changeSteps(3)">STEP3</div>
                    </div>
                    <div class="mb-8">
                        <div class="my-3 text-center text-8xl">{{ title[explanationCount] }}</div>
                        <transition>
                            <div class="text-center text-2xl">{{  explanation[explanationCount]  }}</div>
                        </transition>
                        <div name="button" class="flex justify-around">
                            <button class="w-auto h-auto p-3 text-xl rouded-xl shadow-md" @click="preExplanation()">前に</button>
                            <button class="w-auto h-auto p-3 text-xl rouded-xl shadow-md" @click="nextExplanation()">次へ</button>
                        </div> 
                    </div>
                    <div name="step1" v-show="show===1"></div>
                    <div name="step2" v-show="show===2">
                        <div class="flex flex-col mx-4 px-1 ou-morphism rounded-lg">
                            <div class="flex mt-1 text-center justify-between">
                                <div name="gameTeckTabs" v-for="(tab) in techTabs" class="flex w-[23%] h-[3rem] text-lg totu-morphism"><a href="#" v-on:click="changeTab(tab)" class="m-auto">{{ tab }}</a></div>
                            </div>
                        <swiper class="my-3 mx-0 py-3 p-3">
                            <SwiperSlide class="flex flex-col space-y-1 text-xl">
                                    <insert2>
                                    <template v-slot:title>壮大な意味</template>
                                    <template v-slot:explanation>え</template>
                                    </insert2>
                                <div class="flex flex-col space-y-1">
                                    <li v-for="tab in meaningTechs" class="relative w-auto h-auto py-3 px-6 mr-1 rounded-lg border shadow-md">
                                        <component v-bind:is="tab"></component>
                                        <input type="checkbox" :value="tab" v-model="wrriteTechs" class="absolute h-12 w-12 bottom-1 right-2">
                                    </li>  
                                </div>
                            </SwiperSlide>
                            <SwiperSlide class="flex flex-col space-y-1 text-xl">
                                    <insert2>
                                    <template v-slot:title>ダイナミクス</template>
                                    <template v-slot:explanation>え</template>
                                    </insert2>
                                <div class="flex flex-col space-y-1">
                                    <li v-for="tab in meaningTechs" class="relative w-auto h-auto p-3 mr-1 rounded-lg border shadow-md">
                                        <component v-bind:is="tab"></component>
                                        <input type="checkbox" :value="tab" v-model="wrriteTechs" class="absolute h-12 w-12 bottom-1 right-2">
                                    </li>  
                                </div>
                            </SwiperSlide>
                        </swiper>
                    </div>
                    </div>
                    <div name="step3" v-show="show===3">
                        <div class="flex flex-col">
                            <div class="flex flex-col space-y-3 ou-morphism">
                                <insert2>
                                    <template v-slot:title>Ⅰ実践</template>
                                    <template v-slot:explanation>え</template>
                                </insert2>
                                <insert2>
                                    <template v-slot:title>Ⅱ検証</template>
                                    <template v-slot:explanation>え</template>
                                </insert2>
                                <insert2>
                                    <template v-slot:title>Ⅲ修正</template>
                                    <template v-slot:explanation>え</template>
                                </insert2>
                            </div>
                        
                        </div>
                    </div>
                </div>
                <div name="border" class="border border-neutral-300 mt-16 mb-6"></div>
                <div name="tips">
                    <insert1>
                            <template v-slot:title>Tips</template>
                            <template v-slot:explanation>え</template>
                    </insert1>
                    <swiper class="flex m-5 p-5 ou-morphism">
                            <SwiperSlide>
                                <insert2>
                                    <template v-slot:title>ダイナミクス</template>
                                    <template v-slot:explanation>え</template>
                                </insert2>
                                <div class="flex flex-col mx-4 px-4 space-y-2 text-xl">
                                    <li v-for="(question,index) in dynamicsQue">{{index}}. {{ question }}</li>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <insert2>
                                    <template v-slot:title>メカニクス</template>
                                    <template v-slot:explanation>え</template>
                                </insert2>
                                <div class="flex flex-col mx-4 px-4 space-y-2 text-xl">
                                    <li v-for="(question,index) in mechanicsQue">{{index}}. {{ question }}</li>                          
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <insert2>
                                    <template v-slot:title>コンポーネント</template>
                                    <template v-slot:explanation>え</template>
                                </insert2>
                                <div class="flex flex-col mx-4 px-4 space-y-2 text-xl">
                                    <li v-for="(question,index) in componentsQue">{{index}}. {{ question }}</li>  
                                </div>
                            </SwiperSlide>
                    </swiper>
                </div>
            </div>
            <div name="write" :key="r" class="flex w-[95%] p-3 ">
                <div class="w-[60%]">
                    <div name="border" class="border border-neutral-300 mb-3"></div>
                <div name="goal&target" class="text-5xl mb-3 text-center">
                    <div class="mb-3">目標とプレイヤーの特徴</div>
                    <input class="w-full h-14">
                </div>
                <div name="achievement" class="text-5xl mb-6  text-center">
                    <div class="mb-3">成功指標</div>
                    <input class="w-full h-14">
                    <div name="border" class="border border-neutral-300 mt-10 mb-6"></div>
                </div>
                <div name="phase" class="flex flex-col space-y-11">
                    <div>
                        <div class="text-4xl mb-1">Ⅰ着手フェーズ </div>
                        <div class="text-xl ml-3 mb-3">~ステップ1で考えた目標に取りかかるために、プレイヤーはどんな行動や状態が必要なのか~</div>
                        <div class="grid grid-cols-2 gap-4 ml-5">
                            <div class="text-xl">成功指標<input class="w-full h-10"></div>
                            <div class="text-xl">フィードバック:<input class="w-full h-10"></div>
                            <div class="text-xl">期待行動:<input class="w-full h-10"></div>
                            <div class="text-xl">リワード（ご褒美）：<input class="w-full h-10"></div>
                        </div>    
                    </div>
                    <div>
                        <div class="text-4xl mb-3">Ⅱ入門フェーズ</div>
                        <div class="text-xl ml-3 mb-3">~ステップ1で考えた目標に取りかかるために、プレイヤーはどんな行動や状態が必要なのか~</div>
                        <div class="grid grid-cols-2 gap-4 ml-5">
                            <div class="text-xl">成功指標:<input class="w-full h-10"></div>
                            <div class="text-xl">フィードバック:<input class="w-full h-10"></div>
                            <div class="text-xl">期待行動:<input class="w-full h-10"></div>
                            <div class="text-xl">リワード（ご褒美）：<input class="w-full h-10"></div>
                        </div>    
                    </div>
                    <div>
                        <div class="text-4xl mb-3">Ⅲ中級フェーズ</div>
                        <div class="text-xl ml-3 mb-3">~ステップ1で考えた目標に取りかかるために、プレイヤーはどんな行動や状態が必要なのか~</div>
                        <div class="grid grid-cols-2 gap-4 ml-5">
                            <div class="text-xl">成功指標:<input class="w-full h-10"></div>
                            <div class="text-xl">フィードバック:<input class="w-full h-10"></div>
                            <div class="text-xl">期待行動:<input class="w-full h-10"></div>
                            <div class="text-xl">リワード（ご褒美）：<input class="w-full h-10"></div>
                        </div>    
                    </div>
                    <div>
                        <div class="text-4xl mb-3">Ⅳ上級フェーズ</div>
                        <div class="text-xl ml-3 mb-3">~ステップ1で考えた目標に取りかかるために、プレイヤーはどんな行動や状態が必要なのか~</div>
                        <div class="grid grid-cols-2 gap-4 ml-5">
                            <div class="text-xl">成功指標:<input class="w-full h-10"></div>
                            <div class="text-xl">フィードバック:<input class="w-full h-10"></div>
                            <div class="text-xl">期待行動:<input class="w-full h-10"></div>
                            <div class="text-xl">リワード（ご褒美）：<input class="w-full h-10"></div>
                        </div>    
                    </div>
                    <div name="border" class="border border-neutral-300 mt-16 mb-6"></div>
                </div>
                </div>
                <div name="wriiteGameTechs" class="flex flex-wrap w-[45%] ml-5 gap-1">
                    <div v-for="wrriteTeck in wrriteTechs" class=" lg:min-w-[23rem] md:min-w-[25rem] h-auto p-3 rounded-lg border shadow-md">
                        <component v-bind:is="wrriteTeck"></component>
                        <textarea class="w-full min-h-[15rem] mt-2 text-xl"></textarea>
                    </div>
                </div>
            </div>
        </Flicking>
    </div>
    
    
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import insert1 from "~/components/insert1";
import insert2 from "~/components/insert2";
import { defineComponent, ref } from 'vue';
import beginner from "~/components/subject/work/gamefication/meaning/beginner";
import elite from "~/components/subject/work/gamefication/meaning/elite";
import freeLunch from "~/components/subject/work/gamefication/meaning/freeLunch";
import hero from "~/components/subject/work/gamefication/meaning/hero";
import narative from "~/components/subject/work/gamefication/meaning/narative";

export default defineComponent({
    name:'gamefication',
    components: {
        Flicking,
        Swiper,
        SwiperSlide,
        insert1,insert2,
        beginner,elite,freeLunch,hero,narative,
    },
    setup() {
        const show = ref(1);
        const changeSteps = (id) => {
            console.log(id)
            show.value = id
        };
        const title = [
            "title",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",]
        const explanationCount = ref(0)
        const explanation = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
        ]
        const preExplanation = () => {
            if (explanationCount.value < 9 && explanationCount.value > 0)
            explanationCount.value -=1
        }
        const nextExplanation = () => {
            if (explanationCount.value < 8 && explanationCount.value >= 0)
            explanationCount.value +=1
        }

        const techTabs = ["壮大な意味","前進と達成感","創造性のフィードバック","所有欲","社会的な影響力","予測の不可能性","希少性による焦り","損失の回避"];
        const meaningTechs =["beginner","elite","freeLunch","hero","narative",];
        const progressTechs =["leaderBoard","point","progress","rockStar","symbol",];
        const creativityTechs =["booster","combination","unlock",];
        const ownershipTechs =["collection","customization","exchange","scratching","trigger",];
        const influenceTechs =["bragging","communityAnchor","group","menter","prod","treasure","trophy",];
        const predictTechs =["lottery","random","sudden",];
        const rarityTechs =["appointment","break","hanging","limit",];
        const lossTechs =["appeal","display","eraseChanceTimer","fomo","prison","sunkCost","timer",];

        const wrriteTechs = ref([]);

        const current = "ダイナミクス"
        const dynamicsQue = ["制約：何らかの制限やプレイを強制させる要素があるか？(タイムリミットがあるとか使える情報に限りがあるとか)","感情:好奇心、競争心、不満、幸福感などを煽る要素があるか？",
        "物語:一貫性のあるストーリーがあるか？（このゲームを達成することで私は一段上に行けるのだ！みたいな）","プログレッション:プレイヤー自身が細かく成長を実感できる要素があるか？","関係性:仲間意識、地位、利他主義などの感情を生み出すような、社会や仲間とふれあう要素があるか？",]
        const mechanicsQue = ["チャレンジ:パズルやミッションなど、プレイヤーの努力が必要な課題があるか？","チャンス:ランダムで報酬がもらえたるような要素はあるか？","競争:一方が勝って他方が負けるような要素はあるか？",
        "協力:プレイヤー同士が協力して目的を達成するような要素はあるか？","フィードバック:プレイヤーがどのように行動しているかを把握できるような情報は提供できるか？","アイテム獲得:便利なアイテムを入手できたり、収集可能なアイテムは用意されているか？",
        "報酬:何らかの行動や成果に対する利益は細かく設定されているか？","トランザクション:プレイヤー同士がやり取りを行えるような仕組みはあるか？","ターン:複数のプレイヤーが参加するゲームの場合は、全プレイヤーが交互に参加できるか？",
        "勝利状態:プレイヤーの勝利条件と敗北条件は明確になっているか？",];
        const componentsQue = ["アチーブメント:明確な目標が細かく設定されているかどうか？（最終ゴールだけじゃなくて、途中途中に細かいゴールが設定されているかどうか）","アバター:プレイヤーのキャラクターを視覚的に表現する要素があるか？",
        "バッジ:プレイヤーの実績を視覚的に表現する要素があるか？","ボス戦:レベルの頂点に位置する、特に難しい課題は設定されているか？","コレクション:アイテムやバッジ集めなど、収集欲を刺激する要素はあるか？",
        "コンバット:ボス戦より手強くはないが、短期間で小さな課題が何度も出てくるか？","コンテンツアンロック:目的を達成した時にのみ得られる要素があるか？","ギフティング:他のプレイヤーとリソースを共有する機会があるか？",
        "リーダーボード:プレイヤーの進行状況や達成度を視覚的に表示できる仕組みがあるか？","レベル:プレイヤーの進行状況を示す段階が設定されているか？","ポイント:ゲームの進行状況を数値で表すことができるか？",
        "クエスト:具体的な目的と報酬が設定されたチャレンジはあるか？","ソーシャルグラフ:グループで行うゲームの場合に、ゲーム内でのプレイヤー同士の関係性を表す仕組みがあるか？",
        "チーム:共通の目的のために仲間と協力し合えるような仕組みがあるか？","バーチャルグッズ:プレイヤーにとってなんらかの価値を持つ資産が残るか？（レアアイテムとか、レアなアチーブメントとか）",
        "無限性:「いま遊びたい！」と思ったときに、すぐにプレイできる環境は整っているか？","プログレッションバー:ミッションの達成度を数値または視覚的に表現する仕組みがあるか？",
        "攻略の道筋:ミッション達成に向けて、いくつかの攻略の道筋が用意されているか？（なんも道筋がないと難易度が高すぎるので）","時間制限:時間との戦いは用意されているか？","有形の報酬:ゲームの進み具合を、現実のお金、商品、サービスに変換できるか？",
        "負のスコア:なんらかのミスや失敗があったときに、ペナルティが用意されているか？",];

        const r = "right";
        const l = "left";
        return {
            show,changeSteps,title,explanationCount,explanation,preExplanation,nextExplanation,
            current,
            techTabs,meaningTechs,progressTechs,creativityTechs,ownershipTechs,influenceTechs,predictTechs,rarityTechs,lossTechs,
            wrriteTechs,
            dynamicsQue,mechanicsQue,componentsQue,
            r,l
        }
    }
})
</script>
<style>

</style>