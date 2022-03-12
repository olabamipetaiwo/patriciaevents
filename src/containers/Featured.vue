<template>
  <section class="flex flex-col">
    <section class="flex items-center relative">
      <button @click="scrollLeft" class="btn-scroller -left-4 transform rotate-180" >
        <caret-right />
      </button>
      <section class="featured scrollbar-none" ref="featured">
        <featured-card
          v-for="eventItem in getFeaturedEvents"
          :key="eventItem.id"
          :eventItem="eventItem"
        />
      </section>
      <button @click="scrollRight" class="btn-scroller -right-4">
        <caret-right />
      </button>
    </section>
  </section>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import FeaturedCard from "../components/FeaturedCard.vue";
import CaretRight from "../components/icons/CaretRight.vue";

export default {
  name: "Featured",
  components: { FeaturedCard, CaretRight },
  computed: {
    ...mapGetters("events", ["getFeaturedEvents"]),
    ...mapState("events", ["filteredEvents"]),
  },
  methods: {
    scrollLeft() {
      this.$refs.featured.scrollBy({
        top: 0,
        left: -500,
        behavior: "smooth",
      })
    },
    scrollRight() {
      this.$refs.featured.scrollBy({
        top: 0,
        left: +500,
        behavior: "smooth",
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.featured {
  @apply w-full flex overflow-x-scroll transition-all;
}

.btn-scroller {
  @apply w-10 h-10 rounded-half bg-white   shadow-btn absolute z-10  flex items-center justify-center;
}
</style>
