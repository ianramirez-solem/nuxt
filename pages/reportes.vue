<script setup>
  import Barchart from "../components/Barchart.vue";
  import Doughnutchart from "../components/Doughnutchart.vue";
  import LineChart from "../components/Linechart.vue";
  import Piechart from "../components/Piechart.vue";
</script>

<template>
  <div class="dashboard container">
    <h1>Reportes</h1>
    <div class="main-container">
      <div class="charts-left">
        <div class="chart-card">
          <h2>Gráfico de Línea</h2>
          <LineChart />
        </div>
        <div class="chart-card">
          <h2>Gráfico de Barras</h2>
          <Barchart />
        </div>
      </div>
      <div class="charts-right">
        <div class="chart-card">
          <h2>Gráfico de Pastel</h2>
          <Piechart />
        </div>
        <div class="chart-card">
          <h2>Gráfico de Dona</h2>
          <Doughnutchart />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .dashboard {
    padding: 20px;
    
    min-height: 100vh;
  }

  /* Header */
  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
    color: #333;
  }

  /* Main container */
  .main-container {
    display: flex;
    gap: 20px;
  }

  /* Section for line and bar charts */
  .charts-left {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
  }

  /* Section for pie and doughnut charts */
  .charts-right {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
  }

  /* Card styling for charts */
  .chart-card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%; /* Full width of its container */
    height: 400px; /* Fixed height for all cards */
    box-sizing: border-box;
  }

  .chart-card h2 {
    margin: 0;
    font-size: 1.5rem;
    color: #555;
  }
</style>
