<template>
  <div class="chart-container">
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script setup>
  import axios from "axios";
  import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
  } from "chart.js";
  import { onMounted, ref } from "vue";
  import { Bar } from "vue-chartjs";

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

  const chartData = ref({
    labels: [],
    datasets: [
      {
        label: "Temperatura",
        backgroundColor: "#42A5F5",
        data: [],
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
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"
      );
      const data = response.data;
      console.log(data.hourly.temperature_2m);
      // Supongamos que data es un array de objetos con `name` y `value`
      chartData.value = {
        labels: data.hourly.time.map((t) => new Date(t).toLocaleString([])), // Ajusta según la estructura de tu API
        datasets: [
          {
            label: "Temperatura",
            backgroundColor: "#42A5F5",
            data: data.hourly.temperature_2m, // Ajusta según la estructura de tu API
          },
        ],
      };
    } catch (error) {
      console.error("Error al cargar los datos:", error);
    }
  };

  // Llama a fetchData cuando el componente se monte
  onMounted(() => {
    fetchData();
  });
</script>

<style scoped>
  .chart-container {
    width: 100%;
    height: 300px; /* Set a fixed height for all charts */
  }
</style>
