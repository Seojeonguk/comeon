<template>
  <el-dialog
    custom-class="updateCon-dialog"
    title="회의 수정"
    v-model="state.dialogVisible"
    @close="handleClose"
  >
    <el-form
      :model="state.form"
      :rules="state.rules"
      ref="updateForm"
      :label-position="state.form.align"
    >
      <el-form-item
        prop="purpose"
        label="용도"
        :label-width="state.formLabelWidth"
      >
      <el-select v-model="state.form.purpose" autocomplete="off">
        <el-option
            v-for="category in categoryList"
            :key="category.id"
            :label="category.name"
            :value="category.id"
        >
        </el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        prop="title"
        label="제목"
        :label-width="state.formLabelWidth"
      >
        <el-input v-model="state.form.title" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item
        prop="description"
        label="설명"
        :label-width="state.formLabelWidth"
      >
        <el-input
          type="textarea"
          v-model="state.form.description"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        prop="thumbnail"
        label="썸네일"
        :label-width="state.formLabelWidth"
      >
        <el-upload
          action="#"
          :multiple="false"
          :limit="1"
          accept=".png, .jpg, .jpeg, .gif"
          :file-list="fileList"
          :auto-upload="false"
          :on-change="handleChange"
          :on-remove="RemoveFile"
          list-type="picture"
        >
          <template #default>
            <span v-show="noFile"><i class="el-icon-plus"></i></span>
          </template>
        </el-upload>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button
          type="primary"
          @click="clickUpdateCon"
          :disabled="state.btn_disable"
          v-loading.lock="state.form.loaddingSpinner"
          >생성하기</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>
<style>
.updateCon-dialog {
  width: 520px !important;
  height: 550px;
}
.updateCon-dialog .el-dialog__headerbtn {
  float: right;
}
.updateCon-dialog .el-form-item__content {
  margin-left: 0 !important;
  float: right;
  width: 200px;
  display: inline-block;
}
.updateCon-dialog .el-form-item {
  margin-bottom: 20px;
}
.updateCon-dialog .el-form-item__error {
  font-size: 12px;
  color: red;
}
.updateCon-dialog .el-input__suffix {
  display: none;
}
.updateCon-dialog .el-dialog__footer {
  margin: 0 calc(50% - 80px);
  padding-top: 0;
  display: inline-block;
}
.updateCon-dialog .dialog-footer .el-button {
  width: 120px;
}
</style>
<script>
import { reactive, computed, ref, watch, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "update-dialog",

  props: {
    open: {
      type: Boolean,
      default: false
    },
    conferenceDetail: {
      type: Object
    }
  },

  setup(props, { emit }) {
    const store = useStore();
    const router = useRouter();
    const updateForm = ref(null);
    const fileList = [];
    var noFile = ref(true);
    const categoryList = ref(null);

    const state = reactive({
      // btn_disable: true,        //버튼활성화
      loaddingSpinner: false, //로딩스피너

      form: {
        purpose: "",
        title: "",
        description: "",
        thumbnail: fileList,
      },
      rules: {
        purpose: [],
        title: [
          { required: true, message: "필수입력 항목입니다", trigger: "blur" },
          {
            max: 30,
            message: "최대 30글자까지 입력 가능합니다.",
            trigger: "change"
          }
        ],
        description: [
          { required: true, message: "필수입력 항목입니다", trigger: "blur" }
        ],
        thumbnail: [
          { required: true, message: "필수입력 항목입니다", trigger: "blur" }
        ]
      },
      dialogVisible: computed(() => props.open),
      formLabelWidth: "120px"
    });

    const handleChange = function(file) {
      fileList.push(file);
      noFile.value = !noFile.value;
    };

    const RemoveFile = function(file) {
      fileList.pop(file);
      noFile.value = !noFile.value;
    };

    const clickUpdateCon = function() {
      updateForm.value.validate(valid => {
        if (valid) {
          state.form.loaddingSpinner = true;
          let form = new FormData();
          let upload_file = document.getElementsByName("file")[0].files[0];
          form.append("file", upload_file);
          form.append("title", state.form.title);
          form.append("conferenceCategoryId", state.form.purpose);
          form.append("description", state.form.description);
          form.append("conferenceId", props.conferenceDetail.id);
          store
            .dispatch("root/patchConference", form)
            .then(function(result) {
              router.go();
              state.form.loaddingSpinner = false;
              handleClose();
            })
            .catch(function(err) {
              alert(err);
              state.form.loaddingSpinner = false;
            });
        } else {
          alert("Validate error!");
          console.log("err", err);
        }
      });
    };

      watch(
        () => props.conferenceDetail,
        (newVal, oldVal) => {
            state.form.title = newVal.title;
            state.form.description = newVal.description;
        }
      );

    const handleClose = function() {
      state.form.purpose = "";
      state.form.title = "";
      state.form.explanation = "";
      state.form.thumbnail = "";
      state.btn_disable = true;
      emit("closeUpdateDialog");
    };

    onBeforeMount(() => {
      store.dispatch('root/getConferenceCategory')
          .then(function (result) {
            categoryList.value = result.data.categoryList;
          })
          .catch(function (err) {
          })
      });

    return {
      state,
      noFile,
      fileList,
      categoryList,
      updateForm,
      clickUpdateCon,
      handleClose,
      handleChange,
      RemoveFile,
      onBeforeMount
    };
  }
};
</script>
