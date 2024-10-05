<template>
  <div>
    <UiContainer as="section" class="py-5 max-w-2xl">
      <div class="flex items-center text-center justify-center">
        <div>
          <h1 class="font-semibold text-2xl">Customers</h1>
          <p class="mt-1 text-muted-foreground">Manage customers here</p>
        </div>
      </div>
      <UiDivider class="my-10"/>

      <!-- Campo de búsqueda -->
      <div class="flex gap-3 my-5">
        <UiInput v-model="searchQuery" placeholder="Search by name or email" />
      </div>

      <div v-if="!paginatedUsers.length" class="flex flex-col gap-5 items-center">
        <Icon name="lucide:users"/>
        <p>No customers loaded</p>
      </div>

      <div v-else class="overflow-x-auto rounded-lg bg-background border">
        <UiTable>
          <UiTableHeader>
            <UiTableRow>
              <UiTableHead v-for="h in headers" :key="h">{{ h }}</UiTableHead>
            </UiTableRow>
          </UiTableHeader>

          <UiTableBody>
            <UiTableRow v-for="customer in paginatedUsers" :key="customer.CustomerID">
              <UiTableCell>{{ customer.CustomerID }}</UiTableCell>
              <UiTableCell>
                <div class="flex items-center gap-3">
                  <span>{{ customer.FullName }}</span>
                </div>
              </UiTableCell>
              <UiTableCell>
                <a class="underline underline-offset-2 text-muted-foreground decoration-sky-400 hover:text-sky-500 transition" :href="`mailto:${customer.EmailAddress}`"> 
                  {{ customer.EmailAddress }}
                </a>
              </UiTableCell>
            </UiTableRow>
          </UiTableBody>
        </UiTable>
      </div>

      <!-- Controles de paginación -->
      <div class="flex justify-between items-center mt-4">
        <UiButton @click="prevPage" :disabled="currentPage === 1">Anterior</UiButton>
        <span>Página {{ currentPage }} de {{ totalPages }}</span>
        <UiButton @click="nextPage" :disabled="currentPage === totalPages">Siguiente</UiButton>
      </div>
    </UiContainer>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useUsersStore } from '@/stores/users';


const userStore = useUsersStore();
const { paginatedUsers, currentPage, totalPages, searchQuery } = storeToRefs(userStore);
const { loadData, nextPage, prevPage } = userStore;

const headers = ["ID", "Name", "Email"];

onMounted(() => {
  loadData();
});

definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});
</script>
