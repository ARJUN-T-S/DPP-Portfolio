function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add the animated class to elements in viewport
function checkVisibility() {
    const images = document.querySelectorAll('.c2img, .c3img, .c4img, .c5img');
    
    // Automatically add animation to the first image
    const firstImage = images[0];
    if (firstImage && !firstImage.classList.contains('animated')) {
        firstImage.classList.add('animated');
    }

    // Loop through other images and add animation if they're in the viewport
    images.forEach(image => {
        if (isElementInViewport(image) && !image.classList.contains('animated')) {
            image.classList.add('animated');
        }
    });
}

// Listen for scroll and resize events
window.addEventListener('scroll', checkVisibility);
window.addEventListener('resize', checkVisibility);

// Initial check
checkVisibility();