<template>
  <div class="flex min-h-[80VH] items-center justify-center">
    <Hero />
  </div>
</template>

<script setup>
  
  const { users } = storeToRefs(useUsersStore());
  const { loadData } = useUsersStore();
  const headers = ["ID", "Name", "Email"];
  
  //const pool = await useDbStore().getPool();

  const { loggedIn, user, session, clear} = useUserSession();
</script>