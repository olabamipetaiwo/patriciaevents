<template>
  <div class="featured__events">
     <featured-event-card />
     <featured-event-card />
   </div>
</template>

<script>
import {mapGetters} from "vuex";
import FeaturedEventCard from "../components/FeaturedCard.vue";

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
  @apply grid gap-6 grid-cols-featured__events;
}
</style>
