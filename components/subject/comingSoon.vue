<template>
<Explanation>
    <template v-slot:title>Coming Soon</template>
    <template v-slot:explanation>現在開発準備中</template>
</Explanation>
</template>

<script>
import { defineComponent } from 'vue';
import Explanation from '~/components/subject/Explanation';
export default defineComponent ({
    name:'comingsoon',
        components: {
        Explanation
    }
})
</script>