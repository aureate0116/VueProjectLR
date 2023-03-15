import { defineStore } from "pinia";
import axios from "axios";
const { VITE_API_PATH } = import.meta.env;

const resourcesStore = defineStore("resources", {
  state: () => ({
    resourcesData: [],
    commentsData: [],
    resourcesObj: {},
    isloading: true, //tbc
  }),
  getters: {},
  actions: {
    getResources() {
      axios
        .get(`${VITE_API_PATH}/resources`)
        .then((res) => {
          this.resourcesData = res.data;

          //用於初始渲染
          // this.getComments();
          // this.getAverageScore();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getComments() {
      axios
        .get(`${VITE_API_PATH}/comments`)
        .then((res) => {
          this.commentsData = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 從評論中 計算平均值 並寫回資源項目
    getAverageScore() {
      //this.resourcesObj = {}; // 每次重新計算
      this.commentsData.forEach((item) => {
        if (this.resourcesObj[item.resourceId] === undefined) {
          this.resourcesObj[item.resourceId] = {
            commentSum: 1, // 留言資料初始化
            scoreSum: item.score,
            averageScore: item.score,
          };
          axios
            .patch(`${VITE_API_PATH}/resources/${item.resourceId}`, {
              averageScore: item.score,
              commentSum: 1,
            })
            .then(() => {});
        } else {
          this.resourcesObj[item.resourceId].commentSum += 1;
          this.resourcesObj[item.resourceId].scoreSum += item.score;
          this.resourcesObj[item.resourceId].averageScore = (
            this.resourcesObj[item.resourceId].scoreSum /
            this.resourcesObj[item.resourceId].commentSum
          ).toFixed(1);

          axios
            .patch(`${VITE_API_PATH}/resources/${item.resourceId}`, {
              // averageScore: parseFloat(
              //   this.resourcesObj[item.resourceId].averageScore
              // ).toFixed(1),
              averageScore: this.resourcesObj[item.resourceId].averageScore,
              commentSum: this.resourcesObj[item.resourceId].commentSum,
            })
            .then(() => {
              // console.log("res", res.data);
              // console.log("更新後的資源資料", this.resourcesData);
            });
        }
      });
    },
  },
});

export default resourcesStore;
