<template>
    <nb-container>
    <nb-header>
      <nb-left>
        <nb-button :on-press = "toggleDrawer" transparent>
          <nb-icon name="menu"/>
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>SHOP</nb-title>
      </nb-body>
      <nb-right></nb-right>
    </nb-header>
    <view>
      <text class="color">{{title}}</text>
    </view>
  </nb-container>
</template>

<script>
export default {
    props: {
    navigation: {
        type: Object
    }
  },
  data() {
    return {
      title: "I AM SHOP2"
    };
  },
  methods: {
      toggleDrawer () {
          this.navigation.dispatch(DrawerActions.toggleDrawer())
      }
  }
}
</script>