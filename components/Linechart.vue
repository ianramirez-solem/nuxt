<template>
  <div class="chart-container">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
  import {
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
  } from "chart.js";
  import { onMounted, ref, watch } from "vue";
  import { Line } from "vue-chartjs";

  import { getWeatherData } from "../helpers/getWeather.js";

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler
  );

  const chartData = ref({
    labels: [],
    datasets: [
      {
        label: "Temperatura",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        data: [],
        fill: true,
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
            return tooltipItem.dataset.label + ": " + tooltipItem.raw;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  });

  const fetchData = async () => {
    try {
      const { labels, temperatures } = await getWeatherData();

      chartData.value = {
        labels: labels, // Ajusta según la estructura de tu API
        datasets: [
          {
            label: "Temperatura",
            borderColor: "rgba(75, 192, 192, 1)",
            data: temperatures, // Ajusta según la estructura de tu API
          },
        ],
      };
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  onMounted(() => {
    fetchData();
  });
</script>

<style scoped>
  .chart-container {
    width: 100%;
    height: 100%; /* Ensure the chart fills its container */
  }
</style>
