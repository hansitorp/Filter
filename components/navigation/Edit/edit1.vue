<template>
  <view class="editPhoto">
    <button title="Pick an image from camera roll" onPress="pickImage"/>
    <image :style="{width: 500, height: 500}" :source="{uri: 'file:///Users/hansjorgentorp/Downloads/alps-background-calm-1227520%20(1).jpg'}" >
  </view>
</template>


<script>
import { Camera, Permissions } from "expo";
import { Image } from 'react-native';
// TODO : make this async??
export default {

    props: {
        navigation: {
            type: Object
        },
    },
    components: { 
        Camera,
        Image,
    },
    data: function() {
        return {
            hasImagesPermission: false,
            picture: '',
            loading: false,
        }
    },
    mounted: function() {
        Permissions.askAsync(Permissions.CAMERA_ROLL)
        .then(status => {
            hasCameraPermission = status.status == "granted" ? true : false;
        }).catch((err)=>{
            console.log(err);
        });
    },


  
};
</script>

<style>
.editPhoto {
  flex: 1;
  align-items: center;
  justify-content: center;
}
</style>




