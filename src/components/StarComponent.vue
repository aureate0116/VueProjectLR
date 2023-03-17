<template>
  <!-- star -->
  <div class="d-flex justify-content-between align-items-center">
    <div v-if="commentSum === 0 || commentSum === undefined">
      <span class="fs-8 text-gray">尚無評價</span>
    </div>
    <div v-else class="d-flex align-items-center flex-wrap">
      <!-- 評價沒有小數點後的值時 -->
      <span 
        class="fs-7 fw-bold text-secondary me-1"
        v-if="averageScore !== undefined && commentSum !== 0"
      >
        <span :style="{ color: color }" v-if="isNaN(parseInt(averageScore.toString().charAt(2)))"
          >{{ averageScore }}.0</span
        >
        <span :style="{ color: color }" v-else>{{ averageScore }}</span>
      </span>

      <ul class="d-flex lh-1">
        <li>
          <span
            :style="{ color: color }"
            v-for="star in parseInt(averageScore.toString().charAt(0))"
            :key="star + 1"
            class="material-icons material-icons-sharp fs-8"
            >star</span
          >
        </li>

        <li
          v-if="
            parseInt(averageScore.toString().charAt(2)) <= 2 ||
            isNaN(parseInt(averageScore.toString().charAt(2))) ||
            typeof parseInt(averageScore.toString().charAt(2)) === 'undefined'
          "
        >
          <span
            :style="{ color: color }"
            v-for="star in 5 - parseInt(averageScore.toString().charAt(0))"
            :key="star"
            class="material-icons material-icons-sharp fs-8"
            >star_outline</span
          >
        </li>

        <!-- 3~7 -->
        <li
          v-else-if="
            parseInt(averageScore.toString().charAt(2)) >= 3 &&
            parseInt(averageScore.toString().charAt(2)) <= 7
          "
        >
          <span
            :style="{ color: color }"
            class="material-icons material-icons-sharp fs-8"
            >star_half</span
          >

          <span
            :style="{ color: color }"
            v-for="star in 5 - parseInt(averageScore.toString().charAt(0)) - 1"
            :key="star"
            class="material-icons material-icons-sharp fs-8"
            >star_outline</span
          >
        </li>

        <li v-else-if="parseInt(averageScore.toString().charAt(2)) >= 8">
          <span
            :style="{ color: color }"
            class="material-icons material-icons-sharp fs-8"
            >star</span
          >

          <span
            :style="{ color: color }"
            v-for="star in 5 - parseInt(averageScore.toString().charAt(0)) - 1"
            :key="star"
            class="material-icons material-icons-sharp fs-8"
            >star_half</span
          >
        </li>
      </ul>

      <span :style="{ color: color }" class="fs-8">
        ( {{ commentSum }} )</span
      >
    </div>
  </div>
  <!-- end star -->
</template>

<script>
export default {
  props: {
    commentSum: {
      type: Number,
      required: true,
    },
    averageScore: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      default: "#c2873a",
    },
  },
};
</script>
