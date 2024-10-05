<script setup>
definePageMeta({
    layout: "dashboard",
    middleware: "auth",
  });

</script>

<template>
  <div>
    <div class="text-justify text-xl">
      <h1>En esta sección de dashboard, se muestran gráficos con chart.js y estilo con tailwind.css.</h1>
      <h1 class=" mt-2">En el SIDEBAR, solo funciona Customers/List para iterar, filtrar usuarios de la base de datos y logout para cerrar sesión.</h1>
      <h1 class=" mt-2">Tambien se guardan los datos en el storage del usuario que inicio sesión, mediante a una base de datos azure y con nuxt auth utils se crea una sesion.</h1>
    </div>
    <SalesChart />
    <ErrorsChart />
  </div>
</template>