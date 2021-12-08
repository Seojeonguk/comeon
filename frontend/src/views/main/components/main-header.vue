<template>
  <el-row class="main-header" :gutter="10" :style="{ height: height }">
    <div class="hide-on-small">
      <div class="logo-wrapper" @click="clickLogo">
        <div class="ic ic-logo" />
      </div>
      <div class="tool-wrapper">
        <div v-if="state.isLogin === false" class="button-wrapper">
          <el-button @click="clickRegister">회원가입</el-button>
          <el-button type="primary" @click="clickLogin">로그인</el-button>
        </div>
        <div v-else-if="isConference === true" class="button-wrapper">
          <el-button @click="goBack">나가기</el-button>
        </div>
        <div v-else class="button-wrapper">
          <el-button @click="clickCreate">생성하기</el-button>
          <el-button @click="clickLogout">로그아웃</el-button>
        </div>
      </div>
    </div>
    <div class="hide-on-big">
      <div class="menu-icon-wrapper" :span="2" @click="changeCollapse">
        <i class="el-icon-menu"></i>
      </div>
      <div class="logo-wrapper" @click="clickLogo">
        <div class="ic ic-logo" />
      </div>
      <div class="exit" v-if="isConference">
        <el-button type="danger" @click="clickLogo">X</el-button>
      </div>
      <div class="mobile-sidebar-wrapper" v-if="!state.isCollapse">
        <div class="mobile-sidebar">
          <div class="mobile-sidebar-tool-wrapper">
            <div class="logo-wrapper"><div class="ic ic-logo" /></div>
            <div v-if="state.isLogin === false">
              <el-button
                type="primary"
                class="mobile-sidebar-btn login-btn"
                @click="clickLogin"
                >로그인</el-button
              >
              <el-button
                class="mobile-sidebar-btn register-btn"
                @click="clickRegister"
                >회원가입</el-button
              >
            </div>
            <div
              v-else-if="isConference === true"
              class="mobile-sidebar-btn login-btn"
            >
              <el-button class="mobile-sidebar-btn login-btn" @click="goBack"
                >나가기</el-button
              >
            </div>
            <div v-else>
              <el-button
                type="primary"
                class="mobile-sidebar-btn login-btn"
                @click="clickCreate"
                >생성하기</el-button
              >
              <el-button
                type="primary"
                class="mobile-sidebar-btn login-btn"
                @click="clickLogout"
                >로그아웃</el-button
              >
            </div>
          </div>
          <el-menu
            :default-active="String(state.activeIndex)"
            active-text-color="#ffd04b"
            class="el-menu-vertical-demo"
            @select="menuSelect"
          >
            <el-menu-item
              v-for="(item, index) in state.menuItems"
              :key="index"
              :index="index.toString()"
            >
              <i v-if="item.icon" :class="['ic', item.icon]" />
              <span>{{ item.title }}</span>
            </el-menu-item>
          </el-menu>
        </div>
        <div class="mobile-sidebar-backdrop" @click="changeCollapse"></div>
      </div>
    </div>
  </el-row>
</template>
<script>
import { reactive, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "main-header",

  props: {
    height: {
      type: String,
      default: "70px"
    }
  },

  data() {
    return {
      isConference: false
    };
  },

  watch: {
    $route(to, from) {
      if (to.path.includes("conferences")) {
        this.isConference = true;
      } else {
        this.isConference = false;
      }
    }
  },

  setup(props, { emit }) {
    const store = useStore();
    const router = useRouter();
    console.log("라우트라니깐?", router);
    const state = reactive({
      isLogin: false,

      isCollapse: true,
      menuItems: computed(() => {
        const MenuItems = store.getters["root/getMenus"];
        let keys = Object.keys(MenuItems);
        let menuArray = [];
        for (let i = 0; i < keys.length; ++i) {
          let menuObject = {};
          menuObject.icon = MenuItems[keys[i]].icon;
          menuObject.title = MenuItems[keys[i]].name;
          menuArray.push(menuObject);
        }
        return menuArray;
      }),
      activeIndex: computed(() => store.getters["root/getActiveMenuIndex"])
    });

    if (state.activeIndex === -1) {
      state.activeIndex = 0;
      store.commit("root/setMenuActive", 0);
    }

    const token = localStorage.getItem("jwt");
    if (token) {
      state.isLogin = true;
    }

    const menuSelect = function(param) {
      store.commit("root/setMenuActive", param);
      const MenuItems = store.getters["root/getMenus"];
      let keys = Object.keys(MenuItems);
      router.push({
        name: keys[param]
      });
    };

    const clickLogo = () => {
      store.commit("root/setMenuActive", 0);
      const MenuItems = store.getters["root/getMenus"];
      let keys = Object.keys(MenuItems);
      router.push({
        name: keys[0]
      });
    };

    const clickLogin = () => {
      emit("openLoginDialog");
    };

    const clickLogout = () => {
      localStorage.removeItem("userInfo");
      localStorage.removeItem("jwt");
      async function restart() {
        const first = await router.replace("/");
        const second = await location.reload();
      }
      restart();
    };

    const changeCollapse = () => {
      state.isCollapse = !state.isCollapse;
    };

    const clickRegister = () => {
      emit("openRegisterDialog");
    };

    const clickCreate = () => {
      emit("openCreateDialog");
    };

    const goBack = () => {
      console.log("바이바이");
      router.push({
        name: "finish",
        conferenceId: 44
      });
    };

    return {
      state,
      menuSelect,
      clickLogo,
      clickLogin,
      clickLogout,
      changeCollapse,
      clickRegister,
      clickCreate,
      goBack
    };
  }
};
</script>
<style>
.main-header {
  padding: 10px 20px;
}
/*Mobile, Tablet*/
.menu-icon-wrapper {
  display: inline-block;
  vertical-align: top;
  position: relative;
  top: 14px;
}

.exit {
  display: inline-block;
  vertical-align: top;
  position: relative;
  top: 14px;
}

.main-header .hide-on-big .logo-wrapper {
  display: inline-block;
  margin: 0 calc(50% - 101px) 0 calc(50% - 51px);
}
.main-header .hide-on-big .logo-wrapper .ic.ic-logo {
  width: 70px;
  height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("../../../assets/images/mainbanner.png");
}
.mobile-sidebar-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.mobile-sidebar-wrapper .mobile-sidebar {
  width: 240px;
  height: calc(100vh - 1px);
  display: inline-block;
  background-color: white;
  padding: 0 10px;
  vertical-align: top;
}
.mobile-sidebar-wrapper .mobile-sidebar .mobile-sidebar-tool-wrapper {
  padding-bottom: 20px;
}
.mobile-sidebar-wrapper .mobile-sidebar .mobile-sidebar-btn {
  display: block;
  margin: 0 auto;
  margin-top: 25px;
  height: 30px;
  width: 100%;
}
.mobile-sidebar-wrapper .mobile-sidebar .mobile-sidebar-btn.login-btn {
  color: white;
}
.mobile-sidebar-wrapper .mobile-sidebar .logo-wrapper {
  display: block;
}
.mobile-sidebar-wrapper .mobile-sidebar .logo-wrapper .ic.ic-logo {
  width: 70px;
  height: 50px;
  margin: 0 auto;
  margin-top: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("../../../assets/images/mainbanner.png");
}
.mobile-sidebar-wrapper .mobile-sidebar-backdrop {
  width: calc(100% - 260px);
  height: calc(100vh - 1px);
  background-color: black;
  display: inline-block;
  opacity: 0.3;
}
.mobile-sidebar-wrapper .el-menu {
  margin-top: 0;
  padding-left: 0;
  height: calc(100% - 235px);
}
.mobile-sidebar-wrapper .el-menu .el-menu-item {
  cursor: pointer;
}
.mobile-sidebar-wrapper .el-menu .el-menu-item .ic {
  margin-right: 5px;
}

/*Desktop - Need to add Class if Need*/
.main-header .hide-on-small .logo-wrapper {
  cursor: pointer;
  display: inline-block;
}
.main-header .hide-on-small .logo-wrapper .ic.ic-logo {
  width: 70px;
  height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("../../../assets/images/mainbanner.png");
}
.main-header .hide-on-small .tool-wrapper {
  width: 50%;
  float: right;
}
.main-header .hide-on-small .tool-wrapper .button-wrapper {
  width: 45%;
  float: right;
}
.main-header .hide-on-small .tool-wrapper .button-wrapper .el-button {
  width: 30%;
  height: 50px;
  cursor: pointer;
  margin-right: 1%;
}
</style>
