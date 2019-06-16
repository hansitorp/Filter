<template>
  <view class="editPhoto">
    <button title="Pick an image from camera roll" onPress="pickImage"/>
    <image :style="{width: 500, height: 500}" :source="{uri: 'file:///Users/hansjorgentorp/Downloads/alps-background-calm-1227520%20(1).jpg'}" >
  </view>
</template>


<script>
// TODO : make this async??
export default {
    methods: {
        pickImage: function () {
            const permission = await Permissions.getAsync(Permissions.CAMERA_ROLL);
            if (permission.status !== 'granted') {

                const newPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
                if (newPermission.status === 'granted') {
                 //its granted.
                    }
            }
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




