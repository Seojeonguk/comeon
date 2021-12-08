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
      ref="createForm"
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
        prop="selectDays"
        label="요일 선택"
        :label-width="state.formLabelWidth"
      >
        <div class="days">
          <div
            class="day"
            @click="selectDay(6)"
            :class="{ blue: selectedDays[6] }"
          >
            S
          </div>
          <div
            class="day"
            @click="selectDay(0)"
            :class="{ blue: selectedDays[0] }"
          >
            M
          </div>
          <div
            class="day"
            @click="selectDay(1)"
            :class="{ blue: selectedDays[1] }"
          >
            T
          </div>
          <div
            class="day"
            @click="selectDay(2)"
            :class="{ blue: selectedDays[2] }"
          >
            W
          </div>
          <div
            class="day"
            @click="selectDay(3)"
            :class="{ blue: selectedDays[3] }"
          >
            T
          </div>
          <div
            class="day"
            @click="selectDay(4)"
            :class="{ blue: selectedDays[4] }"
          >
            F
          </div>
          <div
            class="day"
            @click="selectDay(5)"
            :class="{ blue: selectedDays[5] }"
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
            <span v-show="noFile"><i class="el-icon-plus"></i></span>
          </template>
        </el-upload>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button
          type="primary"
          @click="clickCreate"
          :disabled="state.btn_disable"
          v-loading.lock="state.form.loaddingSpinner"
          >생성하기</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>
<style>
.create-dialog {
  width: 520px !important;
  height: 820px;
}
.create-dialog .el-dialog__headerbtn {
  float: right;
}
.login-dialog .el-form-item__content {
  margin-left: 0 !important;
  float: right;
  width: 200px;
  display: inline-block;
}
.create-dialog .el-form-item {
  margin-bottom: 20px;
}
.create-dialog .el-form-item__error {
  font-size: 12px;
  color: red;
}
.create-dialog .el-input__suffix {
  display: none;
}
.create-dialog .el-dialog__footer {
  margin: 0 calc(50% - 80px);
  padding-top: 0;
  display: inline-block;
}
.create-dialog .dialog-footer .el-button {
  width: 120px;
}

.days {
  display: flex;
  justify-content: space-between;
}

.day {
  width: 11%;
  text-align: center;
  border-radius: 80%;
}

.blue {
  background: #66b1ff;
  color: white;
}

.el-cascader {
  margin-right: 10px;
}
</style>
<script>
import { reactive, computed, ref, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "create-dialog",

  props: {
    open: {
      type: Boolean,
      default: false
    }
  },

  setup(props, { emit }) {
    const store = useStore();
    const router = useRouter();
    const createForm = ref(null);
    const fileList = [];
    const noFile = ref(true);
    const selectedDays = ref([false, false, false, false, false, false, false]);
    const categoryList = ref(null);

    const state = reactive({
      loaddingSpinner: false,

      form: {
        purpose: "",
        title: "",
        maxMember: "",
        description: "",
        selectDays: selectedDays,
        timeRange: [],
        dateRange: [],
        thumbnail: fileList
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
        maxMember: [
          { required: true, message: "필수입력 항목입니다", trigger: "blur" }
        ],
        selectDays: [
          { required: true, message: "필수입력 항목입니다", trigger: "blur" }
        ],
        timeRange: [
          { required: true, message: "필수입력 항목입니다", trigger: "blur" }
        ],
        dateRange: [
          { required: true, message: "필수입력 항목입니다", trigger: "blur" }
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

    onBeforeMount(() => {
      store
        .dispatch("root/getConferenceCategory")
        .then(function(result) {
          categoryList.value = result.data.categoryList;
        })
        .catch(function(err) {});
    });

    const handleChange = function(file) {
      fileList.push(file);
      noFile.value = !noFile.value;
    };

    const RemoveFile = function(file) {
      fileList.pop(file);
      noFile.value = !noFile.value;
    };

    const disabledDate = function(time) {
      const now = new Date();
      const yesterday = new Date(now.setDate(now.getDate() - 1));
      return time.getTime() < yesterday;
    };

    const selectDay = function(val) {
      selectedDays.value[val] = !selectedDays.value[val];
    };

    const clickCreate = function() {
      const jwt = localStorage.getItem("jwt");
      createForm.value.validate(valid => {
        if (valid) {
          state.form.loaddingSpinner = true;
          let form = new FormData();
          let upload_file = document.getElementsByName("file")[0].files[0];
          form.append("file", upload_file);
          form.append("title", state.form.title);
          form.append("maxMember", state.form.maxMember);
          form.append("conferenceCategoryId", state.form.purpose);
          form.append("description", state.form.description);
          form.append("callStartDate", state.form.dateRange[0])
          form.append("callEndDate", state.form.dateRange[1]);
          form.append("callStartTime", state.form.timeRange[0])
          form.append("callEndTime", state.form.timeRange[1]);
          form.append("day", JSON.stringify(selectedDays));
          form.append("jwt", jwt);
          store
            .dispatch("root/createConference", form)
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

    const handleClose = function() {
      state.form.purpose = "";
      state.form.title = "";
      state.form.maxMember = "";
      state.form.timeRange = [];
      state.form.dateRange = [];
      state.form.description = "";
      state.form.selectDays = [];
      emit("closeCreateDialog");
    };

    return {
      fileList,
      noFile,
      categoryList,
      state,
      handleChange,
      RemoveFile,
      selectedDays,
      disabledDate,
      selectDay,
      createForm,
      clickCreate,
      handleClose
    };
  }
};
</script>
