document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");
    
    progressBars.forEach(bar => {
        const width = bar.getAttribute("data-width");
        bar.style.width = width;
    });

    document.getElementById("contact-form").addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you! Your message has been sent.");
        this.reset();
    });
});
