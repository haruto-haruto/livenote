<template>
    <insert3>
        <template v-slot:title>
            beginner
        </template>
        <template v-slot:explanation>
            beginner
        </template>
        <template v-slot:example>
            beginner
        </template>
    </insert3>
</template>

<script>
import insert3 from "~/components/insert3";
export default defineComponent({
    name:'beginner',
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