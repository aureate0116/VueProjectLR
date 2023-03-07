import { defineStore } from "pinia";
import axios from "axios";
// import VueAxios from "vue-axios";

const { VITE_API_PATH } = import.meta.env;

const resourcesStore = defineStore("resources", {
  state: () => ({
    resourcesData: [],
    commentsData: [],
    resourcesObj: {},
    // goodRateTabData: [],
    // freeTabData: [],
  }),
  actions: {
    getResources() {
      axios
        .get(`${VITE_API_PATH}/resources`)
        .then((res) => {
          this.resourcesData = res.data;
          // this.goodRateTabData = this.resourcesData
          //   .filter((value) => {
          //     return value.topics === "JavaScript";
          //   })
          //   .slice(-6);
          // this.freeTabData = this.resourcesData
          //   .filter((value) => {
          //     return value.type === "線上課程" && value.price === "免費";
          //   })
          //   .slice(-6);

          this.getComments();
          // console.log(this.resourcesData);
          // console.log(this.getComments());
          // console.log(this.getAverageScore());
        })
        .catch((err) => {
          console.log(err);
        });

      // axios
      //   .get(`${VITE_API_PATH}/resources`)
      //   .then((res) => {
      //     this.resourcesData = res.data;
      //     this.goodRateTabData = this.resourcesData
      //       .filter((value) => {
      //         return value.topics === "JavaScript";
      //       })
      //       .slice(-6);
      //     this.freeTabData = this.resourcesData
      //       .filter((value) => {
      //         return value.type === "線上課程" && value.price === "免費";
      //       })
      //       .slice(-6);

      //     return this.resourcesData;
      //   })
      //   .then(() => {
      //     return this.goodRateTabData;
      //   })
      //   .then(() => {
      //     return this.getComments();
      //   })
      //   .then(() => {
      //     return this.getAverageScore();
      //   })
      //   .then(() => {
      //     document.title = "Eng!neer 程式學習資源網";
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });

      //   axios
      //     .get(`${VITE_API_PATH}/resources`)
      //     .then((res) => {
      //       this.resourcesData = res.data;
      //       this.goodRateTabData = this.resourcesData
      //         .filter((value) => {
      //           return value.topics === "JavaScript";
      //         })
      //         .slice(-6);
      //       this.freeTabData = this.resourcesData
      //         .filter((value) => {
      //           return value.type === "線上課程" && value.price === "免費";
      //         })
      //         .slice(-6);

      //       return this.getComments();
      //     })
      //     .then(() => {
      //       return this.getAverageScore();
      //     })
      //     .then(() => {
      //       document.title = "Eng!neer 程式學習資源網";
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      // },
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
    // 取得各筆資源的 評論數、平均分數
    getAverageScore() {
      this.resourcesObj = {}; // 每次重新計算
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
            .then(() => {
              //console.log("res", res.data);
              //console.log(this.resourcesObj);
              //console.log("更新後的資源資料", this.resourcesData);
            });
        } else {
          this.resourcesObj[item.resourceId].commentSum += 1;
          this.resourcesObj[item.resourceId].scoreSum += item.score;
          this.resourcesObj[item.resourceId].averageScore = (
            this.resourcesObj[item.resourceId].scoreSum /
            this.resourcesObj[item.resourceId].commentSum
          ).toFixed(1);

          axios
            .patch(`${VITE_API_PATH}/resources/${item.resourceId}`, {
              averageScore: parseFloat(
                this.resourcesObj[item.resourceId].averageScore
              ).toFixed(1),
              commentSum: this.resourcesObj[item.resourceId].commentSum,
            })
            .then(() => {
              // console.log("res", res.data);
              // console.log("更新後的資源資料", this.resourcesData);
            });
        }

        // console.log("resourcesData", this.resourcesData);
        // console.log("resourcesObj", this.resourcesObj);
      });
    },
  },
});

export default resourcesStore;
