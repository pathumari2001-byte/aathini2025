/* =========================
   Sticky Navbar
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


/* =========================
   Smooth Scroll
========================= */

/* =========================
   Smooth Scroll (Fixed)
========================= */

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

    
        if (href.startsWith("#")) {

            e.preventDefault();

            const target = document.querySelector(href);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        }

    
    });

});

/* =========================
   Search Function
========================= */

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}


/* =========================
   Scroll Animation
========================= */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".card").forEach(card => {

    observer.observe(card);

});


/* =========================
   Contact Form
========================= */

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your enquiry has been sent successfully.");

        form.reset();

    });

}
/* =========================
   Counter Animation
========================= */

const counters = document.querySelectorAll(".stat-box h2");

const speed = 200;

counters.forEach(counter => {

    const updateCounter = () => {

        const target = parseInt(counter.innerText);

        const count = +counter.getAttribute("data-count") || 0;

        const increment = Math.ceil(target / speed);

        if (count < target) {

            counter.setAttribute("data-count", count + increment);

            counter.innerText = count + increment + "+";

            setTimeout(updateCounter, 10);

        } else {

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});


/* =========================
   Card Hover Effect
========================= */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});


/* =========================
   Button Ripple Effect
========================= */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        this.style.opacity = "0.8";

        setTimeout(() => {

            this.style.opacity = "1";

        }, 150);

    });

});


/* =========================
   Scroll To Top Button
========================= */

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.left = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#0B3D91";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";


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
/* =========================
   Dark Mode Toggle
========================= */

const themeBtn = document.querySelector(".theme-toggle");

if(themeBtn){

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

});

}


/* =========================
   Mobile Menu
========================= */

const menuBtn = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");
const icon = menuBtn.querySelector("i");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");

        if (navbar.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }

    });

}


/* =========================
   Hero Image Slider
========================= */

const slides = document.querySelectorAll(".hero-slide");

let currentSlide = 0;

function showSlide(){

if(slides.length===0) return;

slides.forEach(slide=>{

slide.style.display="none";

});

currentSlide++;

if(currentSlide > slides.length){

currentSlide = 1;

}

slides[currentSlide-1].style.display="block";

}

setInterval(showSlide,4000);

showSlide();


/* =========================
   Favorite Button
========================= */

const favButtons = document.querySelectorAll(".favorite-btn");

favButtons.forEach(button=>{

button.addEventListener("click",()=>{

button.classList.toggle("active");

if(button.classList.contains("active")){

button.innerHTML="❤️";

}else{

button.innerHTML="🤍";

}

});

});


/* =========================
   Loading Animation
========================= */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


/* =========================
   Current Year
========================= */

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

/* =========================
   Testimonials Slider
========================= */

const testimonials = document.querySelectorAll(".testimonial-card");

let testimonialIndex = 0;

function showTestimonials() {

    if (testimonials.length === 0) return;

    testimonials.forEach(card => {
        card.style.display = "none";
    });

    testimonialIndex++;

    if (testimonialIndex > testimonials.length) {
        testimonialIndex = 1;
    }

    testimonials[testimonialIndex - 1].style.display = "block";
}

if (testimonials.length > 0) {
    showTestimonials();
    setInterval(showTestimonials, 5000);
}


/* =========================
   Email Validation
========================= */

const emailInput = document.querySelector('input[type="email"]');

if (emailInput) {

    emailInput.addEventListener("blur", function () {

        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (this.value !== "" && !pattern.test(this.value)) {

            alert("Please enter a valid email address.");

            this.focus();

        }

    });

}



/* =========================
   Button Click Animation
========================= */

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("click", function () {

        this.style.transform = "scale(0.95)";

        setTimeout(() => {

            this.style.transform = "scale(1)";

        }, 150);

    });

});


/* =========================
   Welcome Message
========================= */

window.addEventListener("load", function () {

    console.log("Welcome to AATHINI Website");

});


/* =========================
   End of Script
========================= */
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        const whatsappMessage =
`🏠 New Enquiry

👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone}

📝 Message:
${message}`;

        window.open(
            "https://wa.me/918778025494?text=" +
            encodeURIComponent(whatsappMessage),
            "_blank"
        );

    });

}