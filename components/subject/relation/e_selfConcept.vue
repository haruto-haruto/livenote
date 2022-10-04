<template>
    <Explanation>
        <template v-slot:title>セルフコンセプト</template>
        <template v-slot:explanation>あはふぁｓふぁｊｄｓｊふぁふぁ</template>
    </Explanation>
    <a href="Techniques/relation/selfConcept">Leat's Go</a>
    </template>
    
<script>
    import { defineComponent } from 'vue';
    import Explanation from '~/components/subject/Explanation';
    export default defineComponent ({
        name:'e_selfConcept',
        components: {
        Explanation
    }
})
</script>