<template>
  <div class="chart-container">
    <Pie :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
  import { ArcElement, Chart as ChartJS, Legend, Title, Tooltip } from "chart.js";
  import { ref } from "vue";
  import { Pie } from "vue-chartjs";

  // Register the necessary Chart.js components
  ChartJS.register(Title, Tooltip, Legend, ArcElement);

  // Define the data for the chart
  const chartData = ref({
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "My Pie Chart",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  const chartOptions = ref({
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ": " + tooltipItem.raw;
          },
        },
      },
    },
  });
</script>

<style scoped>
  .chart-container {
    width: 100%;
    height: 300px; /* Set a fixed height for all charts */
  }
</style>
