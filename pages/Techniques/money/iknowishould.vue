<template>
    <div>
        <insert1>
            <template #title>I Know I Should</template>
            <template #explanation>あははははあはあh</template>
        </insert1>
        <div class="flex flex-raw justify-around space-x-3 p-3 py-5 ou-morphism">
            <div class="w-1/2 totu-morphism">
                <div class="p-2 mb-4 text-3xl text-center">1 周囲からお金の使い方や貯め方を指摘された事<br>or<br>2 自分でお金の使い方を変えないといけないなという事</div>
                <div class="flex p-2 mb-4 totu-morphism ">
                    <input v-model="todo" class="w-full"><br>
                    <input type="number" v-model.number="impact" placeholder=0 class="w-12 text-right" />
                    <input type="number" v-model.number="effort" placeholder=0 class="w-12 text-right" />
                    <br>
                    <button @click="addTodo()">追加</button>
                </div>
                <draggable class="dragArea list-group w-full" :list="todos">
                <li v-for="(todo, index) in todos" :key="index" class="flex p-2 totu-morphism space-y-3"> <!-- todosをforでリスト表示　-->
                    <input type="text" v-model="todo.todo" class="text-left w-full" @click="changeWin(index)" />
                    <input type="number" v-model="todos[index].impact" placeholder=0 class="w-12 text-right" />
                    <input type="number" v-model="todos[index].effort" placeholder=0 class="w-12 text-right" />
                    <!-- li内にTodoQwinコンポーネントを作成、telepportで表示場所を変更　-->
                    <teleport to="#qwin">
                        <keep-alive>
                            <TodoQwin v-if="this.show===index">
                                <template #title>質問の答え</template>
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
                </draggable>
            </div>
            <div id="qwin" class="w-1/2 totu-morphism"></div>
        </div>
        <div class="m-5 p-5 pl-8 text-2xl rounded-lg border shadow-md">
            <ul class="flex flex-col space-y-1">
                <li v-for="(que, index) in questions">
                {{ index+1 }}.{{que}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import TodoQwin from '~/components/goal/qwin/TodoQwin'
import { VueDraggableNext } from 'vue-draggable-next'

export default defineComponent({
    name:'iknowishould',
    components:{
        TodoQwin,
        draggable: VueDraggableNext,
    },
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