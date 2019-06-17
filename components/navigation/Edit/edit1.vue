<template>
<nb-container :style="{ backgroundColor: '#BBA7A1' }">
<view>
<HeaderOnlyTitle v-if="result.cancelled === true" :navigation = "navigation"
                    :headerTitle = "title">
</view>
<view>
<HeaderCancel v-if="result.cancelled === false" :navigation = "navigation"
                    :headerTitle = "title"
                    :onPress="CancelImage">
</view>
                  
  <view class="editPhoto">
    <button v-if="result.cancelled === true" :on-press="pickImage" title="pickImage"/>
    <image
        v-if="result.cancelled === false"
        :style="{width: 300, height: 300}"
        :source="{uri: result.uri}"
    >

  </view>
</nb-container>
</template>


<script>
// import { Camera } from "expo";
import { Image } from 'react-native';
import React from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
// TODO : make this async??
export default {

    props: {
        navigation: {
            type: Object
        },
    },
    components: { 
        // Camera,
        Image,
    },
    data: function() {
        return {
            title: 'Edit',
            hasImagesPermission: false,
            picture: '',
            loading: false,
            result: {cancelled: true},
        }
    },
    mounted: function() {
        console.log(this.result.cancelled)
        Permissions.askAsync(Permissions.CAMERA_ROLL)
        .then(status => {
            hasCameraPermission = status.status == "granted" ? true : false;
        }).catch((err)=>{
            console.log(err);
        });
    },


// TODO : make chosen photo display.
  methods: {
    pickImage: async function() {
      this.result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: false,
        aspect: [4, 3]
      });

        console.log(this.result)

    },
    ShowHideSearch: function() {
        alert('Clicked Image')
    },
    CancelImage: function() {
        this.result = {cancelled: true}
    }
  }
};
</script>

<style>
.editPhoto {
  flex: 1;
  align-items: center;
  justify-content: center;
}
</style>




