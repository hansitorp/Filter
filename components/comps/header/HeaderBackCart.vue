<template>
  <nb-container>
    <nb-header :style="{ backgroundColor: '#E3D8D4' }">
      <nb-left>
        <nb-button :on-press="goBack" transparent>
          <MaterialCommunityIcons name="arrow-left" class="icon" :size=30 />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title class="title">{{headerTitle}}</nb-title>
      </nb-body>
      <nb-right>
        <nb-button :on-press="this.props.onPress" transparent>
          <MaterialCommunityIcons name="cart" class="icon" :size=30 />
        </nb-button>
      </nb-right>
    </nb-header>
    <slot/>
  </nb-container>
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
  },
  methods: {
    goBack() {
      this.navigation.goBack()
    }
  }
};
</script>

<style>
.icon {
  color: #AE8D92;
}
.title {
  color: #AE8D92;
  font-size: 22;
}
</style>