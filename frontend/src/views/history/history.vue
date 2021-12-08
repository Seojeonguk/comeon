<template>
지난 회의 내역
  <div class="row" :gutter="12">
    <div class="col" :span="24">
      <el-card
        shadow="hover"
        v-for="(conference, idx) in state.myConferences"
        :key="idx"
      >
        <div class="historyDetail">
          <el-col :span="6" class="title">
            {{ conference.conference.title }}
          </el-col>
          <el-col :span="6" class="inT">
            {{ conference.insertTime.split('T')[0] }} {{ conference.insertTime.split('T')[1].split('.')[0] }}
          </el-col>
          <el-col :span="6" class="outT">
            {{ conference.outTime.split('T')[0] }} {{ conference.outTime.split('T')[1].split('.')[0] }}
          </el-col>
          <el-col :span="6" class="historyScore">
            {{ conference.userScore }}
          </el-col>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { onMounted, defineComponent, reactive } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "History",

  data: function() {
    return {
      loading: true
    };
  },

  setup() {
    const store = useStore();

    const state = reactive({
      myConferences: {}
    });

    onMounted(() => {
      store.commit("root/setMenuActiveMenuName", "history");

      const myIntId = JSON.parse(localStorage.getItem("userInfo")).id;
      store
        .dispatch("root/getMyConferenceHistory", myIntId)
        .then(function(result) {
          state.myConferences = result.data;
        })
        .catch(function(err) {});
    });
    return {
      state
    };
  }
});
</script>

<style scoped>
.row {
  margin-top: 3%;
}
.historyDetail {
  display: flex;
  justify-content: space-between;
}
</style>
