<template>
  <!-- <nb-container> -->
    <nb-header :style="{ backgroundColor: '#E3D8D4' }">
      <nb-left>
      </nb-left>
      <nb-body>
        <nb-title class="title">{{headerTitle}}</nb-title>
      </nb-body>
      <nb-right>
      </nb-right>
    </nb-header>
    <!-- <slot/> -->
  <!-- </nb-container> -->
</template>

<script>
import { DrawerActions } from "react-navigation-drawer";

export default {
  props: {
    navigation: {
      type: Object
    },
    onPressAction: {
      Type: Object
    },
    headerTitle: {
      type: String,
      default: "SHOP"
    },
  }
};
</script>

<style>
.title {
  color: #AE8D92;
  font-size: 22;
}
</style>