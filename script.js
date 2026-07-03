// =========================
// HAMBURGER MENU
// =========================

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {

    hamburger.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

    // Tutup menu saat salah satu menu dipilih
    document.querySelectorAll("#nav-menu a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

        });

    });

}

// =========================
// HEADER SCROLL EFFECT
// =========================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 30){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const tujuan=document.querySelector(this.getAttribute("href"));

        if(tujuan){

            tujuan.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});