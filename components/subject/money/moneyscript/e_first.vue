<template>
    <Explanation>
        <template v-slot:title>マネースクリプト<br>~ファーストステップ~</template>
        <template v-slot:explanation>現在開発準備中</template>
    </Explanation>
    <a href="Techniques/money/first">Leat's Go</a>
    </template>
    
    <script>
      import { defineComponent } from 'vue';
      import Explanation from '~/components/subject/Explanation';
      export default defineComponent ({
          name:'money_first',
              components: {
              Explanation
          }
      })
      </script>