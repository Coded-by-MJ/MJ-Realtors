
//Mobile Menu Function

let menubtn = document.getElementById('menu');

menubtn.addEventListener('click', function(){
    menubtn.classList.toggle('active');

    let navbar = document.querySelector(".nav-bar");
    let isActive = menubtn.classList.contains('active');

    if(isActive){
        navbar.classList.remove('fadeout');
        setTimeout(() => {
            navbar.classList.add('nav-bar--mobile'); 
        }, 300); 
    } else {
        navbar.classList.add("fadeout");
        setTimeout(() => {
            navbar.classList.remove('nav-bar--mobile');
        }, 300); 
    }
});

    







// Function to initialize the carousel

let isDown = false;
let startX;
let scrollLeft;



function isDownState(){
    isDown = false;
}

function handleMouseDown(e) {
    const target = e.currentTarget;
    isDown = true;
    startX = e.pageX - target.offsetLeft;
    scrollLeft = target.scrollLeft;

   
}

function handleTouchStart(e) {
    const target = e.currentTarget;
    isDown = true;
    startX = e.touches[0].pageX - target.offsetLeft;
    scrollLeft = target.scrollLeft;

}


function handleMouseMove(e) {
    if (!isDown) return;
    e.preventDefault();
    const target = e.currentTarget;
    const x = e.pageX - target.offsetLeft;
    const walk = (x - startX) * 2;
    target.scrollLeft = scrollLeft - walk;

}

function handleTouchMove(e) {
    if (!isDown) return;
    e.preventDefault();
    const target = e.currentTarget;
    const x = e.touches[0].pageX - target.offsetLeft;
    const walk = (x - startX) * 2;
    target.scrollLeft = scrollLeft - walk;
   
   
}




// Function to handle the "See all" button click event
function handleSeeAllButtonClick() {
    const houseWrapper = document.querySelector('.house-wrapper');
    const svg = this.querySelector('.see-svg');
    const txt = this.querySelector('.see-txt');

    houseWrapper.classList.toggle('open');
    const isOpen = houseWrapper.classList.contains('open'); // Move the isOpen check here
     
        if (isOpen) {
            svg.classList.add('see-rotate');
            txt.textContent = "See less";
            houseWrapper.addEventListener("mousedown", handleMouseDown);
            houseWrapper.addEventListener("mousemove", handleMouseMove);
            houseWrapper.addEventListener("touchstart", handleTouchStart);
            houseWrapper.addEventListener("touchmove", handleTouchMove);
            houseWrapper.addEventListener("mouseup", isDownState);
            houseWrapper.addEventListener("mouseleave", isDownState);
            houseWrapper.addEventListener("touchend", isDownState);

        } else {
            svg.classList.remove('see-rotate');
            txt.textContent = "See all";
            houseWrapper.removeEventListener("mousedown", handleMouseDown);
            houseWrapper.removeEventListener("mousemove", handleMouseMove);
            houseWrapper.removeEventListener("touchstart", handleTouchStart);
            houseWrapper.removeEventListener("touchmove", handleTouchMove);
            houseWrapper.removeEventListener("mouseup", isDownState);
            houseWrapper.removeEventListener("mouseleave", isDownState);
            houseWrapper.removeEventListener("touchend", isDownState);
    
        }

}

// Add event listener for the "See all" button click event
const seeAllBtn = document.querySelector('.see-all');
seeAllBtn.addEventListener('click', handleSeeAllButtonClick);


// Initialize carousel functionality for "carousel-wrap" element
const carouselWrap = document.querySelector('.carousel-wrap');
carouselWrap.addEventListener("mousedown", handleMouseDown);
carouselWrap.addEventListener("mousemove", handleMouseMove);
carouselWrap.addEventListener("touchstart", handleTouchStart);
carouselWrap.addEventListener("touchmove", handleTouchMove);
carouselWrap.addEventListener("mouseup", isDownState);
carouselWrap.addEventListener("mouseleave", isDownState);
carouselWrap.addEventListener("touchend", isDownState);











var scrollToTopBtn = document.querySelector(".scrollTopBtn");

window.onscroll = function () {
    showHideScrollTopButton();
};

window.onresize = function () {
    showHideScrollTopButton();
};

function showHideScrollTopButton() {
    if (window.innerWidth <= 991.98 && window.scrollY > 50) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// Scroll to the top when the button is clicked
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}



