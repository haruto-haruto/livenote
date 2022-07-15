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
      <div class="w-[35rem] bg-[e0e0e0] totu-morphism" :key="A">
      <div class="flex-col w-full p-4 wish">
          <div class="flex flex-col justify-center items-center">
            <div class="text-5xl">1.</div>
            <p class="">W</p>
            </div>
          <input type="text" v-model="memo_action" class="my-3 ou-morphism"/>
      </div>
      </div>
      <div class="w-[35rem] bg-[e0e0e0] totu-morphism" :key="P">
      <div class="flex-col w-full p-4 outcome">
          <div class="flex flex-col justify-center items-center">
            <div class="text-5xl">2.</div>
            <p type="text" class="">O</p>
          </div>
          <input v-model="memo_priority" class="my-3 ou-morphism" />    
      </div>
      </div>
      <div class="w-[35rem] bg-[e0e0e0] totu-morphism" :key="M">
      <div class="flex-col w-full p-4 obstacle">
          <div class="flex flex-col justify-center items-center">
            <div class="text-5xl">3.</div>
             <p type="text" class="">O</p>
          </div>
          <input v-model="memo_matrix" class="my-3 ou-morphism" />
      </div>
      </div>
</flicking>
<div class="flex flex-wrap justify-center items-start ou-morphism space-x-7">
      <TodoList v-on:add-child="addData" v-on:remove-child="removeData"  v-on:change-child="changeData" class="w-1/3 min-w-1/3" /> 
      <div class="w-1/2 h-auto">
      <Bubble v-bind:bubble-data="dataSets" />
      </div>
</div>
</div>
</template>

<script lang="ts">
import Flicking from "@egjs/vue3-flicking";
import { defineComponent, ref } from 'vue';

import Bubble from "~/components/Bubble.vue";

export default defineComponent({
    name:'apm',
    components: {
        Flicking,
        Bubble,
    },
    setup() {
        const show = ref(true);
        const route = useRoute();
       
        const dataColor = ref(["#77CEFF","#0079AF","#123E6B","#97B0C4","#A5C8ED",])
        const dataSets = ref([]);

        const E = "explanation";
        const A = "A";
        const P = "P";
        const M = "M";
        const memo_action = "メモスペース";
        const memo_priority = "メモスペース";
        const memo_matrix = "メモスペース";

// dataValues.value = shuffle(dataValues.value);
        let index = ref(0);
        function addData(e) {
            dataSets.value.push({
                data: [{x:e.impact, y:e.effort, r:3}],
                label: e.todo,
                backgroundColor: dataColor.value[index.value]
            });
            index.value++
        }
        function removeData(e) {
            dataSets.value.splice(e, 1);
        }
        function changeData(e) {
            dataSets.value.splice(e.index, 1,
            {
                data: [{x:e.todos.impact, y:e.todos.effort, r:3}],
                label: e.todos.todo,
                backgroundColor: dataColor.value[e.index]
            });
        }
        onMounted(() => {
            if (route.query.prev === 'technique'){
                show.value = false;
             }
             else {
                show.value = true;
             }
        });
        return {
            show,route,
            addData,
            removeData,
            changeData,
            E,A,P,M,
            memo_action,
            memo_priority,
            memo_matrix,
            dataSets,
        };
    },
});
</script>

<style>
@import url("../node_modules/@egjs/vue3-flicking/dist/flicking.css");
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