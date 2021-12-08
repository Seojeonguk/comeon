<template>
  <el-dialog
    custom-class="conference-dialog"
    :title="state.title"
    v-model="state.dialogVisible"
    @close="handleClose"
  >
    <div class="labels">
      스터디 진행시간
    </div>
    <div class="info">
      {{ conference.callStartTime }} ~
      {{ conference.callEndTime }}
    </div>

    <div class="labels">
      스터디 진행일
    </div>
    <div class="info">
      <div>
        {{ conference.callStartDate }} ~
        {{ conference.callEndDate }}
      </div>
      <div>
        <span v-for="(day, idx) in days" :key="idx">
          {{ day }}
        </span>
      </div>
    </div>

    <div class="labels">
      현재인원
    </div>
    <div class="info">
      {{ conference.nowMember }} / {{ conference.maxMember }}
    </div>
    <div class="labels">
      설명
    </div>
    <div class="info">{{ conference.description }}</div>
    <div class="isShow">
      <joinCoference
        :isAvailable="state.isAvailable"
        @requestJoinBtn="requestJoin"
      />
    </div>
    <!-- <div class="move">
      <el-button type="text" class="moveBtn"
        ><i class="el-icon-arrow-left"></i
      ></el-button>
      <el-button type="text" class="moveBtn"
        ><i class="el-icon-arrow-right"></i
      ></el-button>
    </div> -->
  </el-dialog>
</template>

<script>
import { reactive, ref, computed, onBeforeUpdate } from "vue";
import { useStore } from "vuex";

import JoinCoference from "./joinCoference.vue";

export default {
  name: "conference-dialog",

  components: {
    JoinCoference
  },

  props: {
    open: {
      type: Boolean,
      default: false
    },
    conference: {
      type: Object
    }
  },

  setup(props, { emit }) {
    const store = useStore();
    const myId = JSON.parse(localStorage.getItem("userInfo"))
      ? JSON.parse(localStorage.getItem("userInfo")).userId
      : null;
    const myIntId = JSON.parse(localStorage.getItem("userInfo"))
      ? JSON.parse(localStorage.getItem("userInfo")).id
      : null;

    const dayKorean = ["월 ", "화 ", "수 ", "목 ", "금 ", "토 ", "일 "];
    const days = ref([]);

    const state = reactive({
      dialogVisible: computed(() => props.open),
      users: {},
      isAvailable: "",
      title: "",
      isShow: false,
      days: []
    });

    const handleClose = function() {
      emit("closeConferenceDialog");
    };

    const requestJoin = function() {
      store
        .dispatch("root/requestConferenceJoin", {
          conferenceId: props.conference.id,
          userId: myIntId
        })
        .then(function(result) {
          state.isAvailable = "alreadyIn";
        })
        .catch(function(err) {});
    };

    onBeforeUpdate(() => {
      state.title = props.conference.title;
      days.value = [];

      store
        .dispatch("root/getConferenceDetail", props.conference.id)
        .then(function(result) {
          state.users = result.data.users.map(user => user.user_id);

          if (state.users.includes(myId)) {
            state.isAvailable = "alreadyIn";
          } else if (
            props.conference.nowMember === props.conference.maxMember
          ) {
            state.isAvailable = "fullMember";
          } else if (myId === null) {
            state.isAvailable = "needLogin";
          } else {
            state.isAvailable = "available";
          }

          const daysArr = JSON.parse(props.conference.selectedDays);
          for (let i = 0; i < 7; i++) {
            if (daysArr[i] === true) {
              days.value.push(dayKorean[i]);
            }
          }
        })

        .catch(function(err) {});

      setTimeout(function() {
        state.isShow = !state.isShow;
        console.log(state.isShow);
      }, 400);
    });
    console.log(state.isShow);
    return {
      state,
      days,
      handleClose,
      requestJoin
    };
  }
};
</script>

<style>
.conference-dialog {
  width: 470px !important;
  height: 685px;
}

.conference-dialog .el-dialog__title {
  font-size: 1.5vw;
  font-weight: 500;
}

.conference-dialog .el-dialog__header {
  height: 3%;
  padding-top: 8%;
}

.labels {
  font-size: 1.125vw;
  text-align: start;
  padding-left: 3%;
  font-weight: 500;
}

.info {
  margin-top: 3%;
  margin-bottom: 10%;
  font-size: 1.0625vw;
  text-align: end;
  padding-right: 5%;
}

.isShow {
  padding-top: 30px;
  height: 50px;
}

.btnOr {
  padding: 5%;
}

.canNotIn {
  font-size: 1.125vw;
  font-weight: bold;
}

.move {
  margin-top: 6%;
  display: flex;
  justify-content: space-between;
}
</style>
