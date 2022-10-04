<template>
    <Explanation>
        <template v-slot:title>I konw I konw I should</template>
        <template v-slot:explanation>現在開発準備中</template>
    </Explanation>
    <a href="Techniques/money/iknowishould">Leat's Go</a>
    </template>
    
    <script>
      import { defineComponent } from 'vue';
      import Explanation from '~/components/subject/Explanation';
      export default defineComponent ({
          name:'money_iknowishould',
              components: {
              Explanation
          }
      })
      </script>