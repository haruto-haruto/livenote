<template>
<div id="app">
  <flicking v-show="show">
      <div class="w-[35rem] bg-[e0e0e0] totu-morphism" :key="E">
      <div class="flex-col w-full p-4 wish">
          <div class="flex flex-col justify-center items-center p-2">
            <div class="text-6xl">WOOP</div>
            <p class="">W</p>
            </div>
          <input type="text" v-model="memo_wish" class="my-3 ou-morphism" :key="W"/>
      </div>
      </div>
      <div class="w-[35rem] bg-[e0e0e0] totu-morphism">
      <div class="flex-col w-full p-4 wish">
          <div class="flex flex-col justify-center items-center">
            <div class="text-5xl">1.願望/不安(wish)</div>
            <p class="">W</p>
            </div>
          <input type="text" v-model="memo_wish" class="my-3 ou-morphism"/>
      </div>
      </div>
      <div class="w-[35rem] bg-[e0e0e0] totu-morphism" :key="O">
      <div class="flex-col w-full p-4 outcome">
          <div class="flex flex-col justify-center items-center">
            <div class="text-5xl">2.成果(outcome)</div>
            <p type="text" class="">O</p>
          </div>
          <input v-model="memo_outcome" class="my-3 ou-morphism" />    
      </div>
      </div>
      <div class="w-[35rem] bg-[e0e0e0] totu-morphism" :key="o">
      <div class="flex-col w-full p-4 obstacle">
          <div class="flex flex-col justify-center items-center">
            <div class="text-5xl">3.障害(obstacle)</div>
             <p type="text" class="">O</p>
          </div>
          <input v-model="memo_obstacle" class="my-3 ou-morphism" />
      </div>
      </div>
      <div class="w-[35rem] bg-[e0e0e0] totu-morphism" :key="P">
      <div class="flex-col w-full p-4 plan">
          <div class="flex flex-col justify-center items-center">
            <div class="text-5xl">4.計画(plan)</div>
            <p type="text" class="">P</p>
          </div>
        <input v-model="memo_plan" class="my-3 ou-morphism" />
      </div>
      </div>
</flicking>
  <div class="w-full bg-[e0e0e0] totu-morphism rounded-lg">
      <WoopSheet></WoopSheet>
  </div>

 <div>
     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
         保存
      </button>
</div>
</div>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import {defineComponent} from 'vue';
import WoopSheet from "~/components/goal/woop/WoopSheet";

export default defineComponent({
    name:'woop',
    components: {
    Flicking: Flicking,
    WoopSheet
    },
    setup() {
        const show = ref(true); 
        const route = useRoute();
        onMounted(() => {
            if (route.query.prev === 'technique'){
                show.value = false;
             }
             else {
                show.value = true;
             }
        });

       
        const E = "explanation";
        const W = "W";
        const O = "O";
        const o = "o";
        const P = "P";
        const memo_wish = "メモスペース";
        const memo_outcome = "メモスペース";
        const memo_obstacle = "メモスペース";
        const memo_plan = "メモスペース";
    return {
        show,route,
        E,W,O,o,P,
        memo_wish,memo_outcome,memo_obstacle,memo_plan,
    }
  }
})
</script>

<style>
@import url("~/assets/css/main.css");
</style>