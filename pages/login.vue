<template>
  <UiContainer class="flex min-h-[80VH] items-center justify-center">
    <div class="w-full max-w-[340px]">
      <div class="text-center">
        <h1 class="text-3xl font-semibold lg:text-4xl">Inicio Sesión</h1>
        <p class="mt-2 text-lg text-muted-foreground">
          Bienvenido
        </p>
      </div>
      <Form />
    </div>
  </UiContainer>
</template>

<script setup>
  definePageMeta({
    layout: "authentication",
    middleware: "already-logged-in",
  });
</script>
