/* ============================================
   OPEN INVITATION
============================================ */

const openBtn = document.getElementById("openInvitation");
const opening = document.getElementById("opening");
const content = document.getElementById("content");
const music = document.getElementById("music");

openBtn.addEventListener("click", () => {

    opening.style.transition = "1s";

    opening.style.opacity = "0";

    setTimeout(() => {

        opening.style.display = "none";

        content.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 900);

    music.play().catch(() => {
        console.log("Autoplay diblokir browser.");
    });

});

/* ============================================
   AOS
============================================ */

AOS.init({

    duration: 1200,
    once: true,
    easing: "ease-in-out"

});

/* ============================================
   BACK TO TOP
============================================ */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

/* ============================================
   FLOATING PHOTO
============================================ */

const photo = document.querySelector(".photo-frame");

let scale = 1;

let up = true;

setInterval(() => {

    if (up) {

        scale += 0.001;

        if (scale >= 1.05) up = false;

    } else {

        scale -= 0.001;

        if (scale <= 1) up = true;

    }

    photo.style.transform =
        `translateY(-8px) scale(${scale})`;

}, 30);

/* ============================================
   SCROLL REVEAL
============================================ */

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .2

});

cards.forEach(card => {

    observer.observe(card);

});

/* ============================================
   PARALLAX FLOWER
============================================ */

window.addEventListener("scroll", () => {

    const value = window.scrollY;

    document.querySelector(".flower-left").style.transform =
        `translateY(${value*0.15}px) rotate(${value*0.02}deg)`;

    document.querySelector(".flower-right").style.transform =
        `translateY(${value*0.12}px) rotate(${-value*0.02}deg)`;

});

/* ============================================
   BUTTON RIPPLE
============================================ */

const buttons = document.querySelectorAll("button,.maps");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transition=".3s";

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

/* ============================================
   CURRENT YEAR FOOTER
============================================ */

const footer = document.querySelector("footer p");

footer.innerHTML +=
`<br><br>© ${new Date().getFullYear()} All Rights Reserved`;

/* ============================================
   FLOWER PARTICLES
============================================ */

const petals = document.getElementById("petals");

function createPetal(){

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.animationDuration =
        (Math.random() * 5 + 6) + "s";

    petal.style.animationDelay =
        Math.random() * 5 + "s";

    petal.style.width =
        (Math.random() * 18 + 12) + "px";

    petal.style.height =
        petal.style.width;

    petals.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },11000);

}

setInterval(createPetal,400);