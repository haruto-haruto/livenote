<template>
    <div id="app" class="flex bg-[#e0e0e0] space-x-5 w-full h-full min-h-screen">
      <aside class="w-64" aria-label="Sidebar">
        <div class="overflow-y-auto py-4 px3 rounded-lg bg-[#e0e0e0] dark:bg-gray-800 totu-morphism" >
          <a href="#" class="flex items-center pl-2.5 ">
            <img src="~/assets/images/icon.png" class="h-6 mr-3 sm:h-7" alt="\Live note" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Live note</span>
          </a>
          <ul class="space-y-2">
            <li v-for="(tab,index) in tabNames" @mouseover="mouseOverAction(tab)" :class="{'ou-morphism':isActive && current === tab}" :key="index">
              <a href="#" v-on:click="changeTab(tab)" class="flex items-center p-2 text-base font-nomal hover:shadow-none text-glay-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-[#e0e0e0]">
              <img src="~/assets/images/icon.png" class="w-6 h-6 transition duration-75" />
              <span class="flex-1 ml-3 whitespace-nowrap">{{ tabs[tab] }}</span>
              </a>
            </li>
          </ul>
      </div>

      </aside>
      <main class="w-11/12" aria-label="Main">
      <keep-alive>
        <component v-bind:is="currentTab"></component>
      </keep-alive>
      </main>
    </div>
    </template>
    
    <script>
    import { defineComponent } from 'vue';
    import Separation from '~/components/subject/health/f_defusion/Separation';
    import Idea from '~/components/subject/health/f_defusion/Idea';
    import Helpful from '~/components/subject/health/f_defusion/Helpful';
    import Voice from '~/components/subject/health/f_defusion/Voice';
    import Thanks from '~/components/subject/health/f_defusion/Thanks';
    import Serious from '~/components/subject/health/f_defusion/Serious';
    export default defineComponent ({
        name:'e_defusion',
        components: {
            Separation,
            Idea,
            Helpful,
            Voice,
            Thanks,
            Serious,
        },
        setup() {     
            const current = ref('Separation');
            const tabs = {
                'Separation':'Separation',
                'Idea':'Idea',
                'Helpful':'Helpful',
                'Voice':'Voice',
                'Thanks':'Thanks',
                'Serious':'Serious',
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
    
    <style>
    
    </style>