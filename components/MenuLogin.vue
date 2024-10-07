<template>
    <UiNavbar sticky>
      <UiContainer class="flex h-14 items-center justify-between">
        <div class="flex items-center gap-3">
          <button @click="isOpen = true" arial-label="Open Menu" class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-background lg:hidden">
            <span class="sr-only">Button used to open menu</span>
            <Icon name="heroicons:bars-2"/>
          </button>

          <img
          src="https://img.logoipsum.com/296.svg"
          alt="Analytics logo"
          class="h-7 w-7 object-contain"
          />
          <!-- Page title -->
          <NuxtLink to="/">
            <span class="text-l font-light text-sky-400">CHECK</span>
            <span class="text-xl font-bold text-sky-500">ID</span>
          </NuxtLink>
        </div>
        
        <div v-if="useAuthTestStore().loggedIn" class="flex text-center">
          <p class="text-lg font-medium mr-14">Bienvenido, {{ useAuthTestStore().user.fullName }}</p>
        </div>
        
        <div class="flex items-center gap-2">
          <button @click="toggleTheme" class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-background">
              <Icon name="heroicons:sun" class="h-5 w-5" />
            </button>

          <!-- Profile Dropdown menu -->
        <HMenu as="div" class="relative" v-if="useAuthTestStore().loggedIn">
          <HMenuButton
            class="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border bg-background"
          >
            <img
              :src="useAuthTestStore().user.avatar"
              :alt="useAuthTestStore().user.avatar"
              class="h-full w-full"
            />
          </HMenuButton>
          <TransitionScale :scale="0.8" origin="top right">
            <HMenuItems
              class="absolute right-0 z-10 mt-3 w-48 rounded-md border bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div class="border-b px-3 py-1.5 text-sm">
                <p class="font-semibold">{{ useAuthTestStore().user.name }}</p>
                <a :href="`mailto:${useAuthTestStore().user.name}@test.com`" class="leading-none text-muted-foreground"
                  >{{useAuthTestStore().user.name}}@test.com</a
                >
              </div>
              <div class="p-1">
                <template v-for="(p, i) in profileMenuOptions" :key="i">
                  <HMenuItem v-if="!p.divider" v-slot="{ active }">
                    <button
                      :class="[active && 'bg-muted']"
                      class="inline-flex w-full items-center rounded-md p-2 text-sm font-medium"
                      @click="p.action && p.action()"
                    >
                      {{ p.title }}
                    </button>
                  </HMenuItem>
                  <hr v-if="p.divider" class="my-1" />
                </template>
              </div>
            </HMenuItems>
          </TransitionScale>
        </HMenu>
        </div>
      </UiContainer>
    </UiNavbar>
</template>

<script setup>
const logout = async () => {
  useAuthTestStore().clear();
  navigateTo("/");
};

const profileMenuOptions = [
    { title: "Perfil" },
    { title: "Ajustes" },
    { divider: true },
    { title: "Logout", action: logout },
  ];

const mode = useColorMode();
const toggleTheme = () => {
  mode.value = mode.value == 'light' ? 'dark' : 'light';
}

const isOpen = ref(false);
</script>