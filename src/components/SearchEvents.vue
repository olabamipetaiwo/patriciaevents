<template>
  <section class="mb-10">
    <div class="search__input">
      <search-icon />
      <input
        v-model="searchInput"
        type="text"
        placeholder="Search event by name or venue"
      />
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SearchEvents",
  methods: {
    ...mapActions("events", ["filterEvents"]),
  },
  watch: {
    searchInput() {
      this.filterEvents(this.searchInput)
    },
  },
  data() {
    return {
      searchInput: "",
    }
  },
}
</script>
