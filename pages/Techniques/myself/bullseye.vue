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
          <div class="w-[35rem] bg-[e0e0e0] totu-morphism" :key="s4">
          <div class="flex-col w-full p-4 obstacle">
              <div class="flex flex-col justify-center items-center">
                <div class="text-5xl">4.</div>
                <p type="text" class="">O</p>
              </div>
              <input v-model="memo_matrix" class="my-3 ou-morphism" />
          </div>
          </div>
        </flicking>

        <div class="flex justify-center items-center mb-7">
            <ul class="flex flex-wrap justify-around w-11/12 p-3 ou-morphism rounded-lg">
                <li v-for="(title, index) in titles" :key="'title'+index"  class="w-[43rem] p-3 rounded-lg border shadow-md dark:bg-gray-800 dark:border-gray-700">
                <questions>
                    <template v-slot:title>{{title.title}}</template>
                    <template v-slot:subtitle>{{title.subtitle}}</template>
                    <template v-slot:question>
                        <li v-for="que in ques[index]" :key="'ques'+index">{{que}}</li>
                    </template>
                </questions>
                </li>
            </ul>
        </div>

        <div class="flex flex-wrap justify-around">
            <div id="bulls_circle" class="w-[45rem] p-4 ou-morphism">
                    <div class="outcircle" id="cl_4" @drop.stop="dropList($event, 'A')" @dragover.prevent @dragenter.prevent>
                    <div class="mark" :class="valueColor(list.color)" :style="{ transform: `translate(${list.x}px, ${list.y}px) rotate(-45deg)` }" v-for="(list,index) in CategoryA" draggable="true" @mousedown.stop @dragstart="dragList($event, list.id,)"></div>

                    <div class="circle" id="cl_3" @drop.stop="dropList($event, 'B')" @dragover.prevent @dragenter.prevent>
                    <div class="mark" :class="valueColor(list.color)" :style="{ transform: `translate(${list.x}px, ${list.y}px) rotate(-45deg)` }" v-for="(list,index) in CategoryB" draggable="true" @mousedown.stop @dragstart="dragList($event, list.id,)"></div>

                    <div class="circle" id="cl_2" @drop.stop="dropList($event, 'C')" @dragover.prevent @dragenter.prevent>
                    <div class="mark" :class="valueColor(list.color)" :style="{ transform: `translate(${list.x}px, ${list.y}px) rotate(-45deg)` }" v-for="(list,index) in CategoryC" draggable="true" @mousedown.stop @dragstart="dragList($event, list.id,)"></div>

                    <div class="circle" id="cl_1" @drop.stop="dropList($event, 'D')" @dragover.prevent @dragenter.prevent>
                    <div id="cross"></div>
                    <div class="mark" :class="valueColor(list.color)" :style="{ transform: `translate(${list.x}px, ${list.y}px) rotate(-45deg)` }" v-for="(list,index) in CategoryD" draggable="true" @mousedown.stop @dragstart="dragList($event, list.id,)"></div></div></div></div></div>
            </div>
            <div class="flex w-[55rem]">
                <Flicking  class="ou-morphism">
                  <div class="w-[40rem] m-4 p-2 totu-morphism" :key="s5">
                      <div class="flex-col w-full mx-4 wish">
                            <div class="flex flex-col justify-center items-center p-2">
                              <div class="text-6xl">APM</div>
                              <p class="">W</p>
                            </div>
                      </div>
                  </div>
                  <div class="w-[40rem] m-4 p-2 totu-morphism" :key="s6">
                      <div class="flex-col w-full mx-4 wish">
                            <div class="flex flex-col justify-center items-center p-2">
                              <div class="text-6xl">APM</div>
                              <p class="">W</p>
                            </div>
                      </div>
                  </div>
                </Flicking>
            </div>
        </div>
</div>
</template>
<script lang="ts">
import Flicking from "@egjs/vue3-flicking";
import questions from '~/components/subject/myself/questions';
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
    name:'bullseye',
    components: {
        Flicking,
        questions,
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
        const lists = ref([
          {id: 1, name: 'Work', category: 'D', color:'blue', x:80,y:60},
          {id: 2, name: 'Hoby', category: 'D', color:'yellow', x:145,y:60},
          {id: 3, name: 'Relation', category: 'D', color:'green', x:80,y:120},
          {id: 4, name: 'Grow', category: 'D', color:'red', x:145,y:120},
        ]);
        const valueColor = (color) => {
          if (color === 'blue') {
            return "ws_check";
            }
          else if (color === 'yellow') {
            return "ph_check";
            }
          else if (color === 'green') {
            return "r_check";
            }
          return "gh_check";
          }

        const CategoryA = computed(() => lists.value.filter(list => list.category == 'A'));
        const CategoryB = computed(() => lists.value.filter(list => list.category == 'B'));
        const CategoryC = computed(() => lists.value.filter(list => list.category == 'C'));
        const CategoryD = computed(() => lists.value.filter(list => list.category == 'D'));
        const dragList = (event, valueID,) => {
          event.dataTransfer.effectAllowed = 'move';
          event.dataTransfer.dropEffect = 'move';
          event.dataTransfer.setData('value-id',valueID);
        }
        const dropList = (event, dropCategory) => {
          const valueID = event.dataTransfer.getData('value-id');
          const dropList = lists.value.find(list => list.id == valueID);
          dropList.category = dropCategory;
          dropList.x = event.offsetX;
          dropList.y = event.offsetY - 20;
          console.log(dropList.x, dropList.y)
        }

        const move = (e) => {
          console.log(e)
            x[index] = e.offsetX;
            y[index] = e.offsetY - 20;
        }
        const x = ref([0,0,0,0])
        const y = ref([0,0,0,0])


        
        const titles = ref([
            {title:"「仕事・勉強」", subtitle:"あなたの仕事やキャリア、学び、知識、スキルの発達などを意味します。"},
            {title:"「遊び・趣味」", subtitle:"仕事以外のプライベートな時間を、あなたがどのように過ごしたいかを書き出すパートです。"},
            {title:"「人間関係」", subtitle:"友人、同僚、家族、親戚、伴侶といった身近な人たちなどと、どのような関係を結んでいきたいかを改めて考えましょう。"},
            {title:"「成長・健康」", subtitle:"人としての成長や幸福感、自分の健康レベルなどをどのように育てていきたいかを考えてください。"},
        ]);
        const ques = ref([
            ["・自分の顧客やクライアント、同僚、上司などに対して、どのような存在でありたいでしょうか？","・仕事の場面において、どのような個性を生かしたいですか？","・あなたはどのようなスキルを身に着けたいですか？"],
            ["・あなたは、余暇の時間でどの遊びたいですか？どのようにリラックスしたいですか？","・どのような刺激を受けたいですか？どのような創造的なアクティビティをしたいですか？"],
            ["・あなたは、身近な親しい人たちとどのような関係性を気づきたいですか？","・親しい人たちと交流する中で、自分のどのような性質を成長させたいですか？"],
            ["・あなたは、自分の人格や精神性をどのように高めていきたいですか？","・今の健康状態や運動や食生活などで改善したいのはどこでしょうか？メンタルヘルスに何らかの改善点はないでしょうか？","・ライフスキルの中で身に着けたいものは何ですか？（コミュニケーションスキル、問題解決スキル、感情のコントロールスキル、正確な意思決定を行うスキルなど）"],
        ]);

        const l = "left"
        const c = "center"
        const r = "rifht"
        const r2 = "rifht2"
        const E = "explanation";
        const s1 = "s1";
        const s2 = "s2";
        const s3 = "s3";
        const s4 = "s4";
        const s5 = "s5";
        const s6 = "s6";
        const memo_action = "メモスペース";
        const memo_priority = "メモスペース";
        const memo_matrix = "メモスペース";

        return {
            show,route,
            titles,ques,
            move,x,y,
            CategoryA,CategoryB,CategoryC,CategoryD,
            dragList,dropList,valueColor,
            l,c,r,r2,
            E,s1,s2,s3,s4,s5,s6,
            memo_action,
            memo_priority,
            memo_matrix,
        }
    }
})
</script>
<style>
/*ブルズアイ設定*/

.ws_check{
  background-color: #2E4B71;
}
.ph_check{
  background-color: #FFB500;
}
.r_check{
  background-color: #BF1E33;
}
.gh_check{
  background-color: #2A9B50;
}

.mark{
  position: absolute;
	width: 10px; /* 縦棒の幅 */
	height: 50px; /* 縦棒の長さ */
    z-index: 10;
}
.mark::after{
  content: "";
	position: absolute;
	top: 20px; /* 横棒のy位置 */
	left: -20px; /* 横棒のX位置 */
	width: 50px; /* 横棒の長さ */
	height: 10px; /* 横棒の幅 */
    background-color: inherit;
    z-index: 10;
}
.outcircle{
  	position: relative;
   	border: solid #4169e1 8px;
  	border-radius: 50%;
    margin: auto;
}

.circle {
	position: relative;
	border: solid #4169e1 8px;
	border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    margin: auto;
}
.circle::before {	
	content: "";
	position: absolute;
	border: solid #4169e1 8px;
	border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin: auto;
}
#cl_1 {
	width: 250px;
	height: 250px;
  z-index:9;
}
#cl_1::before {	
	width: 160px;
	height: 160px;
  z-index:9;
}
#cl_2 {
	width: 430px;
	height: 430px;
  z-index:8;
}
#cl_2::before {	
	width: 340px;
	height: 340px;
  z-index:8;
}
#cl_3 {
	width: 610px;
	height: 610px;
  z-index:7;
}
#cl_3::before {	
	width: 520px;
	height: 520px;
  z-index:7;
}
#cl_4 {
	width: 700px;
	height: 700px;
  z-index:6;
}
#cl_4::before {	
  display: none;
}
#cross{
  position: absolute;
	width:8px; /* 縦棒の幅 */
	height: 695px; /* 縦棒の長さ */
 	background: #4169e1; /* 縦棒の色 */
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin: auto;
}
#cross::before{
  content: "";
	position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -345px;
	width: 695px; /* 横棒の長さ */
	height: 8px; /* 横棒の幅 */
	background: #4169e1; /* 横棒の色 */
}


</style>