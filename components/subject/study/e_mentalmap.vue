<template>
    <Explanation>
        <template v-slot:title>メンタルマップ</template>
        <template v-slot:explanation>現在開発準備中</template>
    </Explanation>
    <a href="Techniques/study/mentalmap">Leat's Go</a>
    </template>
    
    <script>
      import { defineComponent } from 'vue';
      import Explanation from '~/components/subject/Explanation';
      export default defineComponent ({
          name:'e_mentalmap',
              components: {
              Explanation
          }
      })
      </script>
    
    <style>
    
    </style>