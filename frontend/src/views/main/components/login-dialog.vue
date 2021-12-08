<template>
  <el-dialog
  class="login-diaglo"
    custom-class="login-dialog"
    title="로그인"
    v-model="state.dialogVisible"
    @close="handleClose"
  >
    <el-form
      :model="state.form"
      :rules="state.rules"
      ref="loginForm"
      :label-position="state.form.align"
    >
      <el-form-item
        prop="userid"
        label="아이디"
        :label-width="state.formLabelWidth"
      >
        <el-input v-model="state.form.userid" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item
        prop="password"
        label="비밀번호"
        :label-width="state.formLabelWidth"
      >
        <el-input
          v-model="state.form.password"
          autocomplete="off"
          show-password
          @keyup.enter="clickLogin"
        ></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button
          type="primary"
          @click="clickLogin"
          :disabled="state.btn_disable"
          v-loading.lock="state.form.loaddingSpinner"
          >로그인</el-button
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
import { reactive, computed, ref, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ElMessageBox } from "element-plus";

export default {
  name: "login-dialog",

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

    const state = reactive({
      btn_disable: true, //버튼활성화
      loaddingSpinner: false, //로딩스피너
      form: {
        userid: "",
        password: "",
        align: "left",
      },
      rules: {
        userid: [
          { required: true, message: "필수입력 항목입니다", trigger: "blur" },
          {
            max: 16,
            message: "최대 16자까지 입력 가능합니다",
            trigger: "change",
          },
        ],
        password: [
          { required: true, message: "필수입력 항목입니다", trigger: "blur" },
          {
            min: 9,
            message: "최소 9글자를 입력해야 합니다.",
            trigger: "change",
          },
          {
            max: 16,
            message: "최대 16글자까지 입력 가능합니다.",
            trigger: "change",
          },
          {
            // pattern: /((?=.*\d)(?=.*[a-zA-Z])(?=.*[\W]).{9,16})/g,
            // pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\{\}\/?.,;:|\)*~`!^\-_+@\#$%&\\\=\(]).{9,16}$/,
            pattern:
              /(?=.*[a-zA-Z])(?=.*\d)(?=.*[!"#$%&'()*+,./:;<=>?@\\\^_`{|}~-])/g,
            message: "비밀번호는 영문, 숫자, 특수문자가 조합되어야 합니다.",
            trigger: "change",
          },
        ],
      },
      dialogVisible: computed(() => props.open),
      formLabelWidth: "120px",
    });

    onMounted(() => {
      // console.log(loginForm.value)
    });


    const errorMessage = (message) => {
      ElMessageBox.confirm(message, "Title", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
      });
    };
    const clickLogin = function () {
      // 로그인 클릭 시 validate 체크 후 그 결과 값에 따라, 로그인 API 호출 또는 경고창 표시
      loginForm.value.validate((valid) => {
        if (valid) {
          state.form.loaddingSpinner = true;
          store
            .dispatch("root/requestLogin", {
              userid: state.form.userid,
              password: state.form.password,
            })
            .then(function (result) {
               localStorage.setItem("jwt", result.data.accessToken);

              store
            .dispatch("root/requestUserInfo", {
              headers: { Authorization: `Bearer ${result.data.accessToken}` },
            })
            .then(function (result) {
              localStorage.setItem("userInfo", JSON.stringify(result.data));
              router.go();
              state.form.loaddingSpinner = false;
              handleClose();
            })
            .catch(function (err) {});
              state.form.loaddingSpinner = false;
            })
            .catch(function (err) {
              errorMessage("로그인 실패했습니다. 다시 입력해주세요");
              state.form.loaddingSpinner = false;
            });
        } else {
          alert("Validate error!");
          console.log("err", err);
        }
      });
    };
    // 로그인버튼 활성화
    watch(
      () => [state.form.userid, state.form.password],
      (first, second) => {
        loginForm.value.validate((valid) => {
          if (valid) {
            state.btn_disable = false;
          }
        });
      }
    );
    const handleClose = function () {
      state.form.userid = "";
      state.form.password = "";
      state.btn_disable = true;
      emit("closeLoginDialog");
    };

    return { loginForm, state, clickLogin, handleClose };
  },
};
</script>
