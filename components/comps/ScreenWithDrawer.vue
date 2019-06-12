<template>
  <nb-container>
    <nb-header :style="{ backgroundColor: '#E3D8D4' }">
      <nb-left>
        <nb-button :on-press="toggleDrawer" transparent>
          <nb-icon name="menu" class="icon"/>
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title class="title">{{headerTitle}}</nb-title>
      </nb-body>
      <nb-right>
        <nb-button :on-press="this.props.onPress" transparent>
          <nb-icon name="search" class="icon"/>
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
    toggleDrawer() {
      this.navigation.dispatch(DrawerActions.toggleDrawer());
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
  font-size: 25;
}
</style>
