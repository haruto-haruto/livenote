<template>
  <div class="flex flex-raw justify-around space-x-3 p-3 ou-morphism">

    <div class="w-1/2 totu-morphism">
        <div class="p-2 mb-4 text-3xl text-center">Todo</div>

        <div class="flex p-2 mb-4 totu-morphism ">
            <input v-model="todo"><br>
            <br>
            <button @click="addTodo">追加</button>
        </div>

        <li v-for="(todo, index) in todos" :key="index" class="flex p-2 totu-morphism space-y-3"> <!-- todosをforでリスト表示　-->
              <input type="text" v-model="todos[index].todo" class="text-left" @click="changeWin(index)"/>
             <!-- li内にTodoQwinコンポーネントを作成、telepportで表示場所を変更　-->
              <teleport to="#qwin">
                <keep-alive>
                  <TodoQwin v-if="this.show===index" />
                </keep-alive>
              </teleport>
              <span @click="removeTodo(index)">X</span>
        </li>
    </div>

    <div id="qwin" class="w-1/2 totu-morphism"></div>

  </div>
</template>

<script>
import TodoQwin from '../components/TodoQwin.vue'
export default {
  components: {
    TodoQwin,
  },
  data() {
    return {
      todo: '',
      todos:[],
      show: 0,
    }
  },
  methods: {
    addTodo() {
      this.todos.push({todo:this.todo,});
      this.todo = '';
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    changeWin(index) {
      this.show = index;
    },
  }
}
</script>