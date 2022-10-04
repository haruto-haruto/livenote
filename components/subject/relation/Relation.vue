<template>
    <div class="m-3">
        <keep-alive>
          <component v-bind:is="currentTab"></component>
        </keep-alive>
    
        <ul  class="flex flex-wrap py-2 px-1">
          <li v-for="tab in tabNames" class="w-[24.4%] m-1 h-10 totu-morphism hover:shadow-none text-center" 
          @click="mouseOverAction(tab)" :class="{'ou-morphism':isActive && current === tab}" :key="tab">
          {{ tabs[tab] }}
          </li>
        </ul>
          
    </div>
    </template>
    
    <script>
    import { defineComponent } from 'vue';
    import e_otherself from './e_otherself';
    import e_selfConcept from './e_selfConcept';
    import e_weakness from './e_weakness';
    import e_openQuestion from './e_openQuestion';
    import e_thoughts from './e_thoughts';
    import comingsoon4 from '~/components/subject/comingSoon';
    import comingsoon5 from '~/components/subject/comingSoon';
    import comingsoon6 from '~/components/subject/comingSoon';
    import comingsoon7 from '~/components/subject/comingSoon';
    export default defineComponent ({
        name:'relation',
        components: {
            e_otherself,e_selfConcept,e_weakness,e_openQuestion,e_thoughts,comingsoon4,comingsoon5,comingsoon6,comingsoon7,
        },
        setup() {
            const current = ref('e_otherself');
            const tabs = {
                'e_otherself':'他己開示',
                'e_selfConcept':'セルフコンセプト',
                'e_weakness':'弱点開示',
                'e_openQuestion':'オープンクエスチョン3W1H',
                'e_thoughts':'感想・感情プラスα',
                'comingsoon4':'coming soon',
                'comingsoon5':'coming soon',
                'comingsoon6':'coming soon',
                'comingsoon7':'coming soon',
    
            };
            const tabNames = computed(() => Object.keys(tabs));
            const currentTab = computed(() => `${current.value}`);
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
                mouseOverAction,isActive
            }
        }
    })
    </script>