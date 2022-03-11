<template>
  <div class="featured__events__card">
    <figure>
      <img
        class="w-full h-full object-cover"
        v-bind:src="eventItem?.artist.thumb_url"
        alt="Event Image"
      />
    </figure>
    <h2 class="text-title mb-3">{{ eventItem.title || 'Event Title' }}</h2>
    <div class="flex items-center justify-between">
      <div class="flex flex-col">
        <div class="flex items-center mb-4">
          <div class="flex items-center mr-7">
            <location-icon class="mr-2" />
            <p>{{ eventItem.venue.location }}</p>
          </div>
          <div class="flex items-center">
            <date-icon class="mr-2" />
            <p>{{ new Date(eventItem.datetime).getDate() }}</p>
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
      <a
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-outline"
        :href="eventItem.url"
      >
        Buy Ticket
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturedEventCard",
  props: {
    eventItem: {
      type: Object,
      required: true,
    },
  },
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
