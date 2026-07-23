/* =========================
NAVBAR
========================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});

/* =========================
MENU
========================= */

const menuToggle=document.getElementById("menuToggle");

const navLinks=document.getElementById("navLinks");

menuToggle.addEventListener("click",()=>{

navLinks.classList.toggle("show");

});

/* =========================
SCROLL REVEAL
========================= */

const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",reveal);

reveal();

function reveal(){

const windowHeight=window.innerHeight;

reveals.forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top<windowHeight-120){

section.classList.add("active");

}

});

}
/* ===========================
   BACK TO TOP
=========================== */

const backToTop = document.getElementById("backToTop");

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
/* ===========================
        LOADER
=========================== */

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

loader.classList.add("loader-hide");

});
/* ===========================
   SCROLL PROGRESS
=========================== */

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});