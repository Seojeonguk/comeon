<template>
  <h2>랭킹 페이지</h2>
  <div class="showMyRank">{{ myId }}님은 현재 {{ state.myRank }}등입니다.</div>
  <div class="rowR">
    <div class="colR" :span="8" v-for="(topUser, idx) in state.topThree" :key="idx">
      <el-card :body-style="{ padding: '0px' }" shadow="hover">
        <h3>{{ idx + 1 }}등</h3>
        <img
          :src="require(`@/assets/images/${topUser.userTier}.png`)"
        />
        <div style="padding: 14px;">
          <h4>{{ topUser.userId }}</h4>
          <div class="bottom">
            <div class="userScore">점수 : {{ topUser.userScore }}</div>
            <div class="followBtn" v-if="topUser.userId != myId">
              <button
                class="el-button--small el-button--danger"
                @click="makeRival(topUser.userId)"
                v-if="!state.rival.includes(topUser.userId)"
              >
                follow
              </button>
              <button
                class="el-button--small el-button--danger"
                @click="cancelRival(topUser.userId)"
                v-else
              >
                unfollow
              </button>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>

  <el-divider></el-divider>

  <div class="rowR" :gutter="12">
    <div class="colR" :span="24">
      <el-card shadow="hover" v-for="(user, idx) in state.pageItems" :key="idx">
        <div class="userInfo" v-bind:class="{ myRank: user.myRank }">
          <el-col :span="6" class="userRank">
            {{ user.rank }} {{ user.userTier }}
          </el-col>
          <el-col :span="6" class="userId">
            {{ user.userId }}
          </el-col>
          <el-col :span="6" class="lastScore">
            {{ user.userScore }}
          </el-col>
          <el-col :span="6" class="lastScore">
            <div class="followBtn" v-if="user.userId != myId">
              <button
                class="el-button--small el-button--danger"
                @click="makeRival(user.userId)"
                v-if="!state.rival.includes(user.userId)"
              >
                follow
              </button>
              <button
                class="el-button--small el-button--danger"
                @click="cancelRival(user.userId)"
                v-else
              >
                unfollow
              </button>
            </div>
          </el-col>
        </div>
      </el-card>
    </div>
  </div>
  <el-pagination
    :page-size="10"
    :pager-count="11"
    layout="prev, pager, next"
    :total="state.users.length"
    @current-change="setPage"
  >
  </el-pagination>
</template>

<script>
import { reactive, onBeforeMount, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "ranking",

  setup() {
    const store = useStore();
    const myId = JSON.parse(localStorage.getItem("userInfo"))["userId"];

    const state = reactive({
      topThree: [],
      users: [],
      myRank: 0,
      rival: [],
      page: 1,
      pageSize: 10,
      pageItems: computed(() => {
        return state.users.slice(
          state.pageSize * state.page - state.pageSize,
          state.pageSize * state.page
        );
      })
    });

    const setPage = function(val) {
      state.page = val;
    };

    onBeforeMount(() => {
      store
        .dispatch("root/getRanking")
        .then(function(result) {
          const allUsers = result.data;

          state.topThree = [...allUsers.slice(0, 3)];
          state.users = [...allUsers.slice(3)];
          for (let i = 0; i < state.users.length; i++) {
            state.users[i] = { ...state.users[i], rank: i + 4 };
            if (state.users[i].userId === myId) {
              state.myRank = state.users[i].rank;
            }
          }
        })
        .catch(function(err) {});

      store
        .dispatch("root/getAllRival", {
          userId: myId
        })
        .then(function(result) {
          state.rival = result.data.map(rival => rival.userId);
        });
    });

    const makeRival = function(rivalId) {
      store
        .dispatch("root/requestMakeRival", {
          userId: myId,
          userRivalId: rivalId
        })
        .then(function(result) {
          state.rival.push(rivalId);
        })
        .catch(function(err) {});
    };

    const cancelRival = function(rivalId) {
      store
        .dispatch("root/requestDeleteRival", {
          userId: myId,
          userRivalId: rivalId
        })
        .then(function(result) {
          const index = state.rival.indexOf(rivalId);
          state.rival = [
            ...state.rival.slice(0, index),
            ...state.rival.slice(index + 1)
          ];
        });
    };

    return {
      state,
      myId,
      setPage,
      makeRival,
      cancelRival
    };
  }
};
</script>

<style scoped>
.userInfo {
  display: flex;
  justify-content: space-between;
}

.showMyRank {
  text-align: end;
  margin-bottom: 3%;
}

.rowR {
  display: flex;
  justify-content: space-between;
}

.colR {
  flex-grow: 1;
}

.userRank {
  text-align: start;
}

.firstTier {
  text-align: start;
}

.lastScore {
  text-align: end;
}

</style>
