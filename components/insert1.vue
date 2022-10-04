<template>
    <div class="my-3">
        <div class="text-center text-8xl">
            <slot name="title"></slot>
        </div>
        <div class="p-5 text-center text-2xl">
            <slot name="explanation"></slot>
        </div>
    </div>
</template>

<script>

export default defineComponent({
    name:'insert1',
    components: {
    },
    setup() {
        return {

        }
    }
})
</script>
<style>

</style>