<template>
    <Explanation>
        <template v-slot:title>弱み開示</template>
        <template v-slot:explanation>あはふぁｓふぁｊｄｓｊふぁふぁ</template>
    </Explanation>
    <a href="Techniques/relation/weakness">Leat's Go</a>
    </template>
    
<script>
    import { defineComponent } from 'vue';
    import Explanation from '~/components/subject/Explanation';
    export default defineComponent ({
        name:'e_weakness',
        components: {
        Explanation
    }
})
</script>