<script setup>
  import { onMounted } from "vue";

  import { useWeather } from "./composables/useWeather";
  import { useWeatherStore } from "./stores/weatherStore";

  const weatherStore = useWeatherStore();
  onMounted(() => {
    useWeather();
    
  });

  const login = async () => {
  navigateTo("/login");
  };

</script>

<template>
  <UiNavbar sticky>
    <UiContainer class="flex h-14 items-center justify-between">
      
      <a href="/">Menu</a>
      <ul class="flex text-sm text-muted-foreground">
        <li>
          <NuxtLink class="transition-colors hover:text-foreground" to="/" active-class="active">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink class="ml-6 transition-colors hover:text-foreground" to="/reportes" active-class="active">Graficos</NuxtLink>
        </li>
        <li>
          <NuxtLink class="ml-6 transition-colors hover:text-foreground" to="/dashboard" active-class="active">Dashboard</NuxtLink>
        </li>
        
      </ul>
      <div class="flex items-center gap-3">
                  <Icon name="heroicons:cloud" alt="temperatura"/>
                  <span>{{ weatherStore.temperatura }}°</span>
      </div>

      <div class="SignIn">
        <UiButton  v-if="!useAuthTestStore().loggedIn" @click="login" to="login" variant="outline" size="sm">
          Sign In
        </UiButton>
        <UiButton v-if="useAuthTestStore().loggedIn" @click="useAuthTestStore().clear()" variant="outline" size="sm">
          Logout
        </UiButton>
      </div>
    </UiContainer>
  </UiNavbar>
</template>

<style scoped>


  .SignIn {
    margin-left: 5rem;
  }

  nav {
    background-color: #333;
    padding: 1rem;
    display: flex;
    align-items: center;
  }

  nav a {
    color: #fff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
  }

  nav ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    margin-left: 3rem;
  }

  nav ul li {
    margin-left: 1rem;
  }

  nav ul li a {
    transition:
      background-color 0.3s,
      color 0.3s;
  }

  nav ul li a:hover {
    background-color: grey;
    color: yellow; /* Color al pasar el mouse */
  }

  nav ul li a.active {
    font-weight: bold;
    color: yellow; /* Color activo */
  }

  /* Responsivo */
  @media (max-width: 768px) {
    nav ul {
      flex-direction: column;
      position: absolute;
      background-color: #333;
      top: 60px; /* Ajusta según la altura de tu navbar */
      left: 0;
      width: 100%;
      display: none; /* Oculto por defecto */
    }

    nav ul.show {
      display: flex; /* Mostrar cuando sea necesario */
    }

    nav a.menu-toggle {
      cursor: pointer;
      display: block;
      margin-left: auto;
    }
  }
</style>
