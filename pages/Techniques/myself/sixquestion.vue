<template>
<div class="py-4">
<flicking class="py-4">
    <div class="flex flex-raw w-3/6" :key="l"  v-show="show">
        <div class="w-[35rem] bg-[e0e0e0] totu-morphism" :key="E">
            <div class="flex-col w-full p-4 wish">
                <div class="flex flex-col justify-center items-center p-2">
                <div class="text-6xl">APM</div>
                <p class="">W</p>
                </div>
            </div>
        </div>
    </div>
    <div :key="c">
        <ul class="grid grid-cols-2 gap-4 w-full p-3 ou-morphism rounded-lg">
          <li v-for="(title, index) in titles" :key="title" class="w-[43rem] p-3 rounded-lg border shadow-md dark:bg-gray-800 dark:border-gray-700">
            <questions>
              <template v-slot:title>{{title.title}}</template>
              <template v-slot:subtitle>{{title.subtitle}}</template>
              <template v-slot:question>
                <li v-for="que in ques[index]" :key="ques">{{que}}</li>
              </template>
            </questions>
          </li>
        </ul>
    </div>
</flicking>
</div>
</template>

<script>
import questions from '~/components/subject/myself/questions';
import Flicking from "@egjs/vue3-flicking";
import { defineComponent } from 'vue';


export default defineComponent({
    name:'sixquestion',
    components: {
        questions,
        Flicking,
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
        const titles = ref([
            {title:"Q１「家庭の価値観」", subtitle:"あなたはどのような価値観を持った家庭で育てられましたか？"},
            {title:"Q２「過去の出来事」", subtitle:"まだ学校に入る前や、中学・高校などの思春期のことを思い出してください。"},
            {title:"Q３「尊敬できる人」", subtitle:"職場やプライベートを思い出してください。"},
            {title:"Q４「尊敬できない人」", subtitle:"逆にあなたが尊敬できないのはどのような人でしょうか？"},
            {title:"Q５「最高のリーダー」", subtitle:"これまでの人生で、自分の上にいたリーダーや上司のことを思い浮かべてください。"},
            {title:"Q６「伝えたい行動」", subtitle:"あなたの子供を育てるにあたって、もっとも教えたいのはどんな行動でしょうか？"},
        ]);
        const ques = ref([
            ["・自分のいまの考え方には、それらの価値観が反映されてますか？","・それとも、両親や家庭から伝わった価値観とは違うところから思考が生まれていますか？"],
            ["・この時期に起きたことで、最も記憶に残っているような出来事や経験は何でしょうか？","・それらの経験は、今の自分の物の見方や考え方、行動などにどのような影響を与えているでしょうか？"],
            ["・そこでコミュニケーションをとる人たちの中で、あなたが最も尊敬できるのは誰ですか？","・その人たちのどんなところが尊敬できるのでしょうか？"],
            ["・その人を尊敬できないと思うのは、どのような理由があるからでしょうか？"],
            ["・その中で最高のリーダーは誰でしたか？","・または、最悪のリーダーは誰でしたか？","・あなたがそのように判断したのは、その人物がどんな行動をとったからですか？"],
            ["・もし子供がいない場合は、「自分の部下に伝えたくない行動とは？」と考えてみてください。"],
        ]);

        const l = "left";
        const c = "center";
        const E = "explanation";

        return {
            show,route,
            titles,
            ques,
            l,c,
            E,
        };
    }
})
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