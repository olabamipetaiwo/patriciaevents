<template>
  <div class="featured__events">
    <featured-event-card
      v-for="eventItem in getFeaturedEvents"
      :key="eventItem.id"
      :eventItem="eventItem"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import FeaturedEventCard from "../FeaturedEventCard.vue"

export default {
  components: { FeaturedEventCard },
  name: "FeaturedEvents",
  computed: {
    ...mapGetters("events", ["getFeaturedEvents"]),
  },
}
</script>

<style lang="css" scoped>
.featured__events {
  @apply grid gap-6 grid-cols-1 sm:grid-cols-featured__events;
}
</style>
