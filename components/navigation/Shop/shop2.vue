<template>
  <HeaderBackCart :navigation = "navigation"
                    :headerTitle = "title">
    <view class="container">
      

      <view class="card" :style="{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 1, }"> 
            <view class="topText">
                <text :style="{ fontSize: 25 }" >{{name}}</text>
            </view>
            <view class="ProfileImagePos">
            <!-- <view class="ProfileImage">  -->
              <image
          :style="{width: 100, height: 100}"
          :source="require('../../../assets/profile.png')"
        />
            <!-- </view> -->
            </view>

            <view class="textBox">
              <text class="textStyle" :style="{ fontSize: 18 }" > Swedish photographer edit alot of landscape photos and uses feelgod colors. </text>
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
    
    <touchable-opacity :on-press="SeeFilter" class="btn" :style="{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 1, }" >
        <text :style="{ color: '#AE8D92', fontSize: 20, textAlign: 'center' }">See all filters</text>
    </touchable-opacity>

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
  methods: {
      SeeFilter: function() {
        alert('Clicked Image')
      }
  },
  data() {
    return {
      title: "Profile",
      name: "Jonas Johansen",
    };
  },
  
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
}
.topText {
    align-items: center;
}
.item1 {
    flex-direction: row;
    justify-content: center;
    /* padding: 20; */
    padding-top: 20;
}
.item2 {
    height: 90;
    width: 90;
    background-color: gray;
    margin-right: 5;
    margin-left: 5;
}
.ProfileImagePos {
  flex-direction: row;
    justify-content: center;
    padding-top: 10;
}
.ProfileImage {
  background-color: black;
  height: 100;
  width: 100;
  border-radius: 100;
  border-width: 1;
  border-color: gray;
}
.textBox {
  padding-top: 20;
}
.textStyle {
  text-align: center;
}
.btn {
  background-color: #E3D8D4;
  padding: 18;
  margin: 30;
}
</style>
