$(document).ready(function($) {
    limitImgWidth();
});


function limitImgWidth() {
  var imgs = document.getElementsByTagName('img');
  for (j=0; j<imgs.length; j++){
    imgs[j].classList.add("img-fluid");
  }
}