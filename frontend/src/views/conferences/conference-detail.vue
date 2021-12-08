<template v-loading="loading">
  <!--
  <div>
      <el-button @click="update" v-if="isOwner">수정하기</el-button>
    <update-dialog :open="updateDialogOpen" :conferenceDetail="state.conference" @closeUpdateDialog="onCloseUpdateDialog"/>
      <h2>
          {{ state.conference["title"] }}
      </h2>
      <div>
        {{ state.conference["description"] }}
      </div>
        <div>
        {{ state.conference["callStartTime"] }}
      </div>
      <div>
        {{ state.conference["thumbnailUrl"] }}
      </div>

  </div>

    {{ state.conference }} -->

  <div id="main-container" class="container">
    <div id="join" v-if="!session">
      <div id="join-dialog" class="jumbotron vertical-center">
        <h1>Join a video session</h1>
        <div class="form-group">
          <p>
            <label>Participant</label>
            <input
              v-model="myUserName"
              class="form-control"
              type="text"
              required
            />
          </p>
          <p>
            <label>Session</label>
            <input
              v-model="mySessionId"
              class="form-control"
              type="text"
              required
            />
          </p>
          <p class="text-center">
            <button class="btn btn-lg btn-success" @click="joinSession()">
              Join!
            </button>
          </p>
        </div>
      </div>
    </div>

    <div id="vedio-part" class="video-part">
      <div id="session" v-if="session" style="width: 100%;">
        <div id="session-header">
          <h1 id="session-title">{{ sessionName }}</h1>
          <!-- <input
            class="btn btn-large btn-danger"
            type="button"
            id="buttonLeaveSession"
            @click="leaveSession"
            value="Leave session"
          /> -->
        </div>
        <!-- <div id="main-video" class="col-md-6">
          <user-video :stream-manager="mainStreamManager" />
        </div> -->
        <div id="video-container" class="col-md-6 videoContainer">
          <!-- publisher -->
          <div class="video-card">
            <user-video
              :stream-manager="publisher"
              @click="updateMainVideoStreamManager(publisher)"
            />
            <!-- <span>publisher</span> -->
          </div>
          <!-- scribers -->
          <div
            v-for="(sub, index) in subscribers"
            :key="sub.stream.connection.connectionId"
            class="video-card"
          >
            <user-video
              :stream-manager="sub"
              @click="updateMainVideoStreamManager(sub)"
            />
            <span>subscribers {{ index }}</span>
          </div>
          <!-- <user-video
            v-for="sub in subscribers"
            :key="sub.stream.connection.connectionId"
            :stream-manager="sub"
            @click="updateMainVideoStreamManager(sub)"
          /> -->
        </div>
        <el-button type="primary" round @click="Videotoggle"
          >Video {{ isVideoOn }}</el-button
        >
        <el-button type="primary" round @click="Audiotoggle"
          >Audio {{ isAudioOn }}</el-button
        >

        <el-button type="primary" round @click="leaveSession">나가기</el-button>
      </div>
    </div>
    <div id="message-part" class="message-part">
      <div class="msg-div"></div>
      <div class="msg-input-container">
        <input
          class="msg-input"
          @keyup.enter="sendingmsg()"
          type="text"
          v-model="sendmsg"
        />
        <el-button
          @click="sendingmsg()"
          size="mini"
          type="info"
          icon="el-icon-s-promotion"
        ></el-button>
      </div>
    </div>
  </div>
</template>

<style>
.msg-div {
  overflow: auto;
  text-align: left;
  padding-left: 5px;
}

.msg-input {
  width: 80%;
  height: 22px;
  border-radius: 10px;
  border-color: gray;
}

.container {
  display: flex;
}

.video-card {
  width: 50%;
}

.video-part {
  width: 75%;
  /* height: 5px; */
  /* background-color: blue; */
}

.message-part {
  width: 24%;
  /* height: 5px; */
  /* display: flex; */
  /* background-color: red; */
  border: thick double #32a1ce;
}

.videoContainer {
  width: 100%;
  display: flex;
}
</style>
<script>
import axios from "axios";
import { OpenVidu } from "openvidu-browser";
import UserVideo from "./components/UserVideo";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
// import UserVideo from './components/UserVideo.vue';

axios.defaults.headers.post["Content-Type"] = "application/json";

// const OPENVIDU_SERVER_URL = "https://" + location.hostname + ":4443";
const OPENVIDU_SERVER_URL = "https://i5c201.p.ssafy.io:3000";
const OPENVIDU_SERVER_SECRET = "MY_SECRET";

export default {
  name: "App",

  components: {
    UserVideo
    // UserVideo
  },

  data() {
    return {
      OV: undefined,
      session: undefined,
      mainStreamManager: undefined,
      publisher: undefined,
      subscribers: [],
      publish_video: true,
      publish_audio: true,
      sendmsg: "",
      isVideoOn: "On",
      isAudioOn: "On",

      sessionName: "",
      mySessionId: "SessionA",
      myUserName: "Participant" + Math.floor(Math.random() * 100)
    };
  },

  // computed() {
  //   viewWidth: function() {
  //     document.querySelector('')
  //     return 'tmp'
  //   }
  // },

  mounted() {
    const route = useRoute();
    this.mySessionId = route.params.conferenceId;
    // REST API 로 방 정보를 받아오려했는데, API 가 없었음... 필요 없을지도...
    const store = useStore();
    store
      .dispatch("root/getConferenceDetail", route.params.conferenceId)
      .then(res => {
        console.log(res);
        this.sessionName = res.data.title;
      })
      .catch(err => {
        console.log(err);
      });

    // myUserName 넣어주고 바로 화상 시작하게 만들기
    let userInfo = localStorage.getItem("userInfo");
    userInfo = JSON.parse(userInfo);
    this.myUserName = userInfo.name;
    console.log("here name", userInfo);
    this.joinSession();
    console.log("subscribers", this.subscribers);

    let msgDiv = document.querySelector(".msg-div");
    let viewWidth = window.innerHeight;
    msgDiv.style.height = String((viewWidth - 70) * 0.8) + "px";
    console.log(String((viewWidth - 70) * 0.8) + "px");
    console.dir(msgDiv);
  },

  // beforeUpdate() {
  //   // 비디오 컨테이너 가로 새로 받아오기
  //   let videoContainer = document.querySelector(".videoContainer")
  //   console.log(videoContainer)
  //   let videowidth = videoContainer.offsetWidth
  //   console.log('here videoWidth', videowidth)
  // },

  unmounted() {
    console.log("unmounted!");
    this.beforeLeaveSession()
    this.leaveSession();
  },

  // created() {
  //   this.joinSession();
  // },
  methods: {
    sendingmsg() {
      this.session
        .signal({
          data: this.myUserName + ": " + this.sendmsg
        })
        .then(() => {
          console.log("Message Successfully send");
          this.sendmsg = "";
        })
        .catch(error => {
          console.error(error);
        });
    },
    Videotoggle() {
      this.publish_video = !this.publish_video;
      this.publisher.publishVideo(this.publish_video);
      if (this.publish_video) {
        this.isVideoOn = "On";
      } else {
        this.isVideoOn = "Off";
      }
    },
    Audiotoggle() {
      this.publish_audio = !this.publish_audio;
      this.publisher.publishAudio(this.publish_audio);
      if (this.publish_audio) {
        this.isAudioOn = "On";
      } else {
        this.isAudioOn = "Off";
      }
    },
    joinSession() {
      // --- Get an OpenVidu object ---
      this.OV = new OpenVidu();

      // --- Init a session ---
      this.session = this.OV.initSession();

      // --- Specify the actions when events take place in the session ---

      // On every new Stream received...
      this.session.on("streamCreated", ({ stream }) => {
        const subscriber = this.session.subscribe(stream);
        this.subscribers.push(subscriber);
        console.log("subs", this.subscribers);
      });

      // On every Stream destroyed...
      this.session.on("streamDestroyed", ({ stream }) => {
        const index = this.subscribers.indexOf(stream.streamManager, 0);
        if (index >= 0) {
          this.subscribers.splice(index, 1);
        }
      });

      // On every asynchronous exception...
      this.session.on("exception", ({ exception }) => {
        console.warn(exception);
      });

      this.session.on("signal", event => {
        console.log("메시지 들어왔습니다.");
        console.log(event.data);
        console.log(event.from);
        console.log(event.type);

        let msgDiv = document.querySelector(".msg-div");
        let elSpan = document.createElement("div");
        elSpan.innerText = event.data;
        msgDiv.appendChild(elSpan);
      });

      // --- Connect to the session with a valid user token ---

      // 'getToken' method is simulating what your server-side should do.
      // 'token' parameter should be retrieved and returned by your own backend
      this.getToken(this.mySessionId).then(token => {
        this.session
          .connect(token, { clientData: this.myUserName })
          .then(() => {
            // --- Get your own camera stream with the desired properties ---

            let publisher = this.OV.initPublisher(undefined, {
              audioSource: undefined, // The source of audio. If undefined default microphone
              videoSource: undefined, // The source of video. If undefined default webcam
              publishAudio: true, // Whether you want to start publishing with your audio unmuted or not
              publishVideo: true, // Whether you want to start publishing with your video enabled or not
              resolution: "320x240", // The resolution of your video
              frameRate: 30, // The frame rate of your video
              insertMode: "APPEND", // How the video is inserted in the target element 'video-container'
              mirror: false // Whether to mirror your local video or not
            });

            this.mainStreamManager = publisher;
            this.publisher = publisher;

            // --- Publish your stream ---

            this.session.publish(this.publisher);
          })
          .catch(error => {
            console.log(
              "There was an error connecting to the session:",
              error.code,
              error.message
            );
          });
      });

      window.addEventListener("beforeunload", this.leaveSession);
    },

    beforeLeaveSession() {
      // 회의 나간 정보를 서버에 전송
      let userInfo = localStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);
      console.log("dy userInfo", userInfo.id);
      // console.log('here userinfo', userInfo)
      let payload = {
        conferenceId: this.mySessionId,
        userId: userInfo.id
      };
      // console.log('here payload', payload)
      this.$store
        .dispatch("root/roomOut", payload)
        .then(res => {
          console.log(res);
          // 여기에 화상회의 종료시 넘어가는 페이지를 지정해줘야함
          // router.push({
          //   name: 'conference-detail',
          //   params: {
          //     conferenceId: roomId
          //   }
          // })
        })
        .catch(err => {
          console.log(err);
        });
    },

    leaveSession() {
      // --- Leave the session by calling 'disconnect' method over the Session object ---
      if (this.session) this.session.disconnect();

      this.session = undefined;
      this.mainStreamManager = undefined;
      this.publisher = undefined;
      this.subscribers = [];
      this.OV = undefined;

      window.removeEventListener("beforeunload", this.leaveSession);

      // 이전 페이지 말고 '점수 확인하는 페이지로' 넘어가야 함
      //history.back(-1);
    },

    updateMainVideoStreamManager(stream) {
      if (this.mainStreamManager === stream) return;
      this.mainStreamManager = stream;
    },

    /**
     * --------------------------
     * SERVER-SIDE RESPONSIBILITY
     * --------------------------
     * These methods retrieve the mandatory user token from OpenVidu Server.
     * This behavior MUST BE IN YOUR SERVER-SIDE IN PRODUCTION (by using
     * the API REST, openvidu-java-client or openvidu-node-client):
     *   1) Initialize a Session in OpenVidu Server	(POST /openvidu/api/sessions)
     *   2) Create a Connection in OpenVidu Server (POST /openvidu/api/sessions/<SESSION_ID>/connection)
     *   3) The Connection.token must be consumed in Session.connect() method
     */

    getToken(mySessionId) {
      return this.createSession(mySessionId).then(sessionId =>
        this.createToken(sessionId)
      );
    },

    // See https://docs.openvidu.io/en/stable/reference-docs/REST-API/#post-openviduapisessions
    createSession(sessionId) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            `${OPENVIDU_SERVER_URL}/openvidu/api/sessions`,
            JSON.stringify({
              customSessionId: sessionId
            }),
            {
              auth: {
                username: "OPENVIDUAPP",
                password: OPENVIDU_SERVER_SECRET
              }
            }
          )
          .then(response => response.data)
          .then(data => resolve(data.id))
          .catch(error => {
            if (error.response.status === 409) {
              resolve(sessionId);
            } else {
              console.warn(
                `No connection to OpenVidu Server. This may be a certificate error at ${OPENVIDU_SERVER_URL}`
              );
              if (
                window.confirm(
                  `No connection to OpenVidu Server. This may be a certificate error at ${OPENVIDU_SERVER_URL}\n\nClick OK to navigate and accept it. If no certificate warning is shown, then check that your OpenVidu Server is up and running at "${OPENVIDU_SERVER_URL}"`
                )
              ) {
                location.assign(`${OPENVIDU_SERVER_URL}/accept-certificate`);
              }
              reject(error.response);
            }
          });
      });
    },

    // See https://docs.openvidu.io/en/stable/reference-docs/REST-API/#post-openviduapisessionsltsession_idgtconnection
    createToken(sessionId) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            `${OPENVIDU_SERVER_URL}/openvidu/api/sessions/${sessionId}/connection`,
            {},
            {
              auth: {
                username: "OPENVIDUAPP",
                password: OPENVIDU_SERVER_SECRET
              }
            }
          )
          .then(response => response.data)
          .then(data => resolve(data.token))
          .catch(error => reject(error.response));
      });
    }
  }
};

// import { reactive, onBeforeMount, onUnmounted, ref } from 'vue'
// import { useStore } from 'vuex'
// import { useRoute } from 'vue-router'

// import UpdateDialog from './components/update-dialog.vue'

// export default {
//   name: 'conference-detail',

//   components: {
//     UpdateDialog
//   },

//   setup () {
//     const route = useRoute()
//     const store = useStore()
//     const state = reactive({
//       conferenceId: '',
//       conference: {},
//     })
//     const loading =  ref(true);
//     const updateDialogOpen = ref(false);
//     const isOwner = ref(true);

//     // 페이지 진입시 불리는 훅
//     onBeforeMount(() => {
//       state.conferenceId = route.params.conferenceId
//       store.commit('root/setMenuActiveMenuName', 'home')
//       loading.value = false;
//       const ownerId = JSON.parse(localStorage.getItem("userInfo")).id

//       store.dispatch("root/getConferenceDetail", route.params.conferenceId)
//           .then(function (result) {
//             state.conference = result.data.conference;
//             if (state.conference.ownerId !== ownerId) {
//               isOwner.value = false;
//             }
//           })
//           .catch(function (err) {
//           })
//     })

//     // 페이지 이탈시 불리는 훅
//     onUnmounted(() => {
//       state.conferenceId = ''
//     })

//     const onCloseUpdateConDialog = function() {
//       updateDialogOpen.value = false;
//     }

//     const update = function() {
//       updateDialogOpen.value = true;
//     }

//     return { state, loading, isOwner, updateDialogOpen, onCloseUpdateConDialog, update }
//   },

// }
</script>
