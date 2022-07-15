<template>
<div class="m-3">
    <keep-alive>
      <component v-bind:is="currentTab"></component>
    </keep-alive>

    <ul  class="flex flex-wrap py-2 px-1">
      <li v-for="tab in tabNames" class="w-[24.4%] m-1 h-10 totu-morphism hover:shadow-none text-center" 
      @mouseover="mouseOverAction(tab)" :class="{'ou-morphism':isActive && current === tab}" :key="tab">
      {{ tabs[tab] }}
      </li>
    </ul>
      
</div>
</template>

<script>
import { defineComponent } from 'vue';
import comingsoon from '~/components/subject/comingSoon';
import comingsoon1 from '~/components/subject/comingSoon';
import comingsoon2 from '~/components/subject/comingSoon';
import comingsoon3 from '~/components/subject/comingSoon';
import comingsoon4 from '~/components/subject/comingSoon';
import comingsoon5 from '~/components/subject/comingSoon';
import comingsoon6 from '~/components/subject/comingSoon';
import comingsoon7 from '~/components/subject/comingSoon';
export default defineComponent ({
    name:'money',
    components: {
        comingsoon,comingsoon1,comingsoon2,comingsoon3,comingsoon4,comingsoon5,comingsoon6,comingsoon7,
    },
    setup() {
        const current = ref('comingsoon');
        const tabs = {
            'comingsoon':'coming soon',
            'comingsoon1':'coming soon',
            'comingsoon2':'coming soon',
            'comingsoon3':'coming soon',
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