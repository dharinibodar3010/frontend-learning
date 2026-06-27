
// ==========================
// Announcement Slider
// ==========================
const messages = [
    "COD Available Across India",
    "Free Shipping Available Across India",
    "Easy Return & Exchange Across India"
];

let currentIndex = 0;

const announcement = document.getElementById("announcement");
const prevBtn = document.getElementById("announcementPrevBtn");
const nextBtn = document.getElementById("announcementNextBtn");

function showMessage() {
    announcement.style.opacity = "0";

    setTimeout(() => {
        announcement.textContent = messages[currentIndex];
        announcement.style.opacity = "1";
    }, 200);
}

// Next Button
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % messages.length;
    showMessage();
    resetAutoSlide();
});

// Previous Button
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + messages.length) % messages.length;
    showMessage();
    resetAutoSlide();
});

// Auto Slide
let announcementAutoSlide = setInterval(nextSlide, 3000);

function nextSlide() {
    currentIndex = (currentIndex + 1) % messages.length;
    showMessage();
}

// Reset Auto Slide after manual click
function resetAutoSlide() {
    clearInterval(announcementAutoSlide);
    announcementAutoSlide = setInterval(nextSlide, 3000);
}

// ======================================
// MOBILE MENU
// ======================================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");

    if (mobileMenu.classList.contains("hidden")) {
        menuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    } else {
        menuBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    }

});


// ======================================
// MOBILE MEN DROPDOWN
// ======================================

const mobileMenBtn = document.getElementById("mobileMenBtn");
const mobileMenMenu = document.getElementById("mobileMenMenu");

mobileMenBtn.addEventListener("click", () => {

    mobileMenMenu.classList.toggle("hidden");

});


// ======================================
// MOBILE WOMEN DROPDOWN
// ======================================

const mobileWomenBtn = document.getElementById("mobileWomenBtn");
const mobileWomenMenu = document.getElementById("mobileWomenMenu");

mobileWomenBtn.addEventListener("click", () => {

    mobileWomenMenu.classList.toggle("hidden");

});


// ======================================
// DESKTOP MEN DROPDOWN
// ======================================

const desktopMenBtn = document.getElementById("desktopMenBtn");
const desktopMenMenu = document.getElementById("desktopMenMenu");

// Parent li
const menParent = desktopMenBtn.parentElement;

// Mouse enters parent
menParent.addEventListener("mouseenter", () => {
    desktopMenMenu.classList.remove("hidden");
});

// Mouse leaves parent
menParent.addEventListener("mouseleave", () => {
    desktopMenMenu.classList.add("hidden");
});


// ======================================
// DESKTOP WOMEN DROPDOWN
// ======================================

const desktopWomenBtn = document.getElementById("desktopWomenBtn");
const desktopWomenMenu = document.getElementById("desktopWomenMenu");

// Parent li
const womenParent = desktopWomenBtn.parentElement;

// Mouse enters parent
womenParent.addEventListener("mouseenter", () => {
    desktopWomenMenu.classList.remove("hidden");
});

// Mouse leaves parent
womenParent.addEventListener("mouseleave", () => {
    desktopWomenMenu.classList.add("hidden");
});


// ======================================
// CLOSE DROPDOWNS WHEN CLICK OUTSIDE
// ======================================

document.addEventListener("click", (e) => {

    // Desktop Men
    if (
        !desktopMenBtn.parentElement.contains(e.target)
    ) {
        desktopMenMenu.classList.add("hidden");
    }

    // Desktop Women
    if (
        !desktopWomenBtn.parentElement.contains(e.target)
    ) {
        desktopWomenMenu.classList.add("hidden");
    }

});

// ================================================
// CATEGORY TOGGLE SECTION FOR MEN & WOMEN BUTTONS
// ================================================
function goToPage(page) {
      window.location.href = page;
    }


// ===============================================
// SHOP BY CATEGORY SWIPER
// ===============================================
const categorySwiper = new Swiper(".categorySwiper", {

    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    breakpoints: {
        640: {
            slidesPerView: 3,
        },

        768: {
            slidesPerView: 5,
        },

        1024: {
            slidesPerView: 6,
        },

        1280: {
            slidesPerView: 7,
        }
    }

});

// ==============================================
// Customers Reviews Swiper
// ==============================================
const slider = document.getElementById("reviewSlider");

let scrollAmount = 0;
let reviewSpeed = 1;

function reviewAutoSlide() {

    scrollAmount += reviewSpeed;

    if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0;
    }

    slider.style.transform = `translateX(-${scrollAmount}px)`;

    requestAnimationFrame(reviewAutoSlide);
}

if (slider) {
    reviewAutoSlide();
    slider.addEventListener("mouseenter", () => reviewSpeed = 0);
    slider.addEventListener("mouseleave", () => reviewSpeed = 1);
}


// =============================================
// Slider Navigation
// ============================================
const slider1 = document.getElementById("slider1");
const nextBtnEl = document.getElementById("nextBtn");
const prevBtnEl = document.getElementById("prevBtn");

if (nextBtnEl && slider1) {
    nextBtnEl.addEventListener("click", () => {
        slider1.scrollBy({
            left: 350,
            behavior: "smooth"
        });
    });
}

if (prevBtnEl && slider1) {
    prevBtnEl.addEventListener("click", () => {
        slider1.scrollBy({
            left: -350,
            behavior: "smooth"
        });
    });
}

// ============================================
// Scroll to Top Button
// ============================================
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        scrollBtn.classList.remove("hidden");
    }else{
        scrollBtn.classList.add("hidden");
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


// // ==========================================
// // TOP WEAR ACTIVE TAB 
// // ==========================================

// const topWearTabs = document.querySelectorAll(".tab-btn");

// topWearTabs.forEach(tab => {

//     tab.addEventListener("click", function () {

//         // Remove active style
//         topWearTabs.forEach(item => {
//             item.classList.remove("text-black", "border-black");
//             item.classList.add("text-gray-500", "border-transparent");
//         });

//         // Add active style
//         this.classList.remove("text-gray-500", "border-transparent");
//         this.classList.add("text-black", "border-black");

//     });

// }); 


// =============================================
// LOGIN POPUP — Profile Icon Click (3s delay)
// =============================================

let popupTimer = null;

function openLoginPopup() {
    // Cancel any previous timer
    if (popupTimer) clearTimeout(popupTimer);

    // Wait 3 seconds then show the popup
    popupTimer = setTimeout(() => {
        const overlay = document.getElementById("loginPopupOverlay");
        if (overlay) {
            overlay.style.display = "flex";
        }
    }, 3000);
}

function closeLoginPopup() {
    const overlay = document.getElementById("loginPopupOverlay");
    if (overlay) {
        overlay.style.display = "none";
    }
    if (popupTimer) {
        clearTimeout(popupTimer);
        popupTimer = null;
    }
}

// Close popup when clicking dark overlay background
const popupOverlay = document.getElementById("loginPopupOverlay");
if (popupOverlay) {
    popupOverlay.addEventListener("click", function(e) {
        if (e.target === this) {
            closeLoginPopup();
        }
    });
}

// Close popup on ESC key
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        closeLoginPopup();
    }
});

// Phone number validation & login in popup
function handlePopupLogin() {
    const phoneInput = document.getElementById("popupPhone");
    const phone = phoneInput ? phoneInput.value.trim() : "";

    if (/^[0-9]{10}$/.test(phone)) {
        closeLoginPopup();
        showSuccessToast();
    } else {
        if (phoneInput) {
            phoneInput.style.borderColor = "#ef4444";
            phoneInput.placeholder = "Enter valid 10-digit number";
            phoneInput.value = "";
            setTimeout(() => {
                phoneInput.style.borderColor = "#d1d5db";
                phoneInput.placeholder = "10-digit mobile number";
            }, 2500);
        }
    }
}

// Show green success toast
function showSuccessToast() {
    const toast = document.getElementById("successToast");
    if (!toast) return;
    toast.style.display = "block";
    toast.style.animation = "fadeInUp 0.4s ease";
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transition = "opacity 0.3s ease";
        setTimeout(() => {
            toast.style.display = "none";
            toast.style.opacity = "1";
        }, 300);
    }, 3000);
}

// ===============================================
// HERO SECTION DYNAMIC OFFERS (TAILWIND)
// ===============================================
const heroOffers = [
    { discount: "₹200", minOrder: "₹3000" },
    { discount: "₹400", minOrder: "₹5000" },
    { discount: "₹700", minOrder: "₹7000" }
];

function renderHeroOffers() {
    const offerContainer = document.getElementById("hero-dynamic-offers");
    
    if (offerContainer) {
        offerContainer.innerHTML = heroOffers.map(item => `
            <p class="flex items-center gap-2 transition-all duration-300 hover:translate-x-1">
                <span class="text-yellow-400">✔</span> ${item.discount} OFF on orders above ${item.minOrder}
            </p>
        `).join('');
    }
}

document.addEventListener("DOMContentLoaded", renderHeroOffers);