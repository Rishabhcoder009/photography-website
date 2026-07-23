const buttons=document.querySelectorAll(".filter-btn");

const items=document.querySelectorAll(".gallery-item");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

document.querySelector(".active").classList.remove("active");

button.classList.add("active");

const filter=button.dataset.filter;

items.forEach(item=>{

if(filter==="all"){

item.style.display="block";

}

else{

item.style.display=item.classList.contains(filter)
? "block"
: "none";

}

});

});

});
/* ==========================================
            LIGHTBOX
========================================== */

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.getElementById("close-lightbox");

galleryImages.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImg.src=img.src;

    });

});

closeBtn.addEventListener("click",()=>{

    lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});