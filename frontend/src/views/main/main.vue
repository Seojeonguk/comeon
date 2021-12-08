<template>
  <el-container class="main-wrapper">
    <main-header
      :height="`70px`"
      @openLoginDialog="onOpenLoginDialog"
      @openRegisterDialog="onOpenRegisterDialog"
      @openCreateDialog="onOpenCreateDialog"
    />
    <el-container class="main-container">
      <el-aside class="hide-on-small" width="240px">
        <main-sidebar :width="`240px`" />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <!-- <main-footer :height="`110px`" /> -->
  </el-container>
  <login-dialog
    :open="loginDialogOpen"
    @closeLoginDialog="onCloseLoginDialog"
  />
  <register-dialog
    :open="registerDialogOpen"
    @closeRegisterDialog="onCloseRegisterDialog"
  />
  <create-dialog
    :open="createDialogOpen"
    @closeCreateDialog="onCloseCreateDialog"
  />
</template>
<style>
@import "https://unpkg.com/element-plus/lib/theme-chalk/index.css";
@import "./main.css";
@import "../../common/css/common.css";
@import "../../common/css/element-plus.css";

.el-main::-webkit-scrollbar {
    display: none;
}

</style>
<script>
import LoginDialog from "./components/login-dialog";
import MainHeader from "./components/main-header";
import MainSidebar from "./components/main-sidebar";
// import MainFooter from "./components/main-footer";
import RegisterDialog from "./components/register-dialog";
import CreateDialog from "./components/create-dialog";

export default {
  name: "Main",
  components: {
    MainHeader,
    MainSidebar,
    // MainFooter,
    LoginDialog,
    RegisterDialog,
    CreateDialog
  },
  data() {
    return {
      loginDialogOpen: false,
      registerDialogOpen: false,
      createDialogOpen: false,
      profileDialogOpen: false
    };
  },
  methods: {
    onOpenLoginDialog() {
      this.loginDialogOpen = true;
    },
    onCloseLoginDialog() {
      this.loginDialogOpen = false;
    },
    onOpenRegisterDialog() {
      this.registerDialogOpen = true;
    },
    onCloseRegisterDialog() {
      this.registerDialogOpen = false;
    },
    onOpenCreateDialog() {
      this.createDialogOpen = true;
    },
    onCloseCreateDialog() {
      this.createDialogOpen = false;
    }
  }
};
</script>
