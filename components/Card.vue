<template>
<div class="w-96 min-w-4/12 h-52 p-1 max-w-sm bg-[#e0e0e0] rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700">
  
  <div  class="mb-2 text-xl font-medium text-gray-500 dark:text-gray-400"><slot name="select"></slot></div>

  <div><slot name="behaver">
    <textarea class="w-full text-2xl resize-x font-extraboold tracking-tight p-2.5 mb-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300
     focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
     dark:focus:border-blue-500" 
      rows="2" placeholder="今日の目標"></textarea>
  </slot></div>
  
  <slot name="title"></slot>
  <slot name="explanation">
  </slot>
  <slot name="effect">
  </slot>

  <slot name="achievement">   
  </slot>
</div>

</template>

<script>
  export default {
  }

</script>

<style src="@vueform/toggle/themes/default.css">

</style>