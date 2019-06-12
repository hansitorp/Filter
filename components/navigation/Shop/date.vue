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
      title: "I AM date"
    };
  }
};
</script>