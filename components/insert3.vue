<template>
    <div>
        <div class="text-3xl mb-3">
            <slot name="title"></slot>
        </div>
        <div class="pl-3">
            <slot name="explanation"></slot>
        </div>
        <div class="pl-3">
            <slot name="example"></slot>
        </div>
    </div>
</template>

<script>

export default defineComponent({
    name:'insert3',
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