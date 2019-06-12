<template>
    <safeAreaView>
        <view class="container">
            <text class="color">{{title}}</text>
        </view>
    </safeAreaView>
</template>

<script>
import { SafeAreaView } from 'react-native';
export default {
  data() {
    return {
      title: "I AM Login"
    };
  }
};
</script>

<style>
.container {
  background-color: white;
  flex: 1;
  padding: 5%;
}
</style>
