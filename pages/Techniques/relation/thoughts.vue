<template>
    <insert1>
        <template #title>感想・感情プラスα</template>
        <template #explanation>あはあはははははははｈ</template>
    </insert1>
    <div class="m-5 p-5 text-center ou-morphism">
        <div class="flex justify-around text-2xl mb-5">
            <p>事実</p>
            <p>感情・感想</p>
        </div>
        <div class="flex justify-around">
            <div class="flex flex-col space-y-3 w-[40%]  text-2xl">
                <input>
                <input>
                <input>
                <input>
                <input>
            </div>
            <div class="flex items-center text-2xl">⇒</div>
            <div class="flex flex-col space-y-3 w-[40%]  text-2xl">
                <input>
                <input>
                <input>
                <input>
                <input>
            </div>
        </div>
        <hr class="border m-10">
        <div>
            <div class="text-5xl">hinnto</div>
            <p class="text-3xl">aa</p>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name:'',
    components:{},
    setup(){
        return{

        }
    }
})
</script>
<style>
    input {
        text-align: center;
        min-height: 3rem;
    }
</style>