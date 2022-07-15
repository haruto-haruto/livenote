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
import subValueList from '~/components/subject/myself/subValueList';
import subSixQuestion from '~/components/subject/myself/subSixQuestion';
import subBullsEye from '~/components/subject/myself/subBullsEye';
import comingsoon from '~/components/subject/comingSoon';
import comingsoon1 from '~/components/subject/comingSoon';
import comingsoon2 from '~/components/subject/comingSoon';
import comingsoon3 from '~/components/subject/comingSoon';
import comingsoon4 from '~/components/subject/comingSoon';
export default defineComponent ({
    name:'myself',
    components: {
        subValueList,
        subSixQuestion,
        subBullsEye,
        comingsoon,comingsoon1,comingsoon2,comingsoon3,comingsoon4,
    },
    setup() {
        const current = ref('subValueList');
        const tabs = {
            'subValueList':'価値観リスト',
            'subSixQuestion':'6つの質問',
            'subBullsEye':'ブルズ・アイ',
            'comingsoon':'coming soon',
            'comingsoon1':'coming soon',
            'comingsoon2':'coming soon',
            'comingsoon3':'coming soon',
            'comingsoon4':'coming soon',
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