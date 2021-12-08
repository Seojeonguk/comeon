<template>
  <div>
    <div class="main">
      <div class="left">
        <div :class="state.form.tier"></div>
      </div>
      <div class="right">
        <div class="rank">
          {{ state.form.tier }}
        </div>
        <div class="score">점수: {{ state.form.score }} score</div>
      </div>
    </div>
    <div class="footer">
      <div class="left">
        <div class="greeting">{{ state.form.name }}님 반갑습니다.</div>
        <div class="wrapButton">
          <el-button @click="onOpenUpdateDialog">프로필</el-button>
          <el-button @click="onOpenDelDialog">회원 탈퇴</el-button>
        </div>
      </div>
      <div class="right">
        <div class="rival">
          라이벌 목록 &nbsp;
          <el-button @click="onOpenSerarchDialog">라이벌 설정</el-button>
        </div>
        <div class="rivalList">
          <table >
            <thead>
              <tr>
                <th>라이벌 아이디</th>
                <th>이름</th>
                <th>점수</th>
                <th>티어</th>
              </tr>
            </thead>
            <tr
              v-for="(item, index) in state.rival"
              :key="index"
              :index="index.toString()"
            >
              <td>{{ item.userId }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.userScore }}</td>
              <td>{{ item.userTier }}</td>
              <td>
                <button
                  @click="clickUnFollow(item.userId)"
                  class="el-button--small el-button--danger"
                >
                  unfollow
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
  <update-dialog
    :open="updateDialogOpen"
    @closeUpdateDialog="onCloseUpdateDialog"
  />
  <del-dialog :open="delDialogOpen" @closeDelDialog="onCloseDelDialog" />
  <search-dialog
    :open="searchDialogOpen"
    @closeSearchDialog="onCloseSearchDialog"
  />
</template>

<script>
import { reactive, computed, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import UpdateDialog from "../main/components/update-dialog.vue";
import DelDialog from "./del-dialog.vue";
import SearchDialog from "./search-dialog.vue";

export default {
  name: "profile",
  components: {
    UpdateDialog,
    DelDialog,
    SearchDialog,
  },
  props: {
    height: {
      type: String,
      default: "70px",
    },
  },

  data() {
    return {
      updateDialogOpen: false,
      delDialogOpen: false,
      searchDialogOpen: false,
    };
  },
  methods: {
    onOpenUpdateDialog() {
      this.updateDialogOpen = true;
    },
    onCloseUpdateDialog() {
      this.updateDialogOpen = false;
    },
    onOpenDelDialog() {
      this.delDialogOpen = true;
    },
    onCloseDelDialog() {
      this.delDialogOpen = false;
    },
    onOpenSerarchDialog() {
      this.searchDialogOpen = true;
    },
    onCloseSearchDialog() {
      this.searchDialogOpen = false;
    },
  },

  setup(props, { emit }) {
    const store = useStore();
    const router = useRouter();

    const state = reactive({
      form: {
        userid: "",
        name: "",
        score: "",
        tier: "",
        align: "left",
      },
      rival: computed(() => store.getters["root/getMyRivals"]),
    });
    onBeforeMount(() => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      state.form.userid = userInfo.userId;
      state.form.name = userInfo.name;
      let payload = {
        headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
      }
      store.dispatch('root/requestUserInfo', payload)
        .then((res) => {
          localStorage.setItem("userInfo", JSON.stringify(res.data));
          const userInfo = JSON.parse(localStorage.getItem("userInfo"));
          state.form.score = userInfo.userScore;
          state.form.tier = userInfo.userTier;
        })
        .catch((err) => {
          console.log(err)
        })
      //유저 점수랑 유저 티어 가져오기 => localstorage 에 있는 내용을 들고오면 된다.
      store
        .dispatch("root/getAllRival", {
          userId: state.form.userid,
        })
        .then(function (result) {
          console.log(result);

          store.commit("root/setMyRivals", result.data);
        });
    });
    const clickUnFollow = function (userid) {
      store
        .dispatch("root/requestDeleteRival", {
          userId: state.form.userid, //나
          userRivalId: userid, //라이벌
        })
        .then(function (result) {
          console.log("then ",store.getters["root/getMyRivals"])
          state.rivalSpinner = false;
          // vuex state rivals 에서 하나 지우기
          for (let i = 0; i < state.rival.length; i++) {
            console.log("userId",state.rival[i].userId )
            if (state.rival[i].userId === userid) {
              state.rival.splice(state.rival.indexOf(i), 1);
              console.log("state rival",state.rival);
            }
          }
          store.commit("root/setMyRivals", state.rival);
        });
    };
    const getAllRival = function () {
      store
        .dispatch("root/getAllRival", {
          userId: state.form.userid,
        })
        .then(function (result) {
          console.log(result);
          state.rival = result.data;
        });
    };
    return { store, router, state, onBeforeMount, clickUnFollow, getAllRival };
  },
};
</script>

<style>
.main {
  display: flex;
  flex-direction: row;
  height: 45vh;
  padding: 3vh;
}
.footer {
  display: flex;
  flex-direction: row;
  height: 20vh;
}
.left {
  width: 50%;
}
.right {
  width: 50%;
}
.rank {
  font-size: 1em;
}
.score {
  font-size: 3em;
}
.greeting {
  font-size: 2em;
}
.rival {
  font-size: 2em;
  text-align: left;
}
.el-table {
  padding: 3vh;
}
.normal {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("../../assets/images/normal.png");
}
.white {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("../../assets/images/white.png");
}
.silver {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("../../assets/images/silver.png");
}
.gold {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("../../assets/images/gold.png");
}
.vip {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("../../assets/images/vip.png");
}
.vvip {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("../../assets/images/vvip.png");
}

@media (max-width: 700px) {
  .main {
    flex-direction: column;
  }
  .footer {
    flex-direction: column;
  }
  .left {
    width: 100%;
    height: 30vh;
  }
  .right {
    width: 100%;
  }
  .rank {
    font-size: 1em;
    padding: 1vh;
  }
  .score {
    font-size: 1em;
    padding: 1vh;
  }
  .greeting {
    font-size: 2em;
    padding: 1vh;
  }
  .wrapButton {
    padding: 1vh;
  }
  .rival {
    font-size: 1em;
    height: 10vh;
    padding: 3vh;
  }
  .normal .white .silver .gold .vip .vvip {
    height: 100%;
    width: 100%;
  }
}
</style>
