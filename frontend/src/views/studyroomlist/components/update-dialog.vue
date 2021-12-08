<template>
  <el-dialog
    custom-class="create-dialog"
    title="생성하기"
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
        prop="maxMember"
        label="인원"
        :label-width="state.formLabelWidth"
      >
        <el-select v-model="state.form.maxMember" autocomplete="off">
          <el-option
            v-for="(num, idx) in [2, 3, 4]"
            :key="idx"
            :label="num"
            :value="num"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        prop="selectedDays"
        label="요일 선택"
        :label-width="state.formLabelWidth"
      >
        <div class="days">
          <div
            class="day"
            @click="selectDay(6)"
            :class="{ blue: state.form.selectedDays[6] }"
          >
            S
          </div>
          <div
            class="day"
            @click="selectDay(0)"
            :class="{ blue: state.form.selectedDays[0] }"
          >
            M
          </div>
          <div
            class="day"
            @click="selectDay(1)"
            :class="{ blue: state.form.selectedDays[1] }"
          >
            T
          </div>
          <div
            class="day"
            @click="selectDay(2)"
            :class="{ blue: state.form.selectedDays[2] }"
          >
            W
          </div>
          <div
            class="day"
            @click="selectDay(3)"
            :class="{ blue: state.form.selectedDays[3] }"
          >
            T
          </div>
          <div
            class="day"
            @click="selectDay(4)"
            :class="{ blue: state.form.selectedDays[4] }"
          >
            F
          </div>
          <div
            class="day"
            @click="selectDay(5)"
            :class="{ blue: state.form.selectedDays[5] }"
          >
            S
          </div>

          <br />
        </div>
      </el-form-item>

      <el-form-item
        prop="timeRange"
        label="시간 설정"
        :label-width="state.formLabelWidth"
      >
        <el-time-select
          placeholder="Start time"
          v-model="state.form.timeRange[0]"
          start="00:00"
          step="00:15"
          end="23:45"
        >
        </el-time-select>
        <el-time-select
          placeholder="End time"
          v-model="state.form.timeRange[1]"
          start="00:00"
          step="00:15"
          end="23:45"
        >
        </el-time-select>
      </el-form-item>

      <el-form-item
        prop="dateRange"
        label="날짜 설정"
        :label-width="state.formLabelWidth"
      >
        <div class="block">
          <el-date-picker
            v-model="state.form.dateRange"
            type="daterange"
            range-separator="/"
            start-placeholder="Start date"
            end-placeholder="End date"
            format="YYYY/MM/DD"
            value-format="YYYY-MM-DD"
            :disabled-date="disabledDate"
          >
          </el-date-picker>
        </div>
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
            <span v-show="noFile"><i class="el-icon-plus"></i>
              <img :src="`${publicPath}upload/${state.form.thumbnail}`" style="width:100px" >
            </span>
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
          >수정하기</el-button
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
.blue {
  background: #66b1ff;
  color: white;
}

</style>
<script>
import { reactive, computed, ref, watch, onBeforeMount,onBeforeUpdate } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "update-dialog",

  props: {
    open: {
      type: Boolean,
      default: false,
    },
    conferenceDetail: {
      type: Object,
    },
  },
data () {
    return {
      publicPath: process.env.BASE_URL
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
        maxMember: "",
        description: "",
        selectedDays: [],
        timeRange: [],
        dateRange: [],
        thumbnail: "",
        loaddingSpinner: false,
      },
      rules: {
        purpose: [],
        title: [
          { required: true, message: "필수입력 항목입니다", trigger: "blur" },
          {
            max: 30,
            message: "최대 30글자까지 입력 가능합니다.",
            trigger: "change",
          },
        ],
        description: [
          { required: true, message: "필수입력 항목입니다", trigger: "blur" },
        ],

      },
      dialogVisible: computed(() => props.open),
      formLabelWidth: "120px",
    });

    const handleChange = function (file) {
      fileList.push(file);
      noFile.value = !noFile.value;
    };

    const RemoveFile = function (file) {
      fileList.pop(file);
      noFile.value = !noFile.value;
    };
    const selectDay = function(val) {
      state.form.selectedDays[val] = !state.form.selectedDays[val];
    };
    const clickUpdateCon = function () {
      updateForm.value.validate((valid) => {
        if (valid) {
          state.form.loaddingSpinner = true;
          let form = new FormData();
          if(noFile){

          }
          else{
           let upload_file = document.getElementsByName("file")[0].files[0];
           form.append("file", upload_file);
          }
          form.append("title", state.form.title);
          form.append("conferenceCategoryId", state.form.purpose);
          form.append("description", state.form.description);
          form.append("conferenceId", props.conferenceDetail.id);
          form.append("callStartDate", state.form.dateRange[0])
          form.append("callEndDate", state.form.dateRange[1]);
          form.append("callStartTime", state.form.timeRange[0])
          form.append("callEndTime", state.form.timeRange[1]);
          form.append("day", JSON.stringify(state.form.selectedDays));

          store
            .dispatch("root/patchConference", form)
            .then(function (result) {
              router.go();
              state.form.loaddingSpinner = false;
              handleClose();
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

    watch(
      () => props.conferenceDetail,
      (newVal, oldVal) => {
        state.form.title = newVal.title;
        state.form.description = newVal.description;
        state.form.purpose = newVal.thumbnailUrl;
        state.form.timeRange[0]=newVal.callStartTime;
        state.form.timeRange[1]=newVal.callEndTime;
        state.form.dateRange[0]=newVal.callStartDate;
        state.form.dateRange[1]=newVal.callEndDate;
        state.form.selectedDays = newVal.selectedDays;
        state.form.maxMember = newVal.maxMember;
        state.form.thumbnail=newVal.thumbnailUrl;
        state.form.purpose = newVal.conferenceCategoryId;
      }
    );

    const handleClose = function () {

      state.btn_disable = true;
      emit("closeUpdateDialog");
    };

    onBeforeUpdate(() => {
      state.form.selectDays=[];
      store
        .dispatch("root/getConferenceCategory")
        .then(function (result) {
          categoryList.value = result.data.categoryList;
        })
        .catch(function (err) {});


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
      onBeforeMount,
      selectDay,
    };
  },
};
</script>
