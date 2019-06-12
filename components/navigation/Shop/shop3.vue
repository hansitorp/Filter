<template>
  <ScreenWithDrawer :navigation="navigation">
    <view>
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
      title: "I AM SHOP3"
    };
  }
};
</script>

<style>
.Test{
  color: rgb(138, 109, 114)
}
</style>
