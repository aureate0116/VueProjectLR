<script>
import VueLoading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
export default {
  data() {
    return {
      localLoading: this.isLoading,
      //isLoading: false,
      fullPage: true,
    };
  },
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  watch: {
    isLoading(newValue) {
      this.localLoading = newValue;
    },
  },
  components: {
    loading: VueLoading,
  },
  // created() {
  //   this.isLoading = true; // 在 created 鉤子中啟用 loading
  // },
};
</script>

<template>
  <loading
    v-model:active="localLoading"
    :can-cancel="true"
    :on-cancel="onCancel"
    :is-full-page="fullPage"
  />
</template>
