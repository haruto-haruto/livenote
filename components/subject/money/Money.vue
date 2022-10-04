<template>
<div class="m-3">

      <component v-bind:is="currentTab"></component>


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
import test from '~/components/subject/money/moneyscript/e_test';
import first from '~/components/subject/money/moneyscript/e_first';
import iknowishould from '~/components/subject/money/moneyscript/e_iknowishould';
import story from '~/components/subject/money/moneyscript/e_story';
import dlos from '~/components/subject/money/moneyscript/e_dlos';
import grievance from '~/components/subject/money/moneyscript/e_grievance';
import map from '~/components/subject/money/moneyscript/e_map';
import powerment from '~/components/subject/money/moneyscript/e_powerment';
import financial from '~/components/subject/money/moneyscript/e_financial';
import mantra from '~/components/subject/money/moneyscript/e_mantra';
export default defineComponent ({
    name:'money',
    components: {
        test,first,iknowishould,story,dlos,grievance,map,powerment,financial,mantra,
    },
    setup() {
        const current = ref('test');
        const tabs = {
            "test":"マネースクリプト診断テスト","first":"ファーストステップ","iknowishould":"I know I should","story":"マネーストーリー","dlos":"ロス認識トレーニング","grievance":"マネーグリーバンス",
            "map":"マネーマップ","powerment":"マネーエンパワーメント","financial":"ファイナンシャルメイクオーバー","mantra":"マネーマントラ"
        };
        const tabNames = computed(() => Object.keys(tabs));
        const currentTab = computed(() => `${current.value}`);
        const isActive = ref(true)
        const mouseOverAction = (tab) =>  { 
            isActive.value = true;
            current.value = tab;
            };
        return {
            tabNames,
            current,
            tabs,
            currentTab,
            mouseOverAction,isActive
        }
    }
})
</script>