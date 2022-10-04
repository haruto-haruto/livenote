<template>
    <div class="flex flex-col">
        <flicking v-show="show" class="p-4">
          <div class="w-[35rem] bg-[e0e0e0] totu-morphism" :key="E">
          <div class="flex-col w-full p-4 wish">
              <div class="flex flex-col justify-center items-center p-2">
                <div class="text-6xl">APM</div>
                <p class="">W</p>
              </div>
          </div>
          </div>
          <div class="w-[35rem] bg-[e0e0e0] totu-morphism" :key="s1">
          <div class="flex-col w-full p-4 wish">
              <div class="flex flex-col justify-center items-center">
                <div class="text-5xl">1.</div>
                <p class="">W</p>
              </div>
              <input type="text" v-model="memo_action" class="my-3 ou-morphism"/>
          </div>
          </div>
          <div class="w-[35rem] bg-[e0e0e0] totu-morphism" :key="s2">
          <div class="flex-col w-full p-4 outcome">
              <div class="flex flex-col justify-center items-center">
                <div class="text-5xl">2.</div>
                <p type="text" class="">O</p>
              </div>
              <input v-model="memo_priority" class="my-3 ou-morphism" />    
          </div>
          </div>
          <div class="w-[35rem] bg-[e0e0e0] totu-morphism" :key="s3">
          <div class="flex-col w-full p-4 obstacle">
              <div class="flex flex-col justify-center items-center">
                <div class="text-5xl">3.</div>
                <p type="text" class="">O</p>
              </div>
              <input v-model="memo_matrix" class="my-3 ou-morphism" />
          </div>
          </div>
        </flicking>
            <div class="flex flex-wrap justify-around p-5 ou-morphism">
                <ul class="flex flex-col w-[34rem] p-3 totu-morphism rounded-xl">
                    <li v-for="(name, index) in valueName1" :key="'li1'+index" @mouseover="mouseOverAction(name)" @mouseleave="mouseLeaveAction" class="flex ml-3 mb-1 pr-3 text-xl hover:text-2xl hover:bg-slate-200">
                        <div>{{ list1[name] }}</div>
                        <div :ref="setItemRef1" class="ml-1"></div>
                        <div v-show="hoverFlag && name === hoverName" class="flex space-x-7 ml-auto">
                            <input type="radio" :id="'li1'+index" :name="name" @click="doubleCircle(index, 'li1',name)" style="transform:scale(3);" />
                            <input type="radio" :id="'li1'+index" :name="name" @click="circle(index, 'li1',name)" style="transform:scale(3);" />
                            <input type="radio" :id="'li1'+index" :name="name" @click="cross(index, 'li1',name)" style="transform:scale(3);" />
                        </div>
                    </li>
                </ul>
                <ul class="flex flex-col w-[34rem] p-3 totu-morphism rounded-xl">
                    <li v-for="(name, index) in valueName2" :key="'li2'+index" @mouseover="mouseOverAction(name)" @mouseleave="mouseLeaveAction" class="flex ml-3 mb-1 pr-3 text-xl hover:text-2xl hover:bg-slate-200">
                        <div>{{ list2[name] }}</div>
                        <div :ref="setItemRef2"  class="ml-1"></div>
                        <div v-show="hoverFlag && name === hoverName" class="flex space-x-7 ml-auto">
                            <input type="radio" :id="'li2'+index" :name="name" @click="doubleCircle(index, 'li2',name)" style="transform:scale(3);" />
                            <input type="radio" :id="'li2'+index" :name="name" @click="circle(index, 'li2',name)" style="transform:scale(3);" />
                            <input type="radio" :id="'li2'+index" :name="name" @click="cross(index, 'li2',name)" style="transform:scale(3);" />
                        </div>
                    </li>
                </ul>
                <ul class="flex flex-col w-[34rem] p-3 totu-morphism rounded-xl">
                    <li v-for="(name, index) in valueName3" :key="'li3'+index" @mouseover="mouseOverAction(name)" @mouseleave="mouseLeaveAction" class="flex ml-3 mb-1 pr-3 text-xl hover:text-2xl hover:bg-slate-200">
                        <div>{{ list3[name] }}</div>
                        <div :ref="setItemRef3"  class="ml-1"></div>
                        <div v-show="hoverFlag && name === hoverName" class="flex space-x-7 ml-auto">
                            <input type="radio" :id="'li3'+index" :name="name" @click="doubleCircle(index, 'li3',name)" style="transform:scale(3);" />
                            <input type="radio" :id="'li3'+index" :name="name" @click="circle(index, 'li3',name)" style="transform:scale(3);" />
                            <input type="radio" :id="'li3'+index" :name="name" @click="cross(index, 'li3',name)" style="transform:scale(3);" />
                        </div>
                    </li>
                </ul>
            </div>
        <div class="flex flex-raw  mb-5 p-4 ou-morphism">
            <div class="w-1/2 totu-morphism p-7">
                <div class="text-center text-4xl mb-3">価値観リスト</div>
                <draggable class="dragArea list-group w-full" :list="ranks">
                    <div class="flex list-group-item bg-gray-300 m-1 p-3 rounded-md text-center text-xl" v-for="(rank, index) in ranks" :key="rank">
                        <div>{{ index+1 }}位</div>
                        <div @click="changeConcept(index)" class="m-auto"> {{ ranks[index] }}</div>
                        <teleport to="#concept">
                          <keep-alive>
                            <NewConcept v-if="valueShow===index">
                              <template v-slot:title>{{rank}}</template>
                            </NewConcept>
                          </keep-alive>
                        </teleport>
                    </div>
                </draggable>
           </div>
           <div id="concept"  class="w-1/2 h-[37rem]"></div>
        </div>
    
        <button class="block w-2/3 h-[5rem] m-auto totu-morphism">fin</button>
    </div>
    </template>
    
    <script lang="ts">
    import Flicking from "@egjs/vue3-flicking";
    import { computed, defineComponent, ref } from 'vue';
    import { VueDraggableNext } from 'vue-draggable-next'
    import NewConcept from "~/components/subject/myself/newConcept";
    
    export default defineComponent({
        name:'valuelist',
        components: {
        Flicking,
        draggable: VueDraggableNext,
        NewConcept,
    },
        setup() {
            const show = ref(true);
            onMounted(() => {
                if (route.query.prev === 'technique'){
                    show.value = false;
                 }
                 else {
                    show.value = true;
                 }
            });
    
            const route = useRoute();
            const valueName1 = computed(() => Object.keys(list1));
            const valueName2 = computed(() => Object.keys(list2));
            const valueName3 = computed(() => Object.keys(list3));
    
            let hoverFlag = ref(false);
            let hoverName = ref("");
            const mouseOverAction = (name) =>  { 
                hoverFlag.value = true;
                hoverName.value = name;
                };
            const mouseLeaveAction = () => { hoverFlag.value = false };
    
    
            const doubleCircle = (index, listNumber, name) => {
                if (listNumber === 'li1') {
                    itemRefs1.value[index].innerHTML = "◎"
                    if (!ranks.value.includes(list1[name]))
                        ranks.value.push(list1[name]);
                    }
                else if (listNumber === 'li2') {
                    itemRefs2.value[index].innerHTML = "◎"
                    if (!ranks.value.includes(list2[name]))
                        ranks.value.push(list2[name]);
                }
                else {
                    itemRefs3.value[index].innerHTML = "◎"
                    if (!ranks.value.includes(list3[name]))
                        ranks.value.push(list3[name]);
                }
            };
            const circle = (index, listNumber,name) => {
                if (listNumber === 'li1') {
                    itemRefs1.value[index].innerHTML = "◯"
                    ranks.value = ranks.value.filter(item => (item.match(list1[name])) == null);
                    }
                else if (listNumber === 'li2') {
                    itemRefs2.value[index].innerHTML = "◯"
                    ranks.value = ranks.value.filter(item => (item.match(list2[name])) == null);
                }
                else {
                    itemRefs3.value[index].innerHTML = "◯"
                    ranks.value = ranks.value.filter(item => (item.match(list3[name])) == null);
                }
                };
            const cross = (index, listNumber,name) => {
                if (listNumber === 'li1') {
                    itemRefs1.value[index].innerHTML = "✕"
                    ranks.value = ranks.value.filter(item => (item.match(list1[name])) == null);
                    }
                else if (listNumber === 'li2') {
                    itemRefs2.value[index].innerHTML = "✕"
                    ranks.value = ranks.value.filter(item => (item.match(list2[name])) == null);
                }
                else {
                    itemRefs3.value[index].innerHTML = "✕"
                    ranks.value = ranks.value.filter(item => (item.match(list3[name])) == null);
                }
                };
            
    
            const itemRefs1 = ref<HTMLDivElement[]>([]);
            const itemRefs2 = ref<HTMLDivElement[]>([]);
            const itemRefs3 = ref<HTMLDivElement[]>([]);
            const setItemRef1 = (el: any) => {
                if (el && !itemRefs1.value.includes(el)) {
                    itemRefs1.value.push(el);
                    };
                };
            const setItemRef2 = (el: any) => {
                if (el && !itemRefs2.value.includes(el)) {
                    itemRefs2.value.push(el);
                    };
                };
            const setItemRef3 = (el: any) => {
                if (el && !itemRefs1.value.includes(el)) {
                    itemRefs3.value.push(el);
                    };
                };
            onBeforeUpdate(() => {
                itemRefs1.value = [];
                itemRefs2.value = [];
                itemRefs3.value = [];
                });
                
            let ranks = ref([]);
            const valueShow = ref(0);
            const changeConcept = (index) => {
                valueShow.value = index;
                };
    
    
            const list1 = {
                "aibo":"愛慕：誰かに愛を与える",
                "gennzai":"現在：今の瞬間に集中して生きる",
                "jukutatu":"熟達：いつもの仕事・作業に習熟する",
                "tyouai":"寵愛：親しい人から愛される",
                "yohima":"余暇：自分の時間をリラックスして楽しむ",
                "heiann":"平安：自分の内面の平和を維持する",
                "kinnbenn":"勤勉：自分の仕事に一生懸命取り組む",
                "kennsinn":"献身：誰かに奉仕する",
                "seiai":"性愛：活動的で満足のいく性生活を送る",
                "seigi":"正義：すべての人を公平に扱う",
                "sinnmitu":"親密：プライベートな体験を他人とシェアする",
                "tisiki":"知識：価値ある知識を学ぶ、または生み出す",
                "anntei":"安定：いつも一定して変化のない人生を送る",
                "gimu":"義務：自分の義務と責任を果たす",
                "kodoku":"孤独：他人から離れて1人でいられる時間を空間を保つ",
                "kouhunn":"興奮：スリルと刺激に満ちた人生を送る",
                "kazoku":"家族：幸福で愛に満ちた家庭を作る",
                "kyoutyou":"協調：他者と協力して何かをする",
                "meisei":"名声：有名になって存在を認められる",
                "reigi":"礼儀：他者に対して誠実で礼儀正しく接する",
                "souzou":"創造：新しくて斬新なアイデアを生む",
                "sinnrai":"信頼：信用があって頼れる人間になる",
                "seisinn":"精神：精神的に成長し成熟する",
                "teisetu":"貞節：パートナーにウソをつかず誠実に生きる",
                "tannjunn":"単純：シンプルでミニマムな暮らしをする",
                "tyouwa":"調和：周囲の環境と調和しながら生きる",
            };
            const list2 = {
                "boukenn":"冒険：新しくてワクワクする体験をする",
                "denntou":"伝統：過去から受け継がれてきらパターンを尊重する",
                "hannkou":"反抗：権威やルールに疑問を持って挑む",
                "hairyo":"配慮：他人を気づかって世話をする",
                "juyou":"受容：ありのままの自分を受け入れてもらう",
                "juunann":"柔軟：新たな環境にも簡単になじむ",
                "kannyou":"寛容：自分と違う存在を尊重して受け入れる",
                "kaihou":"開放：新たな体験、発想、選択肢に心を開く",
                "miryoku":"魅力：身体的な魅力を保つ",
                "seikaku":"正確：自分の意見や信念を正しく伝える",
                "tekido":"適度：過剰を避けてほどよいところを探す",
                "tannkonn":"単婚：唯一の愛し合える相手を見つける",
                "tassei":"達成：何か重要なことを達成する",
                "tairyoku":"体力：丈夫で強い身体を保つ",
                "biteki":"美的：身の回りの美しいものを味わう",
                "higo":"庇護：他者の面倒を見る",
                "jounetu":"情熱：何らかの発想、活動、人々に深い感情を抱く",
                "kairaku":"快楽：良い気分になる",
                "kennryoku":"権力：他人をコントロールする",
                "kenni":"権威：他者に対して責任を持って指導する",
                "ninnki":"人気：多くの人に好かれる",
                "tyousenn":"挑戦：難しい仕事や問題に取り組む",
                "titujo":"秩序：整理されて秩序のある人生を送る",
                "yurusi":"許し：他人を許しながら生きる",
                "yuujou":"友情：親密で助け合える友人を作る",
                "yuraku":"愉楽：遊んで楽しむ",
                "ziti":"自治：人任せにしないで自分で決める",
            };
            const list3 = {
                "mokuteki":"目的：人生の意味や方向性を定める",
                "gouri":"合理：理性と論理に従う",
                "gennzitu":"現実：現実的、実践的に振る舞う",
                "sekininn":"責任：責任を持って行動する",
                "kikenn":"危険：リスクをとってチャンスを手に入れる",
                "kanndai":"寛大：自分の物を他人に与える",
                "sinnzitu":"真実：自分が正しいと思うとおりに行動する",
                "sinnkyou":"信教：自分を超えた存在の意思を考える",
                "seityou":"成長：変化と成長を維持する",
                "kennkou":"健康：穏やかで体調良く生きる",
                "hennka":"変化：変化に富んだバラエティ豊かな人生を送る",
                "kaiteki":"快適：喜びに満ちた快適な人生を送る",
                "seiyaku":"誓約：絶対に破れない約束や誓いを結ぶ",
                "ziai":"慈愛：他者を心配して助ける",
                "koukenn":"貢献：世界の役に立つことをする",
                "yuueki":"有益：他人の役に立つことをする",
                "syouziki":"正直：ウソをつかず正直に生きる",
                "kibou":"希望：ポジティブで楽観的に生きる",
                "kennsonn":"謙遜：地味で控えめに生きる",
                "warai":"笑い：人生や世界のユーモラスな側面を見る",
                "dokuritu":"独立：他者に依存しないで生きる",
                "rennai":"恋愛：興奮して燃えるような恋をする",
                "annzenn":"安全：安心感を得る",
                "judaku":"受諾：ありのままの自分を受け入れる",
                "zisei":"自制：自分の行動を自分でコントロールする",
                "zisonn":"自尊：自分に自信を持つ",
                "zisi":"自知：自分について深い理解を持つ"
            };
            const l = "left"
            const c = "center"
            const r = "rifht"
            const r2 = "rifht2"
            const E = "explanation";
            const s1 = "s1";
            const s2 = "s2";
            const s3 = "s3";
            const s4 = "s4";
            const va1 = "value1";
            const va2 = "value2";
            const va3 = "value3";
            const memo_action = "メモスペース";
            const memo_priority = "メモスペース";
            const memo_matrix = "メモスペース";
    
            return {
                show,route,
                mouseOverAction,
                mouseLeaveAction,
                hoverFlag,hoverName,
                doubleCircle,circle,cross,
                itemRefs1,itemRefs2,itemRefs3,
                setItemRef1,setItemRef2,setItemRef3,
                valueName1,valueName2,valueName3,
                ranks,
                changeConcept,
                valueShow,
                list1,list2,list3,
                l,c,r,r2,
                E,s1,s2,s3,s4,
                va1,va2,va3,
                memo_action,
                memo_priority,
                memo_matrix,
            };
        },
    });
    </script>
    
    <style>
    
    @import url("~/node_modules/@egjs/vue3-flicking/dist/flicking.css");
    .is-size-1 {
        font-size: 3rem!important;
    }
    .has-background-primary {
        background-color: #f2a65e!important;
    }
    .has-text-white {
        color: #fff!important;
    }
    .flicking-camera>* {
        flex-shrink: 0;
    }
    .flicking-panel {
        border-radius: 5px;
        height: 700px;
        margin-bottom: 10px;
        margin-right: 10px;
        padding: 30px 20px;
        position: relative;
        width: 80%;
    }
    .flicking-index {
        min-width: 60px;
        position: relative;
        text-align: center;
    }
    .flicking-index:before {
        border-bottom: 2px solid #fff;
        bottom: 0.5rem;
        content: "";
        left: 10%;
        position: absolute;
        width: 80%;
    }
    .flicking-index:after {
        bottom: -1.2rem;
        font-size: 1rem;
        font-weight: 700;
        left: 0;
        position: absolute;
        text-align: center;
        width: 100%;
    }
    .explanation .flicking-index:after {
        content: "explanation"
    }
    .action .flicking-index:after {
        content: "action"
    }
    .priority .flicking-index:after {
        content: "priority"
    }
    .matrix .flicking-index:after {
        content: "matrix"
    }
    * {
        box-sizing: border-box;
    }
    </style>