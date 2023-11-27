var menu = document.querySelector(".rnavbar")
var open = document.querySelector("#menu")
var close = document.querySelector("#close")


open.addEventListener("click" , function(){
    close.style.display = "initial";
    open.style.display = "none";
    menu.style.top = 0;
    // menu.style.display = "initial";

})
close.addEventListener("click" , function(){
    open.style.display = "initial";
    close.style.display = "none";
    menu.style.top = '-100%';
    // menu.style.display = "none";

})

gsap.from(".maincontent",{
    y:1200,
    delay:0.2,
    duration:1,
    stagger:.4

})


