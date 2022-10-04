<template>
 <div class="flex-col w-full p-4 outcome">
      <div class="wish flex">
          <img src="~/assets/images/icon.png" class="h-6 mr-1 sm:h-7" alt="\Live note" />
          <div>   
              <input class="w-4/5"  type="text" v-model="explanation" placeholder="○○に関する" />
              <div class="mr-3 text-4xl">今日の願望:</div>
          </div>
          <input class="w-2/3" type="text" v-model="wish" placeholder="願望/不安を書いてください" />
      </div>
      <div class="outcome flex">
          <img src="~/assets/images/icon.png" class="h-6 mr-3 sm:h-7" alt="\Live note" />
          <div class="mr-3 text-4xl">最高の成果:</div>
          <input class=""  type="text" v-model="outcome" placeholder="結果を書いてください" />
      </div>
      <div class="obstacle flex">
          <img src="~/assets/images/icon.png" class="h-6 mr-3 sm:h-7" alt="\Live note" />
          <div class="mr-3 text-4xl">障害:</div>
          <input class=""  type="text" v-model="obstacle" placeholder="障害を書いてください" />
      </div>
      <div class="plan flex">
          <img src="~/assets/images/icon.png" class="h-6 mr-3 sm:h-7" alt="\Live note" />
          <div class="mr-3 text-4xl">行動:</div>
          <div class="flex flex-raw">
          <div >
              <div>if</div>
              <input class=""  type="text" v-model="planIf" placeholder="計画を書いてください" />
          </div>
          <div class="">
              <div>then</div>
              <input type="text" v-model="planThen" />
          </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "woopwheet",
    data() {
        return {
            explanation:"",
            wish: "",
            outcome: "",
            obstacle: "",
            planIf: "",
            planThen: "",
        }
    }
}
</script>