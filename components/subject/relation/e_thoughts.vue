<template>
    <Explanation>
        <template v-slot:title>感想・感情プラスα</template>
        <template v-slot:explanation>あはふぁｓふぁｊｄｓｊふぁふぁ</template>
    </Explanation>
    <a href="Techniques/relation/thoughts">Leat's Go</a>
    </template>
    
<script>
    import { defineComponent } from 'vue';
    import Explanation from '~/components/subject/Explanation';
    export default defineComponent ({
        name:'e_thoughts',
        components: {
        Explanation
    }
})
</script>