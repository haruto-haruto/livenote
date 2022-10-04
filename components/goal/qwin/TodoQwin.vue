<template>
    <div class="p-2 mb-4 text-3xl text-center">
      <slot name="title">Qwick win</slot>
    </div>
    <div class="flex p-2 mb-2 totu-morphism ">
    <input v-model="todo" class="w-full"><br>
    <slot name="anser_in">
      <input type="number" v-model.number="impact" placeholder=0 class="w-12 text-right" />
      <input type="number" v-model.number="effort" placeholder=0 class="w-12 text-right" />
    </slot>
    <br>
    <button @click="addTodo">追加</button>
    </div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index" class="flex p-2 totu-morphism space-y-2">
      <input type="text" v-model="todos[index].todo" class="text-left w-full" />
      <slot name="anser">
        <input type="number" v-model="todos[index].impact" placeholder=0 class="w-12 text-right" />
        <input type="number" v-model="todos[index].effort" placeholder=0 class="w-12 text-right" />
      </slot>
      <span @click="removeTodo(index)">X</span>
      </li>
    </ul>
</template>

<script>
export default {
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
      this.todo = '';
      this.impact = '';
      this.effort = '';
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
    },
  }
}
</script>