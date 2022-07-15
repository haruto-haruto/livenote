<template>
<div>
        <label for="toggle1" class="inline-flex relative items-center cursor-pointer">
          <input type="checkbox" value="" id="toggle1" class="sr-only peer"/>
          <div class="w-24 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 
          dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 
          peer-checked:after:translate-x-16 peer-checked:after:border-white 
          after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all 
          dark:border-gray-600 peer-checked:bg-blue-600 text-right peer-checked:text-center peer-checked:after:left-[4px]">
          <span  v-if="currentState1" class="mx-3 text-sm font-medium text-gray-900 dark:text-gray-300">達成!</span>
          <span  v-if="! currentState1" class="mx-3 text-sm font-medium text-gray-900 dark:text-gray-300">未達成</span>
          </div>
        </label>
      </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent ({
    name:'toggle',

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
        function changeTab(tab) {
            console.log(current.value)
            current.value = tab
            };

        return {
            current,
            tabs,
            tabNames,
            currentTab,
            changeTab,
        }
    }
})

</script>