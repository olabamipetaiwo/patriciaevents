<template>
  <section class="w-full min-h-screen bg-primary-bg">
    <section class="container">
      <router-view />
    </section>
  </section>
</template>

<style lang="postcss" scoped>
.container {
  @apply mx-auto w-full;
  max-width: 1088px;
}
</style>
