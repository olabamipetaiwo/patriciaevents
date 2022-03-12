<template>
  <div class="featured__card">
    <figure v-lazyload>
      <img
        class="w-full h-full object-cover"
        :src="eventItem?.image_url"
        :data-url="eventItem?.image_url"
        alt="Event Image"
      />
    </figure>
    <h2 class="text-title mb-3">{{ eventItem.title || 'Event Title' }}</h2>
    <div class="flex flex-col sm:flex-row sm:items-center justify-between">
      <div class="flex flex-col">
        <div class="flex items-center mb-4">
          <div class="flex items-center mr-7">
            <location-icon class="mr-2" />
            <p>{{ eventItem?.venue?.location }}</p>
          </div>
          <div class="flex items-center">
            <date-icon class="mr-2" />
            <p>{{ this.formatDate(eventItem?.datetime)[1] }}</p>
          </div>
        </div>
        <div class="flex items-center">
          <ticket-icon class="mr-2" />
          <p class="flex items-center">
            <span class="mr-2">Starting from</span>
            <span class="font-semibold text-base text-primary-main">
              ₦&nbsp;{{ eventItem.price.toLocaleString() }}
            </span>
          </p>
        </div>
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-outline flex items-center justify-center mt-4 sm:mt-0"
        :href="eventItem.url"
      >
        Buy Ticket
      </a>
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/utils/functions.js"
export default {
  name: "FeaturedCard",
  props: {
    eventItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate,
  },
}
</script>

<style lang="scss" scoped>
.featured__card {
  @apply flex-shrink-0 flex flex-col bg-white h-80 p-4 rounded-lg mr-8 overflow-hidden;
  flex-basis: 33rem;

  @media only screen and (max-width: 37.5rem) {
    flex-basis: 100%;
  }
}

figure {
  @apply w-full h-44 overflow-hidden rounded-md mb-4;
}

p {
  @apply font-display text-xs text-grey-four font-normal;
}
</style>
