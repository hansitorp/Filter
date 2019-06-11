<template>
  <ScreenWithDrawer :navigation = "navigation"
                    :headerTitle = "title">
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
      title: "Shop"
    };
  }
};
</script>