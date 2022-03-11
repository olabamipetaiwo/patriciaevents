<template>
  <div class="all__events">
    <event-card
      v-for="eventItem in filteredEvents"
      :key="eventItem.id"
      :eventItem="eventItem"
    />
  </div>
</template>

<script>
import EventCard from "../components/EventCard.vue"
import { mapState } from "vuex"

export default {
  components: { EventCard },
  name: "AllEvents",
  computed: {
    ...mapState("events", ["filteredEvents"]),
  },
}
</script>

<style lang="postcss" scoped>
.all__events {
  @apply grid gap-6 grid-cols-all__events;
}
</style>
