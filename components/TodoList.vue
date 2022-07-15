<template>
  <div class="flex flex-col totu-morphism rounded-lg p-4 m-2">
    <div class="p-2 mb-4 text-3xl">Todoリスト</div>
    <div class="flex p-2 mb-2 totu-morphism ">
        <input v-model="todo"><br>
        <input type="number" v-model.number="impact" placeholder=0 class="w-12 text-right" />
        <input type="number" v-model.number="effort" placeholder=0 class="w-12 text-right" />
        <br>
        <button @click="addTodo">追加</button>
    </div>
    <div>
      <li v-for="(todo, index) in todos" :key="index" class="flex p-2 totu-morphism space-y-2">
          <input type="text" v-model="todos[index].todo" placeholder=0 class="text-left" @change="changeTodo(index)" />
          <input type="number" v-model="todos[index].impact" placeholder=0 class="w-12 text-right" @change="changeTodo(index)" />
          <input type="number" v-model="todos[index].effort" placeholder=0 class="w-12 text-right" @change="changeTodo(index)" />
          <span @click="removeTodo(index)">X</span>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['addChild', 'removeChild', 'changeChild'],
  data() {
    return {
      todo: '',
      impact: '',
      effort: '',
      todos:[],
    }
  },
  methods: {
    addTodo() {
      this.todos.push({todo:this.todo, impact:this.impact, effort:this.effort});
      let childdata = {todo:this.todo, impact:this.impact, effort:this.effort}
      this.todo = '';
      this.impact = '';
      this.effort = '';
      this.$emit('addChild',childdata);
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
      this.$emit('removeChild', index);
    },
    changeTodo(index) {
      let changedata = {todos:this.todos[index], index:index}
      this.$emit('changeChild', changedata);
    }
  }
}
</script>