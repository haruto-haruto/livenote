<template>
        <div class="flex flex-col">
            <div class="text-8xl text-center tracking-tighter align-middle">
                <slot name="title">title</slot>
            </div>
            <div class="px-28 mt-4 item-center justify-center align-middle">
                <slot name="explanation">explanation</slot>
            </div>
            <div class="px-28 mt-4 item-center justify-center align-middle">
                <slot name="howto"></slot>
            </div>
        </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent ({
    name:'separation',
})
</script>

<style>

</style>