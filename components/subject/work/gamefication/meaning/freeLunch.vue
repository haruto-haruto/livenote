<template>
    <insert3>
        <template v-slot:title>
            freeLunch
        </template>
        <template v-slot:explanation>
            freeLunch
        </template>
        <template v-slot:example>
            freeLunch
        </template>
    </insert3>
</template>

<script>
import insert3 from "~/components/insert3";
export default defineComponent({
    name:'freeLunch',
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