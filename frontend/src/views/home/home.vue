<template>
  <div class="filterWrapper">
    <el-button @click="sortConference">
      정렬 : {{ sortIndex }}
    </el-button>
    <div class="search-field">
      <el-input
        placeholder="검색"
        prefix-icon="el-icon-search"
        v-model="state.searchValue"
      >
      </el-input>
    </div>
  </div>
  <div v-if="state.noConference" class="noConferenceInfo">
    해당하는 컨퍼런스가 없습니다.
  </div>

  <ul class="infinite-list" style="overflow:auto" v-loading="state.loading">
    <!-- v-infinite-scroll="load" -->
    <li
      v-for="(conference, idx) in conferences"
      @click="onOpenConferenceDialog(idx)"
      class="infinite-list-item"
      :key="conference.id"
    >
      <conference :conference="conference" />
    </li>
  </ul>
  <conference-dialog
    :conference="conferences[state.conferenceId]"
    :open="state.conferenceDialogOpen"
    @closeConferenceDialog="onCloseConferenceDialog"
  />
</template>
<style>
.infinite-list {
  padding-left: 0;
  max-height: calc(100% - 35px);
}

.infinite-list::-webkit-scrollbar {
  display: none;
}

@media (min-width: 701px) and (max-width: 1269px) {
  .infinite-list {
    min-width: 700px;
  }
}

@media (min-width: 1270px) {
  .infinite-list {
    min-width: 1021px;
  }
}

.infinite-list .infinite-list-item {
  min-width: 335px;
  max-width: 25%;
  display: inline-block;
  cursor: pointer;
}

.filterWrapper {
  display: flex;
  justify-content:center;
}

.search-field {
  width: 50%;
  height: 50px;
  max-width: 400px;
  margin-right: 2%;
  display: inline-block;
  background-color: white;
}
.search-field .el-input {
  width: 100%;
  height: 100%;
}

.search-field .el-input .el-input__inner {
  width: 88%;
  height: 50px;
  margin-right: 1%;
}

.search-field .el-input .el-input__prefix {
  top: 3px;
  padding-left: 23px;
}

.noConferenceInfo {
  padding-top: 15%;
}
</style>
<script>
import ConferenceDialog from "./components/conference-dialog.vue";
import Conference from "./components/conference";
import { defineComponent, reactive, ref, onBeforeMount, watch } from "vue";
import { useStore } from "vuex";
import _ from "lodash";

export default defineComponent({
  name: "Home",

  components: {
    Conference,
    ConferenceDialog
  },

  setup() {
    const store = useStore();
    const conferences = ref([]);
    const sortIndex = ref("제목");

    const state = reactive({
      // count: 12,
      loading: true,
      conferenceDialogOpen: false,
      conferenceId: "",
      searchValue: null,
      noConference: false
    });

    watch(
      () => state.searchValue,
      (newVal, oldVal) => {
        store
          .dispatch("root/getConferences", {
            title: newVal
          })
          .then(function(result) {
            conferences.value = result.data;
            state.noConference =
              conferences.value.length === 0
                ? (state.noConference = true)
                : (state.noConference = false);
          })
          .catch(function(err) {});
      }
    );

    const onOpenConferenceDialog = function(conferenceId) {
      state.conferenceDialogOpen = true;
      state.conferenceId = conferenceId;
    };

    const onCloseConferenceDialog = function() {
      state.conferenceDialogOpen = false;
    };

    // const load = function () {
    //   state.count += 4
    // }

    onBeforeMount(() => {
      state.loading = false;
      store
        .dispatch("root/getConferences")
        .then(function(result) {
          conferences.value = result.data;
        })
        .catch(function(err) {});
    });

    const sortConference = () => {
      if (sortIndex.value === "제목") {
        conferences.value = _.sortBy(conferences.value, "title");
        sortIndex.value = "생성시간";
      } else {
        conferences.value = _.sortBy(conferences.value, "id");
        sortIndex.value = "제목";
      }
    };

    return {
      // load,
      state,
      onOpenConferenceDialog,
      onCloseConferenceDialog,
      conferences,
      sortIndex,
      onBeforeMount,
      sortConference
    };
  },

  mounted() {
    this.loading = false;
  }
});
</script>

