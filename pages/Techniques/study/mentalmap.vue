<template>
    <insert1>
        <template v-slot:title>メンタルマップ</template>
        <template v-slot:explanation>ahahaahahahha</template>
    </insert1>
    <div class="p-5 m-5 ou-morphism text-center">
        <div class="flex justify-around space-x-2 mb-5">
            <div class="flex flex-col w-[32%]">
                <p class="mb-3 text-2xl">理由</p>
                <textarea class="min-h-[25rem]"></textarea>
            </div>
            <div class="flex flex-col w-[32%]">
                <p class="mb-3 text-2xl">得たいもの</p>
                <textarea class=" min-h-[25rem]"></textarea>
            </div>
            <div class="flex flex-col w-[32%]">
                <p class="mb-3 text-2xl">期待する変化</p>
                <textarea class=" min-h-[25rem]"></textarea>
            </div>
        </div>
    </div>
    </template>
    
    <script>
      import { defineComponent } from 'vue';
      export default defineComponent ({
        name:'expressiveWriting',
        components: {
          },
          setup(){
            return{
                
            }
          }
      })
      </script>
    
    <style>
    
    </style>