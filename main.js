var burger = document.querySelector(".burger")
var headr__mobile = document.querySelector( ".headr__mobile")
var close =document.querySelector('.close')


burger.onclick= function (){
    headr__mobile.style.display="flex"
}
close.onclick = function () {
    headr__mobile.style.display='none'
}
