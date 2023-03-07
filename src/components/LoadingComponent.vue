<script>
import VueLoading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
export default {
  data() {
    return {
      isLoading: false,
      fullPage: true,
    };
  },
  components: {
    loading: VueLoading,
  },
};
</script>

<template>
  <loading
    v-model:active="isLoading"
    :can-cancel="true"
    :on-cancel="onCancel"
    :is-full-page="fullPage"
  />
</template>
