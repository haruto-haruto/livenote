<template>
<Flicking class="w-full">
    <div class="flex-cal w-[90%] my-2 mr-3 rounded-lg" :key="l">
        <div class="text-center">Goal</div>
        <flicking class="flex w-[95%] h-[40rem] ou-morphism">
            <div class="w-[95%] rounded-b lg:rounded-b-none lg:rounded-r p-4 pl-2 flex flex-col justify-between leading-normal" :key="w"><nuxt-link :to="{path: 'woop', query: {prev: 'technique'}}" >WOOP</nuxt-link>
            <span class="flicking-index"></span></div>
            <div class="w-[95%] rounded-b lg:rounded-b-none lg:rounded-r p-4 pl-2 flex flex-col justify-between leading-normal" :key="a"><nuxt-link :to="{path: 'apm', query: {prev: 'technique'}}">APM</nuxt-link>
            <span class="flicking-index"></span></div>
            <div class="w-[95%] rounded-b lg:rounded-b-none lg:rounded-r p-4 pl-2 flex flex-col justify-between leading-normal" :key="q"><nuxt-link :to="{path: 'qwin', query: {prev: 'technique'}}">Qwin</nuxt-link>
            <span class="flicking-index"></span></div>
        </flicking>
    </div>
    <div class="flex-col w-[90%] my-2 mr-3 rounded-lg" :key="r">
        <div class="text-center">Subject</div>
        <flicking class="flex w-[95%] h-[40rem] ou-morphism">
            <div class="w-[95%] rounded-b lg:rounded-b-none lg:rounded-r p-4 pl-2 flex flex-col justify-between leading-normal" :key="myself">
                <nuxt-link :to="{path: 'valuelist', query: {prev: 'technique'}}">ValueList</nuxt-link>
                <nuxt-link :to="{path: 'sixquestion', query: {prev: 'technique'}}">SixQuestion</nuxt-link>
                <nuxt-link :to="{path: 'bullseye', query: {prev: 'technique'}}">Bullseye</nuxt-link>
                <span class="flicking-index"></span>
            </div>
            <div class="w-[95%] rounded-b lg:rounded-b-none lg:rounded-r p-4 pl-2 flex flex-col justify-between leading-normal" :key="work">
                <div>coming soon</div>
                <span class="flicking-index"></span>
            </div>
            <div class="w-[95%] rounded-b lg:rounded-b-none lg:rounded-r p-4 pl-2 flex flex-col justify-between leading-normal" :key="study">
                <div>coming soon</div>
                <span class="flicking-index"></span>
            </div>
                <div class="w-[95%] rounded-b lg:rounded-b-none lg:rounded-r p-4 pl-2 flex flex-col justify-between leading-normal" :key="relation">
                <div>coming soon</div>
                <span class="flicking-index"></span>
            </div>
            <div class="w-[95%] rounded-b lg:rounded-b-none lg:rounded-r p-4 pl-2 flex flex-col justify-between leading-normal" :key="money">
                <div>coming soon</div>
                <span class="flicking-index"></span>
            </div>
            <div class="w-[95%] rounded-b lg:rounded-b-none lg:rounded-r p-4 pl-2 flex flex-col justify-between leading-normal" :key="health">
                <div>coming soon</div>
                <span class="flicking-index"></span>
            </div>
        </flicking>
    </div>
    
</Flicking>
</template>

<script>
import { defineComponent } from 'vue';
import Flicking from "@egjs/vue3-flicking";
export default defineComponent ({
    name:'profile',
    components: {
    Flicking,
    },
    setup() {
        const l = "left";
        const r = "right";
        const w = "woop";
        const a = "apm";
        const q = "qwin";
        const myself = 'myself';
        const work = 'work';
        const study = 'study';
        const relation = 'relation';
        const money = 'money';
        const health = 'health';
        return {
            l,r,
            w,a,q,
            myself,work,study,relation,money,health,
        }
    }
})
</script>