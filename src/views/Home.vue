<template>
  <section class="w-full flex flex-col py-20">
    <app-header />
    <error-alert />
    <section class="grid lg:grid-cols-4 gap-8" v-if="fetchingEvents">
      <loader v-for="_item in this.loaders" :key="_item" />
    </section>

    <fragment v-else>
      <!-- Searched Events -->
      <search-events />
      <!-- Searched Events -->
      <!-- Featured Events -->
      <fragment>
        <fragment v-if="getFeaturedEventsLength > 0">
          <section class="flex flex-col mb-5">
            <h3 class="text-header mb-5" v-if="getFeaturedEventsLength > 0">
              Featured Events
            </h3>
            <featured />
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
import AllEvents from "@/containers/AllEvents.vue"
import SearchEvents from "@/components/SearchEvents.vue"
import Loader from "@/components/Loader.vue"
import Featured from "../containers/Featured.vue"
import AppHeader from "../components/Header.vue"
import ErrorAlert from "../components/ErrorAlert.vue"

export default {
  components: { AllEvents, SearchEvents, Loader, Featured, AppHeader, ErrorAlert },
  name: "Home",
  created() {
    this.fetchEvents();
  },
  computed: {
    ...mapState("events", ["allEvents", "filterKeyWord", "fetchingEvents"]),
    ...mapGetters("events", [
      "getFilteredEventsLength",
      "getFeaturedEventsLength",
    ]),
  },
  methods: {
    ...mapActions("events", ["fetchEvents"]),
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
