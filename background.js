/*
For each image on the page, blur it.
*/
var images = document.getElementsByTagName('img');
for (var i = 0; i < images.length; i++) {
    images[i].style.WebkitFilter = 'blur(15px)';
}
