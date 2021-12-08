<template>
  <el-button v-if="isAvailable === 'available'" @click="requestJoinBtn"
    >신청하기</el-button
  >
  <span v-else-if="isAvailable === 'alreadyIn'" class="canNotIn"
    >이미 참여하고 있는 방입니다.</span
  >
  <span v-else-if="isAvailable === 'fullMember'" class="canNotIn"
    >인원이 꽉 찬 방입니다.</span
  >
  <span v-else-if="isAvailable === 'needLogin'" class="canNotIn"
    >로그인 해야 참여할 수 있습니다.</span
  >
</template>

<script>
export default {
  name: "joinConference",

  props: {
    isAvailable: {
      type: String
    }
  },

  setup(props, {emit}) {
    const requestJoinBtn = function() {
      emit("requestJoinBtn");
    };
    return {
      requestJoinBtn
    };
  }
};
</script>

<style></style>
