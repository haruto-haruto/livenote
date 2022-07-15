<template>
<div class="flex">
    <slot name="image"><img src="~/assets/images/icon.png" /></slot>
    <div class="flex-col">
        <div>
            <slot name="title">Coming Soon</slot>
        </div>
        <div>
            <slot name="explanation">ただいま製作中</slot>
        </div>

        <div>
            <slot name="link"></slot>
        </div>
    </div>
</div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent ({
    name:'explanation',
})
</script>