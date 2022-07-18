<template>
    <canvas id="chart" class=""></canvas>
</template>

<script>

import { defineComponent } from 'vue';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);


export default defineComponent ({
  name:'bubblechart',
  props:['bubbleData'],
  setup(props) {
    const dataSets = ref([]);
    const renderChart = () => {
        dataSets.value = props.bubbleData  
        let ctx = document.getElementById("chart");
        window.bubblechart = new Chart(ctx, {
            type: 'bubble',
            data:{
                datasets: dataSets.value
                },
            options: {
                scales: {
                x: { min:0, max:10,},
                y: { min:0, max:10,},
                },
                plugins: { 
                    title: {
                        display: true,
                        text: "APM",
                    }, 
                },
            }  
        });
    }
    watch(props, () => {
        if (bubblechart) {
            bubblechart.destroy();
        }
        renderChart(); // グラフを再描画
    })
    onMounted(() => {
        renderChart();
        });
        
    return {
        renderChart,
    }
  },
});
</script>