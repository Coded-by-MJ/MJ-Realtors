
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
function initCarousel(wrapperElement) {
    let startX;
    let scrollLeft;

    function handleMouseDown(e) {
        startX = e.pageX - wrapperElement.offsetLeft;
        scrollLeft = wrapperElement.scrollLeft;
        wrapperElement.style.scrollBehavior = 'unset';
    }

    function handleMouseMove(e) {
        if (!startX) return;
        e.preventDefault();
        const x = e.pageX - wrapperElement.offsetLeft;
        const walk = (x - startX) * 2; 
        wrapperElement.scrollLeft = scrollLeft - walk;
    }

    function handleMouseUp() {
        startX = null;
        wrapperElement.style.scrollBehavior = 'smooth';
    }

    function handleTouchStart(e) {
        startX = e.touches[0].pageX - wrapperElement.offsetLeft;
        scrollLeft = wrapperElement.scrollLeft;
        wrapperElement.style.scrollBehavior = 'unset';
    }

    function handleTouchMove(e) {
        if (!startX) return;
        e.preventDefault();
        const x = e.touches[0].pageX - wrapperElement.offsetLeft;
        const walk = (x - startX) * 2;
        wrapperElement.scrollLeft = scrollLeft - walk;
    }

    function handleTouchEnd() {
        startX = null;
        wrapperElement.style.scrollBehavior = 'smooth';
    }

    // Add event listeners for mouse and touch events to enable scrolling
    wrapperElement.addEventListener('mousedown', handleMouseDown);
    wrapperElement.addEventListener('mousemove', handleMouseMove);
    wrapperElement.addEventListener('mouseup', handleMouseUp);
    wrapperElement.addEventListener('mouseleave', handleMouseUp);
    wrapperElement.addEventListener('touchstart', handleTouchStart);
    wrapperElement.addEventListener('touchmove', handleTouchMove);
    wrapperElement.addEventListener('touchend', handleTouchEnd);

    // Return a function to remove event listeners
    return function removeEventListeners() {
        wrapperElement.removeEventListener('mousedown', handleMouseDown);
        wrapperElement.removeEventListener('mousemove', handleMouseMove);
        wrapperElement.removeEventListener('mouseup', handleMouseUp);
        wrapperElement.removeEventListener('mouseleave', handleMouseUp);
        wrapperElement.removeEventListener('touchstart', handleTouchStart);
        wrapperElement.removeEventListener('touchmove', handleTouchMove);
        wrapperElement.removeEventListener('touchend', handleTouchEnd);
    };
}

// Function to handle the "See all" button click event
function handleSeeAllButtonClick() {
    const houseWrapper = document.querySelector('.house-wrapper');
    setTimeout(() => {
        houseWrapper.classList.toggle('open');
        const isOpen = houseWrapper.classList.contains('open'); // Move the isOpen check here
        const svg = document.querySelector('.see-svg');
        const txt = document.querySelector('.see-txt');
        if (isOpen) {
            const removeListeners = initCarousel(houseWrapper); // Initialize carousel functionality when "See all" section is open
            svg.classList.add('see-rotate');
            txt.textContent = "See less";
            // Save the function to remove event listeners directly on the houseWrapper element
            houseWrapper.removeEventListeners = removeListeners;
        } else {
            svg.classList.remove('see-rotate');
            txt.textContent = "See all";
            // Remove event listeners when section is closed
            const removeListeners = houseWrapper.removeEventListeners;
            if (removeListeners) {
                removeListeners();
                houseWrapper.removeEventListeners = null;
            }
        }
    }, 300);
}

// Add event listener for the "See all" button click event
const seeAllBtn = document.querySelector('.see-all');
seeAllBtn.addEventListener('click', handleSeeAllButtonClick);


// Initialize carousel functionality for "carousel-wrap" element
const carouselWrap = document.querySelector('.carousel-wrap');
initCarousel(carouselWrap);










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



