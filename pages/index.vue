<template>
<div id="app" class="flex bg-[#e0e0e0] space-x-5 w-full h-full min-h-screen">
  <aside class="w-64" aria-label="Sidebar">
    <div class="overflow-y-auto py-4 px3 rounded-lg bg-[#e0e0e0] totu-morphism" >
      <a href="#" class="flex items-center pl-2.5 ">
        <img src="~/assets/images/icon.png" class="h-6 mr-3 sm:h-7" alt="\Live note" />
        <span class="self-center text-xl font-semibold whitespace-nowrap">Live note</span>
      </a>
      <ul class="space-y-2">
        <li v-for="tab in tabNames">
          <a href="#" v-on:click="onclick(tab)" class="flex items-center p-2 text-base font-nomal text-glay-900 rounded-lg bg-[#e0e0e0]">
          <img src="~/assets/images/icon.png" class="w-6 h-6 transition duration-75" />
          <span class="flex-1 ml-3 whitespace-nowrap">{{ tabs[tab] }}</span>
          </a>
        </li>
      </ul>
      <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 ">
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 group">
               <svg class="flex-shrink-0 w-5 h-5  text-gray-500 transition duration-75" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"></path></svg>
               <span class="ml-4">Upgrade to Pro</span>
            </a>
         </li>
         <li>
            <a href="/home" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 group">
               <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
               <span class="ml-3">Documentation</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 group">
               <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
               <span class="ml-3">Help</span>
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
import Goal from '../components/goal/Goal.vue'
import Subject from '../components/subject/Subject.vue'
import Condition from '../components/condition/Condition.vue'

export default defineComponent({
  name:'APP',
  components: {
    Goal,
    Subject,
    Condition,
  },
  methods: {
    onclick(tab) {
      this.current = tab;
    },
  },
  computed: {
    tabNames() {
      return Object.keys(this.tabs);
    },
    currentTab() {
      return `${this.current}`;
    }
  },
  data() {
    return {
      current: 'goal',
      tabs: {
        'goal': 'Goal',
        'subject': 'Subject',
        'condition': 'Condition',
      },
    };
  },

});

</script>
<style>
@import url("../assets/css/main.css");
</style>