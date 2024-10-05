<template>
  <div>
    <!-- "Logging out..." -->
  </div>
</template>

<script setup lang="ts">

const logout = async () => {
  const authStore = useAuthTestStore(); 
  await authStore.clear(); 
  navigateTo("/"); 
};


logout();
</script>
