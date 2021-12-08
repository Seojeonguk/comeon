<template>
<div>
  <el-dialog custom-class="register-dialog" title="회원가입" v-model="state.dialogVisible" @close="handleClose">
    <el-form :model="state.form" :rules="state.rules" ref="registerForm" :label-position="state.form.align">
      <el-form-item prop="department" label="소속" :label-width="state.formLabelWidth" >
        <el-input v-model="state.form.department" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="position" label="직책" :label-width="state.formLabelWidth" >
        <el-input v-model="state.form.position" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="name" label="이름" :label-width="state.formLabelWidth" >
        <el-input v-model="state.form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="userid" label="아이디" :label-width="state.formLabelWidth" >
        <el-input v-model="state.form.userid" autocomplete="off" style="width:100px"></el-input>
        <el-button type="primary" @click="DuplicateIdCheck" style="float:right">중복 확인</el-button>
      </el-form-item>
      <el-form-item prop="password" label="비밀번호" :label-width="state.formLabelWidth">
        <el-input v-model="state.form.password" autocomplete="off" show-password></el-input>
      </el-form-item>
      <el-form-item prop="passwordConfirmation" label="비밀번호 확인" :label-width="state.formLabelWidth">
        <el-input v-model="state.form.passwordConfirmation" autocomplete="off" show-password></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary"
        @click="clickRegister();"
        :disabled="state.btn_disable"
        v-loading.lock="state.form.loaddingSpinner">회원가입</el-button>
      </span>
    </template>
  </el-dialog>
  </div>
</template>
<style>
.register-dialog {
  width: 400px !important;
  height: 575px;
}
.register-dialog .el-dialog__headerbtn {
  float: right;
}
.register-dialog .el-form-item__content {
  margin-left: 0 !important;
  float: right;
  width: 200px;
  display: inline-block;
}
.register-dialog .el-form-item {
  margin-bottom: 20px;
}
.register-dialog .el-form-item__error {
  font-size: 12px;
  color: red;
}
.register-dialog .el-input__suffix {
  display: none;
}
.register-dialog .el-dialog__footer {
  margin: 0 calc(50% - 80px);
  padding-top: 0;
  display: inline-block;
}
.register-dialog .dialog-footer .el-button {
  width: 120px;
}
</style>
<script>
import { reactive, computed, ref, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ElMessageBox } from 'element-plus';

export default {
  name: 'register-dialog',

  props: {
    open: {
      type: Boolean,
      default: false
    }
  },

  setup(props, { emit }) {
    const store = useStore()
    // 마운드 이후 바인딩 될 예정 - 컨텍스트에 노출시켜야함. <return>
    const router = useRouter()
    const registerForm = ref(null)
    /*
      // Element UI Validator
      // rules의 객체 키 값과 form의 객체 키 값이 같아야 매칭되어 적용됨
      //
    */
    //CustomValidate : 비밀번호 일치 체크
    const validatePasswordConfirm = (rule, value, callback) => {
      if (state.form.password != state.form.passwordConfirmation) {
          callback(new Error("입력한 비밀번호와 일치하지 않습니다."));
      } else {
          callback();
      }
    };
    //CustomValidate : 아이디 중복체크
    const validateIdDuplicate = (rule, value, callback) => {
      if (state.form.DuplicateId == true) {
          state.btn_disable = true;
          callback(new Error("이미 존재하는 아이디입니다."));
      } else {
          callback();
      }
      console.log(state.duplicateidchk, state.btn_disable);
    };
    const state = reactive({
      isError: false,
      btn_disable: true,        // 버튼활성화
      loaddingSpinner: false,   // 로딩스피너 변수
      DuplicateId: false,       // 아이디 중복체크
      form: {
        department: '',
        position: '',
        name: '',
        userid: '',
        password: '',
        passwordConfirmation: '',
        align: 'left'
      },
      rules: {
        department: [
          { max: 30, message: '최대 30자까지 입력 가능합니다', trigger: 'chagne' }
        ],
        position: [
          { max: 30, message: '최대 30자까지 입력 가능합니다', trigger: 'change' }
        ],
        name: [
          { required: true, message: '필수 입력 항목입니다', trigger: 'blur' },
          { max: 30, message: '최대 30자까지 입력 가능합니다', trigger: 'change' }
        ],
        userid: [
          { required: true, message: '필수 입력 항목입니다', trigger: 'blur' },
          { max: 16, message: '최대 16자까지 입력 가능합니다', trigger: 'change' },
          { validator: validateIdDuplicate, trigger: "blur" }
        ],
        password: [
          { required: true, message: '필수 입력 항목입니다', trigger: 'blur' },
          { min:9, message: '최소 9글자를 입력해야 합니다.', trigger: 'change'},
          { max:16, message: '최대 16글자까지 입력 가능합니다.', trigger: 'change'},
          { // pattern: /((?=.*\d)(?=.*[a-zA-Z])(?=.*[\W]).{9,16})/g,
            // pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\{\}\/?.,;:|\)*~`!^\-_+@\#$%&\\\=\(]).{9,16}$/,
            pattern:  /(?=.*[a-zA-Z])(?=.*\d)(?=.*[!"#$%&'()*+,./:<=>?@\\\^_`{|}~-])/g,
            message: "비밀번호는 영문, 숫자, 특수문자가 조합되어야 합니다.", trigger: "change" }
        ],
        passwordConfirmation: [
          { required: true, message: '필수 입력 항목입니다', trigger: 'blur' },
          { min:9, message: '최소 9글자를 입력해야 합니다.', trigger: 'change'},
          { max:16, message: '최대 16글자까지 입력 가능합니다.', trigger: 'change'},
          { validator: validatePasswordConfirm, trigger: "blur" }
        ],
      },
      dialogVisible: computed(() => props.open),
      formLabelWidth: '120px'
    })

    onMounted(() => {
      // console.log(loginForm.value)
    })

      const openMessage = () => {
        ElMessageBox.alert('회원가입이 완료되었습니다', 'Title', {
          confirmButtonText: 'OK',
          callback: (action) => {

            store.dispatch('root/requestLogin',
            { userid: state.form.userid, password: state.form.password })
              .then(function (result) {
                localStorage.setItem('jwt', result.data.accessToken)
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
            .catch(function (err) {})
              })

          }
        })
      };

      const errorMessage = (message) => {
        ElMessageBox.confirm(message, 'Title', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
        });
      };

    const clickRegister = function () {
      // 로그인 클릭 시 validate 체크 후 그 결과 값에 따라, 로그인 API 호출 또는 경고창 표시
      registerForm.value.validate((valid) => {
        if (valid) {
          state.form.loaddingSpinner = true;
          store.dispatch('root/requestRegister', {
            department: state.form.department,
            position: state.form.position,
            name: state.form.name,
            userid: state.form.userid,
            password: state.form.password,
          })
          .then(function (result) {
            openMessage()
            state.form.loaddingSpinner = false;
          })
          .catch(function (err) {
            errorMessage('회원가입에 실패했습니다')
            state.form.loaddingSpinner = false;
          })
        } else {
          errorMessage()
        }
      })
    };
    //중복확인 request
    const DuplicateIdCheck = function() {
      store.dispatch("root/requestDupl", {
        userid: state.form.userid
      })
      .then(function(result) {
          state.form.DuplicateId = false;
          console.log("store 정상", result, state.form.DuplicateId);
          registerForm.value.validate(valid => {});
          errorMessage('사용할 수 있는 아이디입니다.')
      })
      .catch(function(err) {
          //alert(err);

          state.form.DuplicateId = true;
          console.log("에러 발생!!", state.form.DuplicateId);
          registerForm.value.validate(valid => {});
      });
    };
    // 필수입력항목 입력시 버튼활성화
    watch(
        () => [
            state.form.userid,
            state.form.password,
            state.form.passwordConfirmation,
            state.form.name
        ],
        (first, second) => {
            registerForm.value.validate(valid => {
                if (valid) {
                    state.btn_disable = false;
                }
            });
        }
    );
    // 아이디 중복체크 통과시
    watch(
        () => [state.form.userid],
        (first, second) => {
            state.form.DuplicateId = false;
            registerForm.value.validate(valid => {});
        }
    );

    const handleClose = function () {
      // state.form.userid = ''
      // state.form.password = ''
      state.form.passwordConfirmation = ''
      state.form.department = ''
      state.form.name = ''
      state.form.position = ''
      emit('closeRegisterDialog')
    }

    return { registerForm, state, clickRegister, handleClose, openMessage, DuplicateIdCheck }
  }
}
</script>
