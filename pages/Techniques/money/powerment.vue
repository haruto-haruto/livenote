<template>
    <insert1>
        <template #title>マネーエンパワーメント</template>
        <template #explanation>ahahahaahahha</template>
    </insert1>
    <div class="m-5 p-5 ou-morphism">
        <div class="flex justify-center space-x-5">
            <div class="flex flex-col justify-center space-y-4 text-2xl">
                <p>・お金について学んだ・ビジネスモデルを学んだ等</p>
                <p>・お金の事について褒められた体験</p>
                <p>・努力のお陰で金銭的に恵まれた体験</p>
                <p>・貯金をして欲しい物を買った体験</p>
                <p>・お金を使って他人が喜んだ体験</p>
            </div>
            <div class="w-2/3 text-center">
                <div class="text-xl m-3">成功した経験</div>
                <textarea class="w-full min-h-[20rem]"></textarea>
            </div>
            
        </div>
        <div class="text-center text-xl my-6 p-3">
            <div>学んだこと</div>
            <textarea class="w-[80%] min-h-[20rem]"></textarea>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name:'money_powerment',
    components:{},
    setup(){
        return{

        }
    }
})
</script>