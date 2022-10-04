<template>
    <div>
        <div class="text-center text-6xl">
            <slot name="title"></slot>
        </div>
        <div class="p-3 text-center text-xl">
            <slot name="explanation"></slot>
        </div>
    </div>
</template>

<script>

export default defineComponent({
    name:'insert2',
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