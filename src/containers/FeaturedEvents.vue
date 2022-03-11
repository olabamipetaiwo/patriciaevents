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
import FeaturedEventCard from "../components/FeaturedEventCard.vue"

export default {
  components: { FeaturedEventCard },
  name: "FeaturedEvents",
  computed: {
    ...mapGetters("events", ["getFeaturedEvents"]),
  },
}
</script>

<style lang="postcss" scoped>
.featured__events {
  @apply grid gap-6 grid-cols-1 sm:grid-cols-featured__events;
}
</style>
