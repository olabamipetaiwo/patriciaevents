<template>
  <section class="mb-10">
    <div class="search__input">
      <search-icon />
      <input
        v-model="searchInput"
        data-cy="searchInput"
        type="text"
        placeholder="Search event by name or venue"
      />
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex"

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

<style lang="scss" scoped>
.search__input {
  @apply flex items-center p-4 bg-white border-grey-two border-2 rounded-lg w-full sm:max-w-md;

  svg {
    @apply flex-shrink-0;
  }

  input {
    @apply ml-2 flex-grow bg-transparent text-grey-four outline-none text-sm font-display placeholder-grey-four;
  }
}
</style>
