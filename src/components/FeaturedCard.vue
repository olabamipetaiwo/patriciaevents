<template>
  <div class="featured__events__card">
    <figure>
      <img
        class="w-full h-full object-cover"
        src="../assets/event.jpg"
        alt="Event Image"
      />
    </figure>
    <h2 class="text-title mb-3">Wizkid in Warri</h2>
    <div class="flex items-center justify-between">
      <div class="flex flex-col">
        <div class="flex items-center mb-4">
          <div class="flex items-center mr-7">
            <location-icon class="mr-2" />
            <p>Lagos</p>
          </div>
          <div class="flex items-center">
            <date-icon class="mr-2" />
            <p>8th December, 2021</p>
          </div>
        </div>
        <div class="flex items-center">
          <ticket-icon class="mr-2" />
          <p>
            Starting from
            <span>15,000</span>
          </p>
        </div>
      </div>
      <button class="btn btn-outline">
        Buy Ticket
      </button>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line quotes
  name: 'FeaturedEventCard',
}
</script>

<style lang="postcss" scoped>
.featured__events__card {
  @apply w-full bg-white h-80 p-4;
}

figure {
  @apply w-full h-44 overflow-hidden rounded-md mb-4;
}

p {
  @apply font-display text-xs text-grey-four font-normal;
}
</style>
