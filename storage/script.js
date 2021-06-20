var j = 0;
var images = [];
var time = 1000;

images[0] = 'storage/slider/wonderful.jpg';
images[1] = 'storage/slider/bromo.jpg';
images[2] = 'storage/slider/pantaiora.jpg';
images[3] = 'storage/slider/dufan.jpg';
images[4] = 'storage/slider/nihiwatu.jpg';
images[5] = 'storage/slider/semeru.jpg';



function changeImg(){
    document.slide.src = images[j];

    if(j < images.length - 1){
        j++;
    }else{
        j = 0;
    }
    setTimeout("changeImg()", time);

}
window.onload = changeImg;