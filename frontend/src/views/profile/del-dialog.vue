<template>
  <el-dialog
    custom-class="del-dialog"
    title="회원탈퇴"
    v-model="state.dialogVisible"
    @close="handleClose"
  >
    <el-form
      :model="state.form"
      :rules="state.rules"
      ref="loginForm"
      :label-position="state.form.align"
    >
      다음을 입력하세요
      <el-form-item
        prop="user"
        label="회원탈퇴합니다."
        :label-width="state.formLabelWidth"
      >
        <el-input v-model="state.form.user" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button
          type="primary"
          @click="clickDel"
          :disabled="state.btn_disable"
          v-loading.lock="state.form.loaddingSpinner"
          >회원탈퇴</el-button
        >
      </span>
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
  float: right;
  width: 200px;
  display: inline-block;
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
        user: "",
        align: "left",
      },
      rules: {
        user: [
          { required: true, message: "필수 입력 항목입니다", trigger: "blur" },
          { validator: validinput, trigger: "change" },
        ],
      },
      dialogVisible: computed(() => props.open),
      formLabelWidth: "120px",
      userid: "",
    });

    onBeforeMount(() => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      state.userid = userInfo.userId;
    });

    const clickDel = function () {
      // 로그인 클릭 시 validate 체크 후 그 결과 값에 따라, 로그인 API 호출 또는 경고창 표시
      loginForm.value.validate((valid) => {
        if (valid) {
          state.form.loaddingSpinner = true;
          store
            .dispatch("root/requestRemove", { userId: state.userid })
            .then(function (result) {
              state.form.loaddingSpinner = false;
              localStorage.removeItem("jwt");
              localStorage.removeItem("userInfo");
              handleClose();

              async function restart() {
                const first = await router.replace("/");
                const second = await location.reload();
              }
              restart();
            })
            .catch(function (err) {
              alert(err);
              state.form.loaddingSpinner = false;
            });
        } else {
          alert("Validate error!");
          console.log("err", err);
        }
      });
    };

    const handleClose = function () {
      emit("closeDelDialog");
    };

    return { loginForm, state, clickDel, handleClose };
  },
};
</script>
