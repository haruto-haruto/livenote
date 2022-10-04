<template>
    <insert1>
        <template #title>リコンソリテーション</template>
        <template #explanation>あはははははははｈ</template>
    </insert1>
    <div class="m-5 p-5 text-center ou-morphism">
        <div class="mb-5">
            <p class="text-2xl mb-5">行動</p>
            <input class="w-[50%] min-h-[5rem]">
        </div>
        <div>
            <p class="text-2xl mb-5">行動の変化</p>
            <div class="flex flex-wrap justify-around">
                <div class="w-96 min-w-[30%]">
                    <p>1</p>
                    <input class="w-full min-h-[5rem]">
                </div>
                <div class="w-96 min-w-[30%]">
                    <p>2</p>
                    <input class="w-full min-h-[5rem]">
                </div>
                <div class="w-96 min-w-[30%]">
                    <p>3</p>
                    <input class="w-full min-h-[5rem]">
                </div>
            </div>
        </div>
        <hr class="border m-10 ">
        <div>
            <div class="text-7xl">変え方のヒント</div>
            <div>
                <p></p>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
      export default defineComponent ({
          name:'reConsolidation',
          components: {},
          setup(){
            return{

            }
          }
        })
      </script>
    
    <style>
    
    </style>