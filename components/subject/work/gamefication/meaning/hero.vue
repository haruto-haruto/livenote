<template>
    <insert3>
        <template v-slot:title>
            hero
        </template>
        <template v-slot:explanation>
            hero
        </template>
        <template v-slot:example>
            hero
        </template>
    </insert3>
</template>

<script>
import insert3 from "~/components/insert3";
export default defineComponent({
    name:'hero',
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