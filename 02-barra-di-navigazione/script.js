"use strict";


var openclose = false;
var main = document.getElementById("main-navigation");

function togglefun(){
   
   openclose ^= true;
   main.className = ((openclose) ? "open" : "close" );
   
}
var menu = document.getElementById("hamburger");
menu.addEventListener("click", togglefun);