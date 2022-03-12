<template>
  <section  v-if="error" class="flex my-5 p-5 bg-red-500 rounded-md">
    <p class="text-white text-sm font-display">{{error || "Error Occured"}}</p>
  </section>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "ErrorAlert",
  computed: {
    ...mapState("events", ["error"]),
  },
}
</script>
