<template>
<div class="w-full bg-[e0e0e0] totu-morphism rounded-lg">
    <div class="flex space-x-2 py-4 px-1 m2">
      <div v-for="(tab,index) in tabNames" class="flex justify-center w-1/6 h-12 totu-morphism hover:shadow-none text-center"
       @mouseover="mouseOverAction(tab)" :class="{'ou-morphism':isActive && current === tab}" :key="index">
        <a href="#" v-on:click="changeTab(tab)" class="pt-2">{{ tabs[tab] }}</a>
      </div>
    </div>
      
    <keep-alive>
      <component v-bind:is="currentTab"></component>
    </keep-alive>

</div>
</template>

<script>
import { defineComponent } from 'vue';
import Myself from './myself/Myself';
import Work from './work/Work';
import Study from './study/Study';
import Relation from './relation/Relation';
import Money from './money/Money';
import Health from './health/Health';
export default defineComponent ({
    name:'subject',
    components: {
        Myself,
        Work,
        Study,
        Relation,
        Money,
        Health,
    },
    setup() {
        const current = ref('Myself');
        const tabs = {
            'Myself':'自分を変える',
            'Work':'仕事',
            'Study':'勉強',
            'Relation':'人間関係',
            'Money':'お金',
            'Health':'健康',
        };
        const tabNames = computed(() => Object.keys(tabs));
        const currentTab = computed(() => `${current.value}`);
        const changeTab = (tab) => { current.value = tab };
        const isActive = ref(true)
        const mouseOverAction = (tab) =>  { 
            isActive.value = true;
            current.value = tab;
            };

        return {
            current,
            tabs,
            tabNames,
            currentTab,
            changeTab,
            mouseOverAction,
            isActive,
        }
    }
})
</script>