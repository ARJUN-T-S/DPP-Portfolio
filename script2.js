document.querySelectorAll('.toggle-button').forEach((button) => {
    button.addEventListener('click', () => {
        const card = button.closest('.card');
        const description = card.querySelector('.description');
        const isOpen = description.style.maxHeight && description.style.maxHeight !== '0px';

        if (isOpen) {
            description.style.maxHeight = '0';
            description.style.padding = '0 1vw';
            button.textContent = '+'; // Change button text to '+'
           
        } else {
            description.style.maxHeight = '10vw'; // Adjust for desired height
            description.style.padding = '1vw'; // Add padding
            button.textContent = '-'; // Change button text to '-'
           
        }
    });
});
