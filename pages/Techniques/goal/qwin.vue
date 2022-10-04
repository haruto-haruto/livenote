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
    <TodoWin />
</div>

</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import { defineComponent} from 'vue';
import TodoQwin from '~/components/goal/qwin/TodoQwin'

export default defineComponent({
    name:'qwin',
    components: {
        Flicking,
        TodoQwin,
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
        let showWin = 0;
        const E = "E";
        const s1 = "s1";
        const s2 = "s2";
        const s3 = "s3";
        const l = "left"
        const c = "center"
        const memo_action = "メモスペース";
        const memo_priority = "メモスペース";
        const memo_matrix = "メモスペース";

        return {
        show,route,
        showWin,
        E,s1,s2,s3,
        memo_action,
        memo_priority,
        memo_matrix,
        }
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