<template>
  <div class="container-fluid px-3 py-5 p-lg-0">
    <div class="container py-5 p-lg-8 text-center">
      <img src="@/assets/images/error404.png" alt="pageNotFound" />
      <!-- <h1 class="text-primary fs-4">404 此頁面不存在</h1> -->
      <h1 class="text-secondary fw-bold fs-3 mt-3">
        Opps! 你探索到未知的領域了!
      </h1>
      <p class="text-dark fs-5">
        系統將在
        <span class="text-secondary fs-2 fw-bold"> {{ remainingTime }} </span>
        秒內帶你回到首頁
      </p>
    </div>
  </div>
</template>

<script>
export default {
  //name: "NotFound",
  data() {
    return {
      remainingTime: 5,
    };
  },
  mounted() {
    const timer = setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
      } else {
        clearInterval(timer);
        this.$router.push("/");
      }
    }, 1000);
  },
};
</script>

<style scoped>
img {
  width: 200px;
}
</style>
