<template>
    <Explanation>
        <template v-slot:title>コンフォートカード</template>
        <template v-slot:explanation>現在開発準備中</template>
    </Explanation>
    <a href="Techniques/health/confortCard">Leat's Go</a>
    </template>
    
    <script>
      import { defineComponent } from 'vue';
      import Explanation from '~/components/subject/Explanation';
      export default defineComponent ({
          name:'e_confortCard',
              components: {
              Explanation
          }
      })
      </script>
    
    <style>
    
    </style>