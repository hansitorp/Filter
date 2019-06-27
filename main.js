(function ($) {
"use strict";

   
function createCanvasElement(id, width, height) {
var canvas = document.createElement('canvas');
canvas.id = 'id';
canvas.width = width;
canvas.height = height;

return canvas;
}

function applyLUT(contextList) {
var imageContext = contextList[0];
var lutContext = contextList[1];
var imageData = imageContext.getImageData(0, 0, 640, 480);
var lutData = lutContext.getImageData(0, 0, 512, 512);
for (var i = 0; i < imageData.data.length; i += 4) {
var r = Math.floor(imageData.data[i] / 4);
var g = Math.floor(imageData.data[i + 1] / 4);
var b = Math.floor(imageData.data[i + 2] / 4);
var lutX = (b % 8) * 64 + r;
var lutY = Math.floor(b / 8) * 64 + g;
var lutIndex = (lutY * 512 + lutX) * 4;
imageData.data[i] = lutData.data[lutIndex];
imageData.data[i + 1] = lutData.data[lutIndex + 1];;
imageData.data[i + 2] = lutData.data[lutIndex + 2];;
}

document.getElementById('resultCanvas').getContext("2d").putImageData(imageData, 0, 0);
}

function filterImage(imageUrl, imageId, lutImageUrl, lutImageId, contextList){
var img = new Image;
img.src = imageUrl;

img.onload = function(){
var theCanvas = createCanvasElement(imageId, this.width, this.height);
var context = theCanvas.getContext("2d");

context.drawImage(img, 0, 0);
contextList.push(context);

if(contextList.length === 2){
applyLUT(contextList);
} else {
filterImage(lutImageUrl, lutImageId, null, null, contextList);
}
}
}

function filterImageWithLUT(originalImageUrl, lutImageUrl) {
filterImage(originalImageUrl, 'imageCanvas', lutImageUrl, 'lutCanvas', []);
}


})(jQuery);