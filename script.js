// Typing Effect
const typingEffect = new Typed('#wrd', {
    strings: ['Networking', 'Python Fundamentals', 'Operating Systems', 'Project Management', 'Analysis'],
    typeSpeed: 90,
    loop: true
});

// Menu Toggle
const menuButton = document.querySelector('.hamburger');
const navigationMenu = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active');
    navigationMenu.classList.toggle('active');
});

// Popup Window Controls
const openPopup = () => document.getElementById('popup').style.display = 'flex';
const closePopup = () => document.getElementById('popup').style.display = 'none';

const copyUPI = () => {
    const upiElement = document.getElementById('upi-id');
    if (upiElement) {
        navigator.clipboard.writeText(upiElement.textContent).then(() => {
            alert('UPI ID copied successfully!');
        }).catch(() => {
            alert('Error copying UPI ID');
        });
    }
};

// Dynamic Footer Year
const currentYearElement = document.getElementById("currentYear");
if (currentYearElement) currentYearElement.textContent = new Date().getFullYear();

// Footer Visibility Animation
const footer = document.querySelector('.footer');
if (footer) {
    const footerOffset = footer.offsetTop;
    const footerHeight = footer.offsetHeight;

    const handleScroll = () => {
        if (window.scrollY + window.innerHeight > footerOffset + footerHeight / 4) {
            footer.classList.add('footer-animation');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
}

// Image Slider
const slider = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slides img');
let slideIndex = 0;
const slideSpeed = 2000;

const updateSlide = () => {
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
};

document.querySelector('.next')?.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slideImages.length;
    updateSlide();
});

document.querySelector('.prev')?.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slideImages.length) % slideImages.length;
    updateSlide();
});

setInterval(() => {
    slideIndex = (slideIndex + 1) % slideImages.length;
    updateSlide();
}, slideSpeed);
