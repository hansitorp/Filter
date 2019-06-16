<template>
  <view class="editPhoto">
    <button 
        :on-press="pickImage"
        title="pickImage"
    />
    <image :style="{width: 500, height: 500}" :source="{uri: 'file:///Users/hansjorgentorp/Downloads/alps-background-calm-1227520%20(1).jpg'}" >
  </view>
</template>


<script>
// TODO :
export default {
    methods: {
        pickImage: async function () {
            const permission = await Permissions.getAsync(Permissions.CAMERA_ROLL);
            if (permission.status !== 'granted') {

                const newPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
                if (newPermission.status === 'granted') {
                 
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




