<template>
  <section class="flex flex-col">
    <section class="flex items-center">
      <section class="featured scrollbar-none" ref="featured">
        <featured-card
          v-for="eventItem in getFeaturedEvents"
          :key="eventItem.id"
          :eventItem="eventItem"
        />
        <featured-card
          v-for="eventItem in getFeaturedEvents"
          :key="eventItem.id"
          :eventItem="eventItem"
        />
        <featured-card
          v-for="eventItem in getFeaturedEvents"
          :key="eventItem.id"
          :eventItem="eventItem"
        />
      </section>
    </section>
  </section>
</template>

<script>
import { mapGetters, mapState } from "vuex"
import FeaturedCard from "../components/FeaturedCard.vue"

export default {
  name: "Featured",
  components: { FeaturedCard },
  computed: {
    ...mapGetters("events", ["getFeaturedEvents"]),
    ...mapState("events", ["filteredEvents"]),
  },
  methods: {
    scrollLeft() {
      this.$refs.featured.style = "all .2s"
      this.$refs.featured.scrollLeft -= 500
    },

    scrollRight() {
      this.$refs.featured.style = "all .2s"
      this.$refs.featured.scrollLeft += 500
    },
  },
}
</script>

<style lang="postcss" scoped>
.featured {
  @apply flex overflow-x-scroll z-0 transition-all;
}
</style>
