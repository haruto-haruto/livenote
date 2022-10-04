<template>
    <div>
        <insert1>
            <template #title>マネースクリプト診断テスト</template>
            <template #explanation>ふはははｈ</template>
        </insert1>
        <div class="flex flex-col px-12 py-5 mx-5 ou-morphism">
            <div class="text-center">説名文</div>
            <div>
                <li v-for="(question,index) in que8">
                    {{ question }}<input type="number" min="0" max="5" v-model.number="evasion[index]">
                </li>
                <li v-for="(question,index) in que16">
                    {{ question }}<input type="number" min="0" max="5" v-model="worship[index]">
                </li>
                <li v-for="(question,index) in que24">
                    {{ question }}<input type="number" min="0" max="5" v-model="position[index]">
                </li>
                <li v-for="(question,index) in que32">
                    {{ question }}<input type="number" min="0" max="5" v-model="vigilance[index]">
                </li>
            </div>
        </div>
        <div class="flex flex-col my-8">
            <div class="pb-5 text-center text-2xl">全体の説明文</div>
            <div class="grid grid-cols-2">
                <div class="p-5 rounded-lg border shadow-md">
                    <div class="text-center text-3xl">各項目</div>
                    <div class="text-center text-xl">各項目の説明文</div>
                    <div class="grid grid-cols-2 p-3">
                        <div class="text-5xl text-center">{{ sumEvasion }}</div>
                        <div class="text-xl">
                            <div>結果に応じた範囲</div>
                            <div>結果の説明</div>
                        </div>
                    </div>
                </div>
                <div class="p-5 rounded-lg border shadow-md">
                    <div class="text-center text-3xl">各項目</div>
                    <div class="text-center text-xl">各項目の説明文</div>
                    <div class="grid grid-cols-2 p-3">
                        <div class="text-5xl text-center">{{ sumWorship }}</div>
                        <div class="text-xl">
                            <div>結果に応じた範囲</div>
                            <div>結果の説明</div>
                        </div>
                    </div>
                </div>
                <div class="p-5 rounded-lg border shadow-md">
                    <div class="text-center text-3xl">各項目</div>
                    <div class="text-center text-xl">各項目の説明文</div>
                    <div class="grid grid-cols-2 p-3">
                        <div class="text-5xl text-center">{{ sumPosition }}</div>
                        <div class="text-xl">
                            <div>結果に応じた範囲</div>
                            <div>結果の説明</div>
                        </div>
                    </div>
                </div>
                <div class="p-5 rounded-lg border shadow-md">
                    <div class="text-center text-3xl">各項目</div>
                    <div class="text-center text-xl">各項目の説明文</div>
                    <div class="grid grid-cols-2 p-3">
                        <div class="text-5xl text-center">{{ sumVigilance }}</div>
                        <div class="text-xl">
                            <div>結果に応じた範囲</div>
                            <div>結果の説明</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>テスト後の行動を促す</div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent ({
    name: 'test',
    components: {

    },
    setup(){
        const evasion = ref([0,0,0,0,0,0,0,0]);
        const worship = ref([0,0,0,0,0,0,0,0]);
        const position = ref([0,0,0,0,0,0,0,0]);
        const vigilance = ref([0,0,0,0,0,0,0,0]);

        const que8 = ["1.他の人が自分よりも貧しいときは、私はより多くのお金を持つわけにはいかない","2.金持ちは欲深い","3.人は他人を利用して金持ちになるものだ",
            "4.私はお金を稼ぐに値しない人間だ","5.善良な人はお金のことを気にしてはいけない","6.お金持ちになると同時に善人でいるのは難しい","7.お金が少ないほど、人生は良いものになる",
            "8.お金は人を堕落させる",];
        const que16 = ["9.金持ちになるということは、昔からの友人や家族と疎遠になるということだ","10.もっとお金があれば、物事は良くなるだろう","11.お金が多ければ幸せになれる",
            "12.貧しいまま幸せになるのは難しい","13.お金はいくらあっても足りない","14.お金は力だ","15.お金は私の問題をすべて解決してくれる","16.お金は自由を買うことができる",];
        const que24 = ["17.ほとんどの貧乏人はお金を持つ資格がない","18.愛とお金を同時に得ることはできない","19.何かを買うときは新品しか買わない（車や家など）","20.貧しい人は怠け者だ",
            "21.お金は人生に意味を与えるものだ","22.私の自己価値は、私の純資産に等しい","23.「最高」と判断できないものは、買う価値がない","24.人間の成功は、稼いだお金の量で決まる",];
        const que32 = ["25.自分がどれだけのお金を持っているか、どれだけ稼いでいるかを他人に教えてはいけない","26.他人にどれだけお金を持っているか、あるいはどれぐらい稼いでいるかを尋ねるのは間違っている",
            "27.お金は使うのではなく、貯めるべきだ","28.将来トラブルが起きたときのために貯金をすることは重要だ","29.人間はお金のために働くべきであり、他人から経済的に保護されるべきではない",
            "30.もしもの時のためにお金が貯まっていなかったら、神経質になってしまう","31.たとえ時間がかかっても、何かを買う前には常に最良のものを探すべきだ","32.自分のためにお金を使うのは贅沢だ",];
        
        const sumEvasion = ref(0);
        const sumWorship = ref(0);
        const sumPosition = ref(0);
        const sumVigilance = ref(0);

        const total = (que) => {
            let totals = ref(0);
            for(let i=0; i<8 ;i++) {
                totals.value += que.value[i];
            };
            switch(que) {
                case evasion:
                    sumEvasion.value = totals.value;
                    break;
                case worship:
                    sumWorship.value = totals.value;
                    break;
                case position:
                    sumPosition.value = totals.value;
                    break;
                case vigilance:
                    sumVigilance.value = totals.value;
                    break;                
            };
        };
        watch (evasion.value, () => total(evasion));
        watch (worship.value, () => total(worship));
        watch (position.value, () => total(position));
        watch (vigilance.value, () => total(vigilance));

        return {
            evasion,worship,position,vigilance,

            que8,que16,que24,que32,
            sumEvasion,sumWorship,sumPosition,sumVigilance,
            total,
        }
    }
})
</script>

<style>

</style>
