<template>
  <section class="w-full flex flex-col py-20">
    <header class="flex items-center justify-between mb-10">
      <div class="header__left">
        <h2 class="font-display font-bold text-2xl text-dark">Events</h2>
      </div>
      <div class="header__right">
        <div class="flex items-center">
          <figure class="w-9 h-9 overflow-hidden rounded-sm mr-4">
            <img
              class="w-full h-full"
              src="../assets/profile.jpg"
              alt="Profile Picture"
            />
          </figure>
          <h6 class="font-display font-bold text-base text-dark mr-4">
            Bernice
          </h6>
          <div
            class="dropdown w-6 h-6 rounded-lg bg-grey-three flex items-center justify-center"
          >
            <caret-down-icon />
          </div>
        </div>
      </div>
    </header>

    <section class="grid lg:grid-cols-4 gap-8" v-if="fetchingEvents">
      <loader v-for="_item in this.loaders" :key="_item" />
    </section>
    <fragment v-else>
      <search-events />
      <!-- Featured Events -->
      <fragment>
        <fragment v-if="getFeaturedEventsLength > 0">
          <section class="flex flex-col mb-5">
            <h3 class="text-header mb-5" v-if="getFeaturedEventsLength > 0">
              Featured Events
            </h3>
            <featured-events />
          </section>
        </fragment>
        <section class="flex flex-col mb-5" v-else>
          <h3 class="text-header mb-5">
            No featured events at the moment
          </h3>
        </section>
      </fragment>
      <!-- Featured Events -->

      <!-- All Events -->
      <fragment>
        <section class="flex flex-col mb-5" v-if="getFilteredEventsLength > 0">
          <h3 class="text-header mb-5">All Events</h3>
          <all-events />
        </section>
        <section class="flex flex-col mb-5" v-else>
          <h3 class="text-header mb-5">
            No events match for the current keyword
            <span class="text-primary-main font-bold text-sm font-display">
              {{ filterKeyWord }}
            </span>
          </h3>
        </section>
      </fragment>
      <!-- All Events -->
    </fragment>
  </section>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex"
import FeaturedEvents from "@/containers/FeaturedEvents.vue"
import AllEvents from "@/containers/AllEvents.vue"
import SearchEvents from "@/components/SearchEvents.vue"
import Loader from "@/components/Loader.vue"

export default {
  components: { FeaturedEvents, AllEvents, SearchEvents, Loader },
  name: "Home",
  created() {
    this.$store.dispatch("events/fetchEvents")
  },
  computed: {
    ...mapState("events", ["allEvents", "filterKeyWord", "fetchingEvents"]),
    ...mapGetters("events", [
      "getFilteredEventsLength",
      "getFeaturedEventsLength",
    ]),
  },
  methods: {
    ...mapActions("events", ["filterEvents"]),
  },

  data() {
    return {
      loaders: Array(4)
        .fill()
        .map((v) => v),
    }
  },
}
</script>
