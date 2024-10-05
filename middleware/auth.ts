export default defineNuxtRouteMiddleware( async (to) => {
  //console.log('Middleware de autenticación ejecutado');
   const user = await useAuthTestStore().loggedIn;

   if (!user) {
    return await navigateTo({
      path: "/login",
      query: {
        redirect: to.fullPath,
      },
    });
   }
});
