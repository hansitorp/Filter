<template>
  <view class="container">
    <Navigation />
  </view>
</template>
<script>
  import Navigation from './navigation/navigation'
  import Vue from "vue-native-core";
  import { VueNativeBase } from "native-base";
  import { MaterialCommunityIcons } from '@expo/vector-icons';
  
  
  //import header
  import ScreenWithDrawer from "./comps/ScreenWithDrawer";
  import HeaderBackCart from "./comps/header/HeaderBackCart";
  import HeaderOnlyTitle from "./comps/header/HeaderOnlyTitle";
  import HeaderCancel from "./comps/header/HeaderCancel";
  
  Vue.use(VueNativeBase);
  //Definere header
  Vue.component("ScreenWithDrawer", ScreenWithDrawer)
  Vue.component("HeaderBackCart", HeaderBackCart)
  Vue.component("HeaderOnlyTitle", HeaderOnlyTitle)
  Vue.component("HeaderCancel", HeaderCancel)
  //andre
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