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
  import HeaderBackCart from "./comps/header/HeaderBackCart";
  import { MaterialCommunityIcons } from '@expo/vector-icons';
  Vue.use(VueNativeBase);
  Vue.component("ScreenWithDrawer", ScreenWithDrawer)
  Vue.component("HeaderBackCart", HeaderBackCart)
  Vue.component("MaterialCommunityIcons", MaterialCommunityIcons)


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