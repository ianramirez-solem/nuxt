<template>
  <form @submit.prevent="submit" class="mt-10">
    <fieldset :disabled="isSubmitting" class="grid gap-5">
      <UiVeeInput name="name" label="Usuario" placeholder="nombre" type="text" />
      <UiVeeInput name="password" label="Contraseña" placeholder="" type="password" />

      <UiButton type="submit" class="w-full">Login</UiButton>
    </fieldset>
  </form>
</template>

<script setup>
const authTestStore = useAuthTestStore();
const { handleSubmit, isSubmitting } = useForm({
  validationSchema: toTypedSchema(LoginSchema),
});

const login = async (values) => {
  const loading = useSonner.loading("Cargando...", {
    description: "",
  });
  try {
    await authTestStore.signIn({ name: values.name, password: values.password });
    useSonner.success("Sesión iniciada correctamente", {
      id: loading,
    });

    if (authTestStore.loggedIn) {
      return await navigateTo("/dashboard")  // Redirige a /dashboard
    }
  } catch (error) {
    console.error(error.message);
    useSonner.error("Credenciales incorrectas", {
      id: loading,
    });
  }
};

const submit = handleSubmit(login);
</script>
