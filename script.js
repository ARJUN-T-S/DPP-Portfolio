document.addEventListener("DOMContentLoaded", function() {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    const finalImage = document.getElementById('finalImg');
    const caption = document.getElementById('caption');

    // Start animation after a brief delay
    setTimeout(() => {
        img1.style.opacity = '1'; 
        img2.style.opacity = '1'; 
        img3.style.opacity = '1';

        img1.style.animation = 'slideInFromLeft 4s forwards'; 
        img2.style.animation = 'slideInFromRight 4s forwards'; 
        img3.style.animation = 'slideInFromBottom 4s forwards';

        setTimeout(() => {
            img1.style.animation = 'clashAnimation 0.5s forwards'; 
            img2.style.animation = 'clashAnimation 0.5s forwards'; 
            img3.style.animation = 'clashAnimation 0.5s forwards';

            setTimeout(() => {
                finalImage.style.opacity = '1'; // Fade in final image
                caption.style.opacity = '1'; // Show the caption
            }, 500); // Wait for clash animation
        }, 4000); // Delay for slide-in
    }, 500); // Initial delay
});
