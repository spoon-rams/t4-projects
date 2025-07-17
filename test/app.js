console.log("CONNECTED!");

document.addEventListener('DOMContentLoaded', function() {
    const mainNav = document.getElementById('main-nav');
    const fillStart = 0; // Scroll position where the fill starts (e.g., at the very top)
    const fillEnd = 200; // Scroll position where the fill is complete (e.g., 200px down)

    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;

        // Calculate the progress of the scroll within the fill range
        let progress = (scrollY - fillStart) / (fillEnd - fillStart);

        // Clamp the progress between 0 and 1
        progress = Math.max(0, Math.min(1, progress));

        // Use the progress to set the opacity of the background color
        // For a dark navigation bar (#333), the rgba would be rgba(51, 51, 51, opacity)
        // You can change the base color (51, 51, 51) to any RGB value you desire.
        mainNav.style.backgroundColor = `rgba(51, 51, 51, ${progress})`;

        // Optional: Change text color as well
        // If you want text to change color, you'd calculate a color blend here
        // or apply a class when opacity reaches a certain threshold.
        // For simplicity, we'll assume text remains white for a dark nav bar.
    });
});


