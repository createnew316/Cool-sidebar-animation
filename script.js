const menu =document.querySelector("#menu");
const background=document.querySelector("#background");
const sidenav=document.querySelector("#sidenav");
const close=document.querySelector("#close");

menu.addEventListener('click',function(){
    background.style.transform =`translateX(200px)scale(.4) rotateY(-4deg)`;
    background.style.filter =`blur(1px)`;
    sidenav.style.left='2%';

})

close.addEventListener("click",function(){
    background.style.transform =`translateX(0)scale(1)`;
    background.style.filter =`blur(0)`;
    sidenav.style.left='-10%';

})