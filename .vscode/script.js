// Check if the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("Nexorigin Website Loaded Successfully!");

    // Example: A simple alert for the 'Get a Quote' button
    const quoteBtn = document.querySelector('.btn-primary');
    quoteBtn.addEventListener('click', () => {
        console.log("User requested a quote.");
    });
});