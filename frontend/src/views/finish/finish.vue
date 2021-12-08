<template>
  <div class="page-body">
    <div class="section">
      <div
        class="heading animate__animated  animate__slideInLeft animate__slow"
      >
        {{ showDate }}
      </div>

      <div class="conferenceInfo">
        <div class="label">참여한 방 :</div>
        <div class="content">{{ state.conferenceTitle }}</div>
      </div>

      <div class="conferenceInfo">
        <div class="label">공부시간 :</div>
        <div class="content">{{ state.timeTaken }}</div>
      </div>

      <div class="scores">
        <div>+{{ state.thisConferenceScore }}</div>

        <div class="animate__animated animate__fadeIn">
          현재 나의 점수 : {{ change_point }}
        </div>
      </div>

      <div class="btns">
        <el-button @click="goMain">다른 공부방 가기</el-button>
        <el-button @click="goProfile">내 점수 보러가기</el-button>
      </div>
    </div>

    <div class="section image">
      <img :src="require(`@/assets/images/${userTier}.png`)" />
      <div
        class="heading2 animate__animated  animate__slideInRight animate__slow"
      >
        현재 나의 티어
      </div>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, ref, reactive } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "finish",

  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    const today = new Date();
    const year = today.getFullYear(); // 년도
    const month = today.getMonth() + 1; // 월
    const date = today.getDate(); // 날짜
    const day = today.getDay(); // 요일
    const week = new Array(
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일"
    );

    const showDate = `${year}.${month}.${date} ${week[day]}`;
    const change_point = ref(0);
    const userTier = JSON.parse(localStorage.getItem("userInfo")).userTier;

    const state = reactive({
      conferenceId: "",
      conferenceTitle: {},
      timeTaken: "",
      thisConferenceScore: 0,
      start_point: 0
    });

    onBeforeMount(() => {
      state.conferenceId = route.params.conferenceId;

      store
        .dispatch("root/getConferenceDetail", state.conferenceId)
        .then(function(result) {
          state.conferenceTitle = result.data.title;
          console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!1', state.conferenceTitle)
        })
        .catch(function(err) {
          console.log(err)
        });

      const myIntId = JSON.parse(localStorage.getItem("userInfo")).id;

      store
        .dispatch("root/getMyConferenceHistory", myIntId)
        .then(function(result) {
          console.log("결과입니다요", result);
          const insertTime = new Date(
            result.data[0].insertTime
          );
          const outTime = new Date(result.data[0].outTime);
          const time =
            outTime.getHours() * 60 +
            outTime.getMinutes() -
            (insertTime.getHours() * 60 + insertTime.getMinutes());
          var hours = Math.floor(time / 60);
          var minutes = time % 60;
          state.timeTaken = hours + "시간 " + minutes + "분";

          state.thisConferenceScore =
            result.data[0].userScore;
          state.start_point = result.data[0].userYetScore;
          console.log(result.data[0]);

          change_point.value = state.start_point;
          const goal = state.thisConferenceScore + state.start_point;

          const change_num = function() {
            if (goal - change_point.value > 30) {
              change_point.value += 10;
            } else if (goal - change_point.value > 10) {
              change_point.value += 5;
            }
          };

          const change_num2 = function() {
            if (goal - change_point.value > 10) {
              change_point.value += 2;
            }
          };

          const change_num3 = function() {
            if (goal - change_point.value > 0) {
              change_point.value += 1;
            }
          };

          setInterval(change_num, 100);
          setInterval(change_num2, 200);
          setInterval(change_num3, 300);
        })
        .catch(function(err) {});
    });

    const goMain = () => {
      const MenuItems = store.getters["root/getMenus"];
      let keys = Object.keys(MenuItems);
      router.push({
        name: keys[0]
      });
    };

    const goProfile = () => {
      const MenuItems = store.getters["root/getMenus"];
      let keys = Object.keys(MenuItems);
      router.push({
        name: keys[4]
      });
    };

    return {
      showDate,
      userTier,
      state,
      change_point,
      goMain,
      goProfile
    };
  }
};
</script>

<style>
@media (min-width: 701px) {
  .page-body {
    padding: 5% 10% 10% 5%;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .section {
    width: 50%;
  }
}

.heading {
  text-align: start;
  font-size: 3vw;
  margin-bottom: 7%;
}

.heading2 {
  text-align: end;
  font-size: 2.5vw;
  margin-bottom: 7%;
  margin-top: 7%;
}

.conferenceInfo {
  font-size: 2.125vw;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5%;
}

.scores {
  padding-top: 5%;
  text-align: end;
  font-size: 1.5625vw;
  margin-bottom: 20%;
}
.btns {
  display: flex;
  justify-content: space-around;
}

@media only screen and (max-width: 700px) {
  .section {
    width: 90%;
    padding: 5%;
  }
  .heading {
    font-size: 4vw;
  }
  .conferenceInfo {
    font-size: 3vw;
  }
  .scores {
    font-size: 2.5vw;
  }
  .heading2 {
    font-size: 2.5vw;
  }
}

.animate__fadeIn {
  --animate-duration: 6s;
}

.image {
  margin-left: 20%;
}
</style>
