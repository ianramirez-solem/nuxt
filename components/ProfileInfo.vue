<template>
  <aside>
  <div >
    <img
      :src="useAuthTestStore().user.avatar"
      :alt="useAuthTestStore().user.avatar"
      class="mx-auto h-28 w-28 rounded-full ring-1 ring-border"
    />

    <div class="mt-5 text-center">
      <h3 class="font-medium">{{ useAuthTestStore().user.fullName }}</h3>
      <p class="mt-1 text-sm text-muted-foreground items-center">
        <span>Rut: {{ useAuthTestStore().user.rut }}</span>
        <UiDivider class="w-[10rem] mx-auto my-1"/>
        <span>Doc: {{ useAuthTestStore().user.doc }}</span>
      </p>
    </div>
  </div>
</aside>
</template>

<script>

</script>