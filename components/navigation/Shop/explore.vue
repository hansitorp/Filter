<template>
  <ScreenWithDrawer :navigation = "navigation"
                    :headerTitle = "title"
                    :onPress="ShowHideSearch">
    <view class="container">

        <nb-item v-if="searchShowing == true" class="searchBoxStyle">
            <nb-icon class="iconSearchBoxStyle" active name="search" />
            <nb-input placeholder="Search" :onChangeText="(newVal)=>{searchList(newVal)}"/>
        </nb-item>

        <touchable-opacity :on-press="onPressCard" class="card" :style="{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 1, }"> 
            <view class="topText">
                <text>{{name}}</text>
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
        </touchable-opacity>

        <touchable-opacity :on-press="onPressCard" class="card" :style="{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 1, }"> 
            <view class="topText">
                <text>{{name}}</text>
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
        </touchable-opacity>
    </view>
    
  </ScreenWithDrawer>
</template>

<script>
import React from 'react';
export default {
  props: {
      navigation: {
          type: Object
      }
  },
  data() {
    return {
      title: "Explore",
      name: "Jonas Johansen",
      searchShowing: '',
    };
  },
  methods: {
            onPressCard: function() {
                alert('Clicked Image')
            },
            ShowHideSearch: function() {
                if(this.searchShowing){
                    this.searchShowing = false
                }else{
                    this.searchShowing = true
                }
            },
            searchList: function(searchText) {
                console.log(searchText)
            },
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
    padding: 10;
    margin: 30;
}
.topText {
    align-items: center;
}
.item1 {
    flex-direction: row;
    justify-content: center;
    padding: 20;
    
}
.item2 {
    height: 90;
    width: 90;
    background-color: gray;
    margin-right: 5;
    margin-left: 5;
}
.searchBoxStyle {
  background-color: rgb(223, 223, 223);
}
.iconSearchBoxStyle{
  margin-left: 15;
}
</style>
