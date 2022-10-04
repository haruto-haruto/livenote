<template>
      <div class="flex-col w-[95%] h-full ou-morphism">
        <div class="flex">
          <div class="h-60 w-[30%] bg-cover ml-2 my-auto rounded-full totu-morphism" 
          style="background-image: url('/assets/images/woop.png')">
          </div>
          <div class="w-[60%] rounded-b lg:rounded-b-none lg:rounded-r p-4 pl-2 flex flex-col justify-between leading-normal">
              <nuxt-link to="/woop" class="w-full pt-4">
                <div class="totu-morphism p-4 ">
                <div class="pl-5 pt-2 text-2xl">目標達成率を確実に高める</div>
                <div class="text-8xl text-center tracking-tighter align-middle">W O O P</div>
                </div>
                <p class="p-2 pl-3 mt-4 leading-6 totu-morphism">WOOP（ウープ）は手軽かつ、強力なテクニックです。<br>
                   たった４ステップで、目標達成率が200%上がったという研究があります。<br>

                </p>
                
              </nuxt-link>
          </div>
        </div>
  <div id="container" class="w-full bg-[e0e0e0] totu-morphism rounded-lg">
    <ul class="flex space-x-2 py-4 px-1 m2">
      <li v-for="tab in tabNames" :key="tab" class="flex justify-center w-1/2 h-12 totu-morphism hover:shadow-none text-center"
       @mouseover="mouseOverAction(tab)" :class="{'ou-morphism':isActive && current === tab}">
        <a href="#" v-on:click="changeTab(tab)" class="pt-2">{{ tabs[tab] }}</a>
      </li>
    </ul>
  
    <keep-alive>
      <component v-bind:is="currentTab"></component>
    </keep-alive>
</div>
</div>
</template>

<script>
import { defineComponent } from 'vue';
import Flicking from "@egjs/vue3-flicking";
import Profile from './Profile.vue';
import Technique from './Technique.vue';
export default defineComponent ({
    name:'Liver',
    components: {
    Flicking,
    Profile,
    Technique,
    },
    setup() {
      const changeTab = (tab) => {
        current.value = tab
        };
      const tabNames = computed(() => {
        return Object.keys(tabs.value);
        });
      const currentTab = computed(() => {
         return `${current.value}`;
         });
        const current = ref('profile');
        const tabs = ref({
          'profile': 'Profile',
          'technique': 'Technique',
        });
        const isActive = ref(true)
        const mouseOverAction = (tab) =>  { 
            isActive.value = true;
            current.value = tab;
            };

        return {
          changeTab,
          tabNames,
          currentTab,
          current,
          tabs,
          mouseOverAction,isActive,
        }
    }
})
</script>