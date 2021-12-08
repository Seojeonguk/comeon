<template>
<div>
  <h2>내가 신청한 방 목록</h2>
   <update-dialog :open="updateDialogOpen" :conferenceDetail="state.conference" @closeUpdateDialog="onCloseUpdateConDialog"/>
<details shadow="hover" v-for="(list, index) in state.roomList" :key="list.id">
    <summary >

      <div class="leftTitle">
        <el-button class="nohover" round size="mini"><i class="el-icon-user" ></i> ({{list.nowMember}}/{{list.maxMember}})</el-button>
       <el-button class="nohover " size="mini">{{list.callSetTime}}시간</el-button>
        <b> &nbsp;&nbsp;&nbsp;{{list.title}}</b>
       </div>
      <div class="rightBtn">
        <el-button class="btn"  @click="clickJoin(list)" :disabled="!state.buttonIsActiveList[index]">Join</el-button>
        <el-button class="btn" v-if="list.ownerId==intId "  @click="clickEdit(list)">Edit</el-button>
      </div>
    </summary>
    <hr>
    <div class="allContents">
    <div class="left">
      <div class="days content">

          <div
            class="day sunday"
            :class="{ blue: list.selectedDays[6] }"
          >
            S
          </div>
          <div
            class="day"
            :class="{ blue: list.selectedDays[0] }"
          >
            M
          </div>
          <div
            class="day"
            :class="{ blue: list.selectedDays[1] }"
          >
            T
          </div>
          <div
            class="day"
            :class="{ blue: list.selectedDays[2] }"
          >
            W
          </div>
          <div
            class="day"
            :class="{ blue: list.selectedDays[3] }"
          >
            T
          </div>
          <div
            class="day"
            :class="{ blue: list.selectedDays[4] }"
          >
            F
          </div>
          <div
            class="day"
            :class="{ blue: list.selectedDays[5] }"
          >
            S
          </div>

          <br />
        </div>
    <div class="content"> {{list.callStartDate}} ~  {{list.callEndDate}}</div>
    <div class="content">{{list.callStartTime}} ~ {{list.callEndTime}}</div>
    <div class="content">{{list.description}}</div>
    <div class="content"><el-button type="danger" size="mini" @click="clickLeave(list.id)">leave room</el-button></div>

    </div>
    <div class="right">
       <img :src="`${publicPath}upload/${list.thumbnailUrl}`" style="height: 190px" >

    </div>
    </div>
</details>


  <el-pagination
    :page-size="10"
    :pager-count="11"
    layout="prev, pager, next"
    :total="state.users.length"
    @current-change="setPage"
  >
  </el-pagination>
</div>
</template>

<script>
import { reactive,ref, onBeforeMount, computed } from "vue";
import { useRouter } from 'vue-router'
import { useStore } from "vuex";

import UpdateDialog from './components/update-dialog.vue'



export default {
  name: "room-list",

  components: {
    UpdateDialog
  },
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  setup() {
    const router = useRouter()
    const store = useStore();
    const myId = JSON.parse(localStorage.getItem("userInfo"))["userId"];
    const intId=JSON.parse(localStorage.getItem("userInfo"))["id"];

    const updateDialogOpen = ref(false);

    const state = reactive({
      conference: {},
      roomList: [],
      buttonIsActiveList: [],
      isActive:function(list){
        return true
      },
      topThree: [],
      users: [],
      myRank: 0,
      rival: [],
      page: 1,
      pageSize: 10,
      pageItems: computed(() => {
        return state.users.slice(
          state.pageSize * state.page - state.pageSize,
          state.pageSize * state.page
        );
      }),
      startHour:function(list){
        return list.callStartTime.getHours();
      }
    });

    const setPage = function(val) {
      state.page = val;
    };
    const clickJoin=function(list){
      console.log("join");
      // console.log(list.callStartTime.getHours());
      // conference 입장 시, 서버에 데이터 전송
      let payload = {
        "conferenceId": list.id,
        "userId": intId
      }
      store.dispatch('root/roomJoin', payload)
        .then((res) => {
          console.log(res)
          // conference 상세 페이지로 이동, 화상회의 입장
          // console.log(list)
          let roomId = list.id
          router.push({
            name: 'conference-detail',
            params: {
              conferenceId: roomId
            }
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
    onBeforeMount(() => {
      // api myuserid로 신청한 방목록 받아오기
      // roomlist = result.data

      store
        .dispatch("root/getRoomSelected",intId)
        .then(function(result) {
          console.log("allRoom",result.data.conferences)
          state.roomList = result.data.conferences;
          for(let i=0;i<state.roomList.length;i++){
            console.log("typeof")
            state.roomList[i].selectedDays=JSON.parse(state.roomList[i].selectedDays)
            state.roomList[i].callSetTime=state.roomList[i].callSetTime/3600;
            checkActivePossible(state.roomList[i])
            console.log(typeof state.roomList[i].selectedDays)
            console.log("roomlist",state.roomList)
          }
        })
        .catch(function(err) {});
    });

    // 회의 참여 가능한지 판별하는 함수
    const checkActivePossible = function(eachRoom) {
      let current = new Date()

      let callStartDate = eachRoom.callStartDate.split('-')
      let sY = callStartDate[0]
      let sM = callStartDate[1]
      let sD = callStartDate[2]

      let callStartTime = eachRoom.callStartTime.split(':')
      let sH = callStartTime[0]
      let sMin = callStartTime[1]

      // 회의 시작 시간 Date 객체 만들기
      // seconds 는 DB 에 저장 안하니까 0으로 setting
      let startDateObj = new Date(Number(sY), Number(sM), Number(sD), Number(sH), Number(sMin), 0)

      let callEndDate = eachRoom.callEndDate.split('-')
      let eY = callEndDate[0]
      let eM = callEndDate[1]
      let eD = callEndDate[2]

      let callEndTime = eachRoom.callEndTime.split(':')
      let eH = callEndTime[0]
      let eMin = callEndTime[1]

      // 회의 종료 시간 Date 객체 만들기
      let endDateObj = new Date(Number(eY), Number(eM), Number(eD), Number(eH), Number(eMin), 0)

      // 무슨 요일에 화상회의 이용하는지 정보
      let selectedDays = eachRoom.selectedDays

      // 현재 시간
      let cT = Number(current.getHours())*60 + Number(current.getMinutes())
      // 회의 시작 시간
      let sT = Number(startDateObj.getHours())*60 + Number(startDateObj.getMinutes())
      // 회의 종료 시간
      let eT = Number(endDateObj.getHours())*60 + Number(endDateObj.getMinutes())

      console.log('times', sT, cT, eT)

      // 현재 방이 활성화 가능한지 여부 판단
      if (startDateObj.getTime() <= current.getTime() <= endDateObj.getTime() && selectedDays[(current.getDay() + 6) % 7] && sT <= cT && cT <= eT) {
        state.buttonIsActiveList.push(true)
      } else {
        state.buttonIsActiveList.push(false)
      }
    }

    const clickEdit=function(list){
      state.conference = list;
      console.log("clickEdit:state.conference",state.conference);
      update();
    }
    const onCloseUpdateConDialog = function() {
      updateDialogOpen.value = false;
    }

    const update = function() {
      updateDialogOpen.value = true;
    }
    const clickLeave = function(conferenceId){
      store.dispatch("root/leaveRoom",{
        conferenceId:conferenceId,
        userId:intId
      })
      .then(function(result){
        router.go();
      })
    }

    return {
      state,
      myId,intId,
      setPage,
      clickJoin,
      update,
      onCloseUpdateConDialog,
      clickEdit,
      updateDialogOpen,
      clickLeave,
    };
  }
};
</script>

<style scoped>
details {
  text-align: left;
  border: 1px solid #aaa;
    border-radius: 4px;
    margin: 8px;
    padding: 8px;
}
summary{
  display: flex;

}

.leftTitle{
  display: flex;
  width: 85%;
  align-self: center;
}
.rightBtn{
  width: 15%;
  display: flex;
  flex-direction: row-reverse;
  align-self: center;

}
.btn{
  margin-left: 10px;
}
.userInfo {
  display: flex;
  justify-content: space-between;
}

.showMyRank {
  text-align: end;
  margin-bottom: 3%;
}

.userRank {
  text-align: start;
}

.firstTier {
  text-align: start;
}

.lastScore {
  text-align: end;
}
.days {
  display: flex;
  justify-content: space-between;
  width: 50%;
}
.day {
  width: 1.3em;
  height: 1.3em;
  text-align: center;
  border-radius: 80%;
}
.sunday{
  color: rgb(247, 78, 78);
}
.blue {
  background: #66b1ff;
  color: white;
}
.content{
  padding: 8px 0px;
}
.allContents{
  display: flex;
  flex-direction: row;
}
.left{
  width: 50%;
}
.right{
  width: 50%;
  display: flex;
  flex-direction: row-reverse;
}
.nohover{
    pointer-events: none;
}
@media (max-width: 800px){
  .days{
    width: 80%;
  }
}
@media (max-width: 600px){
  .days{
    width: 100%;
  }
  .allContents{
    flex-direction: column;
  }
  .left{
    width: 100%;
  }
  .right{
    width: 100%;
    flex-direction: row;
  }
}
</style>
