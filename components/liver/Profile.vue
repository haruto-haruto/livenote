<template>

<ul>
    <li v-for='(item, index) in questionsNames' :key='item' class="border-b">
         {{item}}<input type="text" v-model="questions[item]"/>
     </li>
</ul>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent ({
    name:'profile',
    components: {
    },
    setup() {
        const questions = ref({
            age:"",
            sex:"",
            address:"",
            interest:"",
            worries:"",
            profession:"",
            'Total play time':"",
            'Total number of achievements':"",
            'Number of continuation days':"",
            'Maximum duration':"",
            'Number of recovery':"",
            'Total number of recovery':"",
             Target:"",
        })
        const questionsNames = computed(() => {
        return Object.keys(questions.value);
        });
        return {
            questions,
            questionsNames,
        }
    }
})
</script>