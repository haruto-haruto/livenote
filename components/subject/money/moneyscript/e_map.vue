<template>
    <Explanation>
        <template v-slot:title>マネーマップ</template>
        <template v-slot:explanation>現在開発準備中</template>
    </Explanation>
    <a href="Techniques/money/map">Leat's Go</a>
    </template>
    
    <script>
      import { defineComponent } from 'vue';
      import Explanation from '~/components/subject/Explanation';
      export default defineComponent ({
          name:'money_map',
              components: {
              Explanation
          }
      })
      </script>