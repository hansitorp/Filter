<template>
  <view class="editPhoto">
    <button title="Pick an image from camera roll" onPress="{this._pickImage}"/>
    <image :style="{width: 500, height: 500}" :source="{image}">
  </view>
</template>


<script>
export default {

    
  
};
</script>

<style>
.editPhoto {
  flex: 1;
  align-items: center;
  justify-content: center;
}
</style>




