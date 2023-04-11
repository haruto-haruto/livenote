<template>
  <div class="w-full h-[45rem] bg-[e0e0e0] totu-morphism rounded-lg">
      <div class="text-center">目標を達成するためのテクニック</div>
    <Flicking  :options="{ circular: true }">
      <div class="flex w-[95%] h-[40rem] ou-morphism" :key="w">
          <div class="h-[80%] w-[40%] bg-cover ml-2 my-auto rounded-full totu-morphism" style="background-image: url('/assets/images/woop.png')">
          </div>
          <div class="w-[60%] rounded-b lg:rounded-b-none lg:rounded-r p-4 pl-2 flex flex-col justify-between leading-normal">
              <nuxt-link to="Techniques/goal/woop" class="w-full pt-4">
                <div class="totu-morphism p-4 ">
                <div class="pl-5 pt-2 text-2xl">目標達成率を確実に高める</div>
                <div class="text-8xl text-center tracking-tighter align-middle">W O O P</div>
                </div>
                <p class="p-2 pl-3 mt-4 leading-6 totu-morphism">WOOP（ウープ）は手軽かつ、強力なテクニックです。<br>
                   たった４ステップで、目標達成率が200%上がったという研究があります。<br>

                </p>
                
              </nuxt-link>
          </div>
      </div>
      <div class="flex w-[95%] h-[40rem] ou-morphism"  :key="a">
          <div class="h-[80%] w-[40%] bg-cover ml-2 my-auto rounded-full totu-morphism" style="background-image: url('/assets/images/woop.png')">
          </div>
          <div class="w-[60%] rounded-b lg:rounded-b-none lg:rounded-r p-4 pl-2 flex flex-col justify-between leading-normal">
              <a href='Techniques/goal/apm'>
                <div class="totu-morphism p-4 ">
                <div class="pl-5 pt-2 text-2xl">目標達成率を確実に高める</div>
                <div class="text-8xl text-center tracking-tighter align-middle">A P M</div>
                </div>
                <p class="p-2 pl-3 mt-4 leading-6 totu-morphism">WOOP（ウープ）は手軽かつ、強力なテクニックです。<br>
                   たった４ステップで、目標達成率が200%上がったという研究があります。<br>

                </p>
              </a>
          </div>
      </div>
      <div class="flex w-[95%] h-[40rem] ou-morphism" :key="q">
           <div class="h-[80%] w-[40%] bg-cover ml-2 my-auto rounded-full totu-morphism" style="background-image: url('/assets/images/woop.png')">
          </div>
          <div class="w-[60%] rounded-b lg:rounded-b-none lg:rounded-r p-4 pl-2 flex flex-col justify-between leading-normal">
              <nuxt-link to="Techniques/goal/qwin">
                <div class="totu-morphism p-4 ">
                <div class="pl-5 pt-2 text-2xl">目標達成率を確実に高める</div>
                <div class="text-8xl text-center tracking-tighter align-middle">Qick Win
                </div>
                </div>
                <p class="p-2 pl-3 mt-4 leading-6 totu-morphism">WOOP（ウープ）は手軽かつ、強力なテクニックです。<br>
                   たった４ステップで、目標達成率が200%も上がったという研究があります。<br>

                </p>
              </nuxt-link>
          </div>
      </div>
    </Flicking>
  </div>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import { defineComponent } from 'vue';

export default defineComponent ({
  name:'goal',
    components: {
      Flicking,
    },
    setup() {
      const w = "woop";
      const a ="apm";
      const q ="qwin";
    return {
      w,
      a,
      q,      
    }
  },
})

</script>
<style>

</style>