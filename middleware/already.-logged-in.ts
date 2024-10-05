export default defineNuxtRouteMiddleware( async (to,from) => {
  const user = await useAuthTestStore().loggedIn;
  if (user) {
    return await navigateTo("/dashboard");
  }
})
