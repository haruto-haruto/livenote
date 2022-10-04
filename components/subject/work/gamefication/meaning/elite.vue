<template>
    <insert3>
        <template v-slot:title>
            elite
        </template>
        <template v-slot:explanation>
            elite
        </template>
        <template v-slot:example>
            elite
        </template>
    </insert3>
</template>

<script>
import insert3 from "~/components/insert3";
export default defineComponent({
    name:'elite',
    components: {
        insert3
    },
    setup() {
        return {

        }
    }
})
</script>
<style>

</style>