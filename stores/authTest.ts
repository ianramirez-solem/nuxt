// stores/authTest.js
import { defineStore } from 'pinia';

export const useAuthTestStore = defineStore('authTest', () => {
  // Aquí defines el estado y las acciones necesarias
  const { loggedIn, user, session, clear, fetch } = useUserSession();

  const signIn = async ({ name, password }) => {
    await $fetch('/api/auth/loginTest', { method: "POST", body: { name, password }});
    await fetch();
  }

  return { signIn, loggedIn, user, session, clear, fetch };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthTestStore, import.meta.hot))
}