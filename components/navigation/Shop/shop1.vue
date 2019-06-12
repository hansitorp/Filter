<template>
  <ScreenWithDrawer :navigation = "navigation"
                    :headerTitle = "title">
    <view class="container">
      <text class="color">{{title}}</text>
    </view>
  </ScreenWithDrawer>
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
      title: "Explore"
    };
  }
};
</script>

<style>
.container {
  flex: 1;
  background-color: #BBA7A1;
}
</style>
