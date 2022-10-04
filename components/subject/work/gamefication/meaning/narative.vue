<template>
    <insert3>
        <template v-slot:title>
            narative
        </template>
        <template v-slot:explanation>
            narative
        </template>
        <template v-slot:example>
            narative
        </template>
    </insert3>
</template>

<script>
import insert3 from "~/components/insert3";
export default defineComponent({
    name:'narative',
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