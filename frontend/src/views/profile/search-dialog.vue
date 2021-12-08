<template>
  <el-dialog
    custom-class="del-dialog"
    title="라이벌 검색 및 등록"
    v-model="state.dialogVisible"
    @close="handleClose"
  >
    <el-form
      :model="state.form"
      :rules="state.rules"
      ref="loginForm"
      :label-position="state.form.align"
    >
      검색할 라이벌 ID를 입력하세요
      <el-form-item prop="rival">
        <el-input v-model="state.form.rival" autocomplete="off"></el-input>
        <el-button
          type="primary"
          @click="searchRival"
          v-loading.lock="state.form.loaddingSpinner"
          >검색</el-button
        >
      </el-form-item>
    </el-form>
    <template #footer>
      <table v-if="state.rival.name !== ''">
        <thead>
          <tr>
            <th>라이벌 아이디</th>
            <th>이름</th>
            <th>점수</th>
            <th>티어</th>
          </tr>
        </thead>
        <tr>
          <td>{{ state.rival.userid }}</td>
          <td>{{ state.rival.name }}</td>
          <td>{{ state.rival.userScore }}</td>
          <td>{{ state.rival.userTier }}</td>
          <td>
            <button
              class="el-button--small el-button--danger"
              @click="clickfollow"
              v-loading.lock="state.rivalSpinner"
            >
              {{ state.isFollow }}
            </button>
          </td>
        </tr>
      </table>
    </template>
  </el-dialog>
</template>
<style>
.login-dialog {
  width: 400px !important;
  height: 300px;
}
.login-dialog .el-dialog__headerbtn {
  float: right;
}
.login-dialog .el-form-item__content {
  margin-left: 0 !important;
  width: 200px;
  display: flex !important;
}
.login-dialog .el-form-item {
  margin-bottom: 20px;
}
.login-dialog .el-form-item__error {
  font-size: 12px;
  color: red;
}
.login-dialog .el-input__suffix {
  display: none;
}
.login-dialog .el-dialog__footer {
  margin: 0 calc(50% - 80px);
  padding-top: 0;
  display: inline-block;
}
.login-dialog .dialog-footer .el-button {
  width: 120px;
}

td {
  padding: 0 3px;
}
</style>
<script>
import { reactive, computed, ref, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "del-dialog",

  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    const store = useStore();
    // 마운드 이후 바인딩 될 예정 - 컨텍스트에 노출시켜야함. <return>
    const router = useRouter();
    const loginForm = ref(null);

    const validinput = (rule, value, callback) => {
      if (state.form.user !== "회원탈퇴합니다.") {
        callback(new Error("입력이 틀립니다."));
      } else {
        state.btn_disable = false;
        callback();
      }
      console.log(state.duplicateidchk, state.btn_disable);
    };
    const state = reactive({
      btn_disable: true, //버튼활성화
      loaddingSpinner: false, //로딩스피너
      form: {
        rival: "",
        align: "left",
      },
      rules: {
        user: [
          { required: true, message: "필수 입력 항목입니다", trigger: "blur" },
          { validator: validinput, trigger: "change" },
        ],
      },
      dialogVisible: computed(() => props.open),
      formLabelWidth: "0px",
      userid: "",
      rival: {
        userid: "",
        name: "",
        userScore: "",
        userTier: "",
      },
      rivalSpinner: false,
      isFollow: "follow",
      rivals: [],
    });

    onBeforeMount(() => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      state.userid = userInfo.userId;
    });

    const searchRival = function () {
      // 아이디로 검색해서 값 받아오기
      state.form.loaddingSpinner = true;
      store
        .dispatch("root/getAllRival", {
          userId: state.userid,
        })
        .then(function (result) {
          state.rivals = result.data;

          // store.getters["root/getMyRivals"];
          console.log("데이터", result.data);
          store
            .dispatch("root/requestGetRival", { Id: state.form.rival })
            .then(function (result) {
              state.form.loaddingSpinner = false;
              console.log(result);
              state.rival.userid = result.data.userId;
              state.rival.name = result.data.name;
              state.rival.userScore = result.data.userScore;
              state.rival.userTier = result.data.userTier;
              // 초기화해서 한번 follow 로 바꾼 뒤에
              state.isFollow="follow";
              state.rivals.forEach((element) => {
                console.log("라이벌 확인", element);
                if (element.userId === state.form.rival) {
                  state.isFollow = "unFollow";
                }
              });
            })
            .catch(function (err) {
              alert(err);
              state.form.loaddingSpinner = false;
            });
        });
    };
    const clickfollow = function () {
      state.rivalSpinner = true;
      if (state.isFollow === "follow") {
        console.log("follow userid", state.userid);
        store
          .dispatch("root/requestMakeRival", {
            userId: state.userid,
            userRivalId: state.form.rival,
          })
          .then(function (result) {
            state.rivalSpinner = false;
            state.isFollow = "unfollow";
            const payload = {
              name: state.rival.name,
              userId: state.form.rival,
              userScore: state.rival.userScore,
              userTier: state.rival.userTier,
            };
            state.rivals.push(payload);
            store.commit("root/setMyRivals", state.rivals);
          })
          .catch(function (err) {
            state.rivalSpinner = false;
          });
      } else {
        store
          .dispatch("root/requestDeleteRival", {
            userId: state.userid,
            userRivalId: state.form.rival,
          })
          .then(function (result) {
            state.rivalSpinner = false;
            state.isFollow = "follow";
            for (let i = 0; i < state.rivals.length; i++) {
              if (state.rivals[i].userId === state.form.rival) {
                state.rivals.splice(state.rivals.indexOf(i), 1);
              }
            }
            store.commit("root/setMyRivals", state.rivals);
          });
      }
    };

    const handleClose = function () {
      state.rival.name = "";
      state.rival.userScore = "";
      state.rival.userTier = "";
      state.form.rival = "";
      state.isFollow = "follow";
      emit("closeSearchDialog");
      //돌아가서 리로드안하고 라이벌 목록 불러올수있음??
      //아니면 그냥 라이벌 목록 axios로 받아오면 되겠다. 다시
    };

    return { loginForm, state, searchRival, handleClose, clickfollow };
  },
};
</script>
