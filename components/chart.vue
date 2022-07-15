<template>
<div>
    <canvas id="chart" class="w-full h-full"></canvas>
</div>
</template>

<script>
import { defineComponent } from 'vue';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default defineComponent ({
  props:['bodyState','mentalState','socialState','stressState'],
  setup(props) {

    const dataValues = ref([props.bodyState,props.mentalState,props.socialState,props.stressState])
    const renderChart = () => {
        dataValues.value[0] = props.bodyState
        dataValues.value[1] = props.mentalState
        dataValues.value[2] = props.socialState
        dataValues.value[3] = props.stressState

        let ctx = document.getElementById("chart");
        window.barchart = new Chart(ctx, {
            type: 'bar',
            data:{
                labels: ['身体','精神','ソーシャル','ストレス'],
                datasets: [{
                    label: 'condition',
                    data: dataValues.value,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                scales: {
                    x: {
                        suggestedMax: 10
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: "Your condition",
                    },
                },
            }
        });
    }
    onMounted(() => {
        renderChart();
        });
    onUpdated(() => {
        if (barchart) {
            barchart.destroy();
        }
        renderChart(); // グラフを再描画
        })
    return {
        renderChart,
        dataValues,
    }
  },
});
</script>