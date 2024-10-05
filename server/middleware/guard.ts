export default defineEventHandler(async (event) => {
    // Obtener la URL de la solicitud
    const url = getRequestURL(event);
    const { pathname } = new URL(url);
    
    // Definir rutas protegidas
    const protectedRoutes = ["/api/users", "/dashboard"];
  
    // Verificar si la ruta actual está en la lista de rutas protegidas
    if (protectedRoutes.includes(pathname)) {
      console.log(`Accediendo a una ruta protegida: ${pathname}`);
      
      try {
        // Verificar si hay una sesión de usuario
        await requireUserSession(event);
      } catch (error) {
        // Si no hay sesión, redirigir o devolver un error
        console.error("Acceso denegado. No hay una sesión válida.", error);
        throw createError({ statusCode: 401, statusMessage: 'Unauthorized' });
      }
    } else {
      console.log(`Ruta no protegida: ${pathname}`);
    }
  });
  

/* export default defineEventHandler(async (event) => {
    // Get url que esta siendo llamada
    const url = getRequestURL(event)
    console.log(`Request to ${url}`);

    const { pathname } = new URL(url);
    console.log(`Pathname: ${pathname}`);
    const protectedRoutes = ["/api/users", "/dashboard"]

    for (let i = 0; i < protectedRoutes.length; i++) {
        const r = protectedRoutes[i];
        if(pathname == r) {
            console.log("Protected Route", r)
            await requireUserSession(event);
        }
    }
}); */