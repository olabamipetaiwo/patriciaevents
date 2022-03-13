<template>
  <div class="all__events__card">
    <figure v-lazyload>
      <img
        class="w-full h-full object-cover"
        :src="eventItem?.image_url"
        :data-url="eventItem?.image_url"
        alt="Event Image"
      />
    </figure>
    <div class="flex justify-between items-start mb-3">
      <h2 class="text-title">{{ eventItem.title  }}</h2>
      <div class="date-badge">
        <h4>{{ this.formatDate(eventItem?.datetime)[0] }}</h4>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="flex items-center mb-3">
        <div class="flex items-center mr-7">
          <location-icon class="mr-2" />
          <p>{{ eventItem.venue.location }}</p>
        </div>
      </div>
      <div class="flex items-center mb-3">
        <ticket-icon class="mr-2" />
        <p class="flex items-center">
          <span class="mr-2">Starting from</span>
          <span class="font-semibold text-base text-primary-main">
            ₦&nbsp;{{ eventItem.price.toLocaleString() }}
          </span>
        </p>
      </div>
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-outline buy-ticket"
          :href="eventItem.url"
        >
          Buy Ticket
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/utils/functions.js"

export default {
  name: "EventCard",
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
.all__events__card {
  @apply w-full bg-white p-4 min-h-300 rounded-xxs;
}

.date-badge {
  background-image: url('../assets/badge.png');
  @apply w-12 h-7 bg-no-repeat bg-cover flex items-center justify-center;
}

h4 {
  @apply font-display text-secondary-main text-xxs font-semibold;
}

figure {
  @apply w-full h-44 overflow-hidden rounded-md mb-3;
}

p {
  @apply font-display text-xs text-grey-four font-normal;
}

a {
  @apply w-full sm:w-max  py-2 text-xs rounded-md cursor-pointer;
}
</style>
