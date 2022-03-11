<template>
  <header class="flex items-center justify-between mb-10">
    <div class="header__left">
      <h2 class="font-display font-bold text-2xl text-dark">Events</h2>
    </div>
    <div class="header__right">
      <div class="flex items-center">
        <figure class="w-9 h-9 overflow-hidden rounded-sm mr-4">
          <img
            class="w-full h-full"
            src="../assets/profile.jpg"
            alt="Profile Picture"
          />
        </figure>
        <h6 class="font-display font-bold text-base text-dark mr-4">
          Bernice
        </h6>
        <div
          class="dropdown w-6 h-6 rounded-lg bg-grey-three flex items-center justify-center"
        >
          <caret-down-icon />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
}
</script>
