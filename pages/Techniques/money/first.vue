<template>
    <div>
        <insert1>
            <template #title>マネースクリプト<br>~ファーストステップ~</template>
            <template #explanation>ふはははｈ</template>
        </insert1>
        <div class="p-4 ou-morphism">
        <div class="flex justify-center mx-5 my-2 p-5 space-x-2 text-center text-2xl">
            <div class="w-1/2 ">
                <p class="mb-2">母</p>
                <textarea class="w-full min-h-[20rem]"></textarea>
            </div>
            <div class="w-1/2 ">
                <p class="mb-2">父</p>
                <textarea class="w-full min-h-[20rem]"></textarea>
            </div>       
        </div>
        <div class="text-center">
            <p>memo</p>
            <textarea class="w-2/3 min-h-[20rem]"></textarea>
        </div>
        <hr class="border mt-5">
        <div class="flex justify-center mx-10 my-10 space-x-2 text-center text-2xl">
            <div class="w-1/2">
                <p class="mb-2">気づいたこと</p>
                <textarea class="w-full min-h-[20rem]"></textarea>
            </div>
            <div class="flex items-center align-middle">→</div>
            <div class="w-1/2 ">
                <p class="mb-2">反証</p>
                <textarea class="w-full min-h-[20rem] "></textarea>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name:'first',
    components:{},
    setup(){
        return{

        };
    },
})
</script>
