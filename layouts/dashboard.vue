<template>
  <div>
    <MenuLogin />
      <UiContainer class="container lg:grid lg:grid-cols-12 lg:gap-10">
        <!-- Sidebar -->
        <Sidebar class="sticky top-[65px] hidden h-[calc(100vh-65px)] py-5 lg:col-span-3 lg:block" />

        <!-- Main section -->
        <main class="py-5 lg:col-span-6">
          <slot></slot>
        </main>

        <div class="hidden py-5 lg:col-span-3 lg:block">
          <!--profile info-->
          <ProfileInfo class="sticky top-[65px] hidden h-[calc(100vh-65px)] py-5 lg:col-span-3 lg:block"/>
        </div>
    </UiContainer>
    </div>
</template>
