<template>
<div>
  <el-dialog custom-class="profile-dialog" title="프로필" v-model="state.dialogVisible" @close="handleClose">
    <el-form :model="state.form" :rules="state.rules" ref="profileForm" :label-position="state.form.align">
      <el-form-item prop="department" label="소속" :label-width="state.formLabelWidth" >
        <el-input v-model="state.form.department" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="position" label="직책" :label-width="state.formLabelWidth" >
        <el-input v-model="state.form.position" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="name" label="이름" :label-width="state.formLabelWidth" >
        <el-input v-model="state.form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="id" label="아이디" :label-width="state.formLabelWidth" >
        {{ userId }}
      </el-form-item>
      <el-form-item prop="password" label="비밀번호" :label-width="state.formLabelWidth">
        <el-input v-model="state.form.password" autocomplete="off" show-password></el-input>
      </el-form-item>
      <el-form-item prop="passwordConfirmation" label="비밀번호 확인" :label-width="state.formLabelWidth">
        <el-input v-model="state.form.passwordConfirmation" autocomplete="off" show-password></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="profile-footer">
        <el-button type="primary"
        @click="clickUpdate"
        :disabled="state.btn_disable"
        v-loading.lock="state.form.loaddingSpinner">수정</el-button>
      </span>
    </template>
  </el-dialog>
  </div>
</template>
<style>
.profile-dialog {
  width: 400px !important;
  height: 575px;
}
.profile-dialog .el-dialog__headerbtn {
  float: right;
}
.profile-dialog .el-form-item__content {
  margin-left: 0 !important;
  float: right;
  width: 200px;
  display: inline-block;
}
.profile-dialog .el-form-item {
  margin-bottom: 20px;
}
.profile-dialog .el-form-item__error {
  font-size: 12px;
  color: red;
}
.profile-dialog .el-input__suffix {
  display: none;
}
.profile-dialog .el-dialog__footer {
  margin: 0 calc(50% - 80px);
  padding-top: 0;
  display: inline-block;
}
.profile-dialog .dialog-footer .el-button {
  width: 120px;
}
</style>
<script>
import { reactive, computed, ref, watch, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
// import { ElMessageBox } from 'element-plus';

export default {
  name: 'update-dialog',

  props: {
    open: {
      type: Boolean,
      default: false
    }
  },

  setup(props, { emit }) {
    const store = useStore()
    const router = useRouter()
    const profileForm = ref(null)
    const userId = ref(null)

    const validatePasswordConfirm = (rule, value, callback) => {
      if (state.form.password != state.form.passwordConfirmation) {
          callback(new Error("입력한 비밀번호와 일치하지 않습니다."));
      } else {
          callback();
      }
    };

    const state = reactive({
      isError: false,
      btn_disable: true,        // 버튼활성화
      loaddingSpinner: false,   // 로딩스피너 변수
      form: {
        department: '',
        position: '',
        name: '',
        id: '',
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
        password: [
          { required: true, message: '필수 입력 항목입니다', trigger: 'blur' },
          { min:9, message: '최소 9글자를 입력해야 합니다.', trigger: 'change'},
          { max:16, message: '최대 16글자까지 입력 가능합니다.', trigger: 'change'},
          { pattern:  /(?=.*[a-zA-Z])(?=.*\d)(?=.*[!"#$%&'()*+,./:<=>?@\\\^_`{|}~-])/g,
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

     onBeforeMount(() => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
        userId.value = userInfo.userId;
        state.form.department = userInfo.department;
        state.form.position = userInfo.position;
        state.form.name = userInfo.name;
     });

      // const openMessage = () => {
      //   ElMessageBox.alert('회원가입이 완료되었습니다', 'Title', {
      //     confirmButtonText: 'OK',
      //     callback: (action) => {
      //       emit('closeRegisterDialog')
      //       store.dispatch('root/requestLogin',
      //       { id: state.form.id, password: state.form.password })
      //         .then(function (result) {
      //           localStorage.setItem('jwt', result.data.accessToken)
      //           router.go()
      //         })
      //     }
      //   })
      // };

      // const errorMessage = () => {
      //   ElMessageBox.confirm('회원가입에 실패했습니다', 'Title', {
      //     confirmButtonText: 'OK',
      //     cancelButtonText: 'Cancel',
      //   });
      // };

    const clickUpdate = function () {
      profileForm.value.validate((valid) => {
        if (valid) {
          state.form.loaddingSpinner = true;
          store.dispatch('root/requestPatch', {
            department: state.form.department,
            position: state.form.position,
            name: state.form.name,
            userId: userId.value,
            password: state.form.password,
          })
          .then(function (result) {
            //openMessage()
            state.form.loaddingSpinner = true;
            handleClose();
            router.go()

          })
          .catch(function (err) {
            //errorMessage()
            state.form.loaddingSpinner = true;
          })
        } else {
          //errorMessage()
        }
      })
    };

    // 필수입력항목 입력시 버튼활성화
    watch(
        () => [
            state.form.password,
            state.form.passwordConfirmation,
        ],
        (first, second) => {
            profileForm.value.validate(valid => {

        if (valid) {
            state.btn_disable = false;
              }
            });
        }
    );

    const handleClose = function () {
      emit('closeUpdateDialog')
    }

    return { profileForm, state, handleClose, clickUpdate, userId, onBeforeMount }
  }
}
</script>
