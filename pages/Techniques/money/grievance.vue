<template>
    <insert1>
        <template #title>マネーグリーバンス</template>
        <template #explanation>あははあははっはっはあははは</template>
    </insert1> 
    <div class="ou-morphism">
        <div class="flex flex-raw justify-around space-x-3 p-3 py-5">
            <div class="w-1/2 totu-morphism">
                <div class="p-2 mb-4 text-3xl text-center">1.お金で裏切られた騙されたという過去を思い出す</div>
                <div class="flex p-2 mb-4 totu-morphism ">
                    <input v-model="todo" class="w-full"><br>
                    <input type="number" v-model.number="impact" placeholder=0 class="w-12 text-right" />
                    <input type="number" v-model.number="effort" placeholder=0 class="w-12 text-right" />
                    <br>
                    <button @click="addTodo()">追加</button>
                </div>
                <li v-for="(todo, index) in todos" :key="index" class="flex p-2 totu-morphism space-y-3"> <!-- todosをforでリスト表示　-->
                    <input type="text" v-model="todo.todo" class="text-left w-full" @click="changeWin(index)" />
                    <input type="number" v-model="todos[index].impact" placeholder=0 class="w-12 text-right" />
                    <input type="number" v-model="todos[index].effort" placeholder=0 class="w-12 text-right" />
                    <!-- li内にTodoQwinコンポーネントを作成、telepportで表示場所を変更　-->
                    <teleport to="#qwin">
                        <keep-alive>
                            <TodoQwin v-if="this.show===index">
                                <template #title>2. 1の内容を下記の三つのポイントでチェックする<br>
                                    ①その体験についてどう感じたか<br>
                                    ②その体験で学んだ教訓を書く<br>
                                </template>
                                <template #anser_in>
                                    <div class="hidden"></div>
                                </template>
                                <template #anser>
                                    <div class="hidden"></div>
                                </template>
                            </TodoQwin>
                        </keep-alive>
                    </teleport>
                    <span @click="removeTodo(index)">X</span>
                </li>
            </div>
            <div id="qwin" class="w-1/2 totu-morphism"></div>
    </div>
    <div class="text-center text-3xl">
        <div class=" mb-2">③複数の体験に共通する事は無いか</div>
        <textarea  class="w-[80%] min-h-[20rem]"></textarea>
    </div>
    <hr class="my-10 border mx-5">
    <div class="text-center text-3xl mb-10">
        <div class="mb-3">3.現在の生活を思い浮かべる</div>
        <div class="grid grid-cols-2">
            <div class="text-2xl mb-2">
                <p>①今過去の失敗と同じ状況に居ないか</p>
                <p>②過去と同じ様な人と同じ様な状況に居ないか</p>
                <p>③今もリスクが高い状況ならどうすればリスクを減らせるか</p>
                <p>④今自分は安全で信頼できる人々と一緒に居るか</p>
                <p>⑤安全で信頼出来る人と居る時お金への恐怖や不信から自由になれているか</p>
                <p>⑥過去の恐怖や不信感が現在の自分の行動や判断に影響を与えていないか</p>
            </div>
            <div class="text-left">
                <textarea class="w-[80%] min-h-[20rem] mb-3"></textarea>
            </div>
        </div>
        <div>
            今後の改善行動
        </div>
    </div>
</div>
</template>
<script>
import { defineComponent } from 'vue';
import TodoQwin from '~/components/goal/qwin/TodoQwin'
export default defineComponent({
    name:'money_grievance',
    components:{TodoQwin},
    setup(){
        const show = ref(0);
        const todo = ref('');
        const impact =ref('');
        const effort = ref('');
        const todos = ref([]);

        const changeWin = (index) => {
            show.value = index;
        };
        const addTodo = () => {
            todos.value.push({todo:todo.value,impact:impact.value, effort:effort.value});
            todo.value = '';
            impact.value = '';
            effort.value = '';
        }
        const removeTodo = (index) => {
            todos.value.splice(index, 1);
        }

        const questions = ["この行動を実行したらどんな変化が起きるだろう？","そのアクションを行動に移すためには、自分の中でどのような感情が起きなければならないだろうか？",
        "そのアクションを実行するには、どのような追加情報が必要だろうか？","他の人からのどのような助けや協力が必要だろうか？",
        "そのアクションを実行するために、何か人生を変えるようなイベントが必要だろうか？ もしそうなら、どんなイベントが必要だろうか？",
        "そのアクションは、時間をかけて努力を注ぎ込むだけの価値があるだろうか？","そのアクションを行うには、どのくらいのお金が必要だろうか？",
        "それは本当に変更を行う価値がありますか？","そのアクションをサポートしてくれる人はいるだろうか？",
        "そのアクションを行う際に、自分のモチベーションを下げさてきそうな人や出来事はあるだろうか？","そのアクションを行うことの長所と短所は何だろうか？",
        "そのアクションを行わない場合に起きる最悪のシナリオは何だろうか？　その最悪のシナリオに耐えられるだろうか？",]
        return{
            show,changeWin,
            todo,impact,effort,todos,
            addTodo,removeTodo,
            questions,
        }
    }
})
</script>