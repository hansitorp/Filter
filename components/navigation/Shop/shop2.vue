<template>
  <HeaderBackCart :navigation = "navigation"
                    :headerTitle = "title">
    <view class="container">

      <view class="card" :style="{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 1, }"> 
            <view class="topText">
                <text :style="{ fontSize: 25 }" >{{name}}</text>
            </view>
            <view class="item1">
                <view class="item2">
                </view>
                <view class="item2">
                </view>
                <view class="item2">
                    <image
          :style="{width: 90, height: 90}"
          :source="{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}"
        />
                </view>
            </view>
        </view>


    </view>
  </HeaderBackCart>
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
      title: "Profile",
      name: "Jonas Johansen",
    };
  }
};
</script>

<style>
.container {
  flex: 1;
  background-color: #BBA7A1;
}
.card {
    background-color: #fff;
    padding: 20;
    margin: 30;
    /* padding-bottom: 100%; */
}
.topText {
    align-items: center;
}
.item1 {
    flex-direction: row;
    justify-content: center;
    padding: 20;
    padding-top: 300;
    /* padding: 100%; */
    
}
.item2 {
    height: 90;
    width: 90;
    background-color: gray;
    margin-right: 5;
    margin-left: 5;
}
</style>
