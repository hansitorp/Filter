<template>
  <view class="container">
    <Navigation />
  </view>
</template>
<script>
  import Navigation from './navigation/navigation'
  import Vue from "vue-native-core";
  import { VueNativeBase } from "native-base";
  import ScreenWithDrawer from "./comps/ScreenWithDrawer";
  Vue.use(VueNativeBase);
  Vue.component("ScreenWithDrawer", ScreenWithDrawer)


  export default {
    components: {
      Navigation
    }
  }
</script>
<style>
  .container {
    flex: 1;
  }
</style>