// Form Validation Logic
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const feedback = document.getElementById('formFeedback');

    if (name === "" || email === "") {
        feedback.innerHTML = '<span class="text-danger">Please fill in all fields.</span>';
    } else {
        feedback.innerHTML = `<span class="text-success">Thank you, ${name}! We will contact you soon.</span>`;
        this.reset();
    }
});

// Dynamic Navbar Effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.padding = "10px 0";
    } else {
        nav.style.padding = "20px 0";
    }
});