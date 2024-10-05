<template>
  <div class="mt-5">
    <p class="font-bold">Tipos de Errores</p>
    <div class="mt-5 h-[300px] rounded-lg border bg-background md:p-3">
      <Doughnut :data="data" :options="options" />
    </div>
  </div>
</template>

<script setup>
  import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
  } from "chart.js";
  
  import { Doughnut } from "vue-chartjs";
  import colors from "#tailwind-config/theme/colors";

  ChartJS.register(ArcElement, Tooltip, Legend);

  const mode = useColorMode();

  const options = ref({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: mode.value === "dark" ? colors.slate[200] : colors.slate[700],
        },
      },
      tooltip: {
        intersect: false,
      },
    },
  });

  const data = ref({
    labels: ["Error de Conexión", "Error de Autenticación", "Error de Validación", "Error de Servidor", "Error de Permisos"],
    datasets: [
      {
        label: "Distribución de Errores",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: ["rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",],
        borderWidth: 1,
        data: [25, 15, 30, 20, 10],
      },
    ],
  });
</script>
