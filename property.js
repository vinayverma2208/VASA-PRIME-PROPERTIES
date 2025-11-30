// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // ===== Sticky Navbar Effect =====
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    });

    // ===== Fade-In Animation on Scroll =====
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    fadeElements.forEach(el => observer.observe(el));

    // ===== Contact Form Validation =====
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const state = document.getElementById("state").value.trim();
        const city = document.getElementById("city").value.trim();
        const details = document.getElementById("details").value.trim();

        if (!name || !state || !city || !details) {
            alert("⚠️ Please fill in all required fields before submitting.");
            return;
        }

        // Simulate form submission
        alert("✅ Thank you! Your details have been submitted successfully.");
        form.reset();
    });

    // ===== Back to Top Button =====
    const backToTop = document.createElement("button");
    backToTop.innerText = "↑ Top";
    backToTop.id = "backToTop";
    document.body.appendChild(backToTop);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

    backToTop.addEventListener("click", () => {
        // property.js (existing code के नीचे)

    // 4. Show/Hide Forms based on Service Click
    const saleBox = document.querySelector('#services .box:first-child');
    const buyBox = document.querySelector('#services .box:last-child');
    
    const saleFormSection = document.getElementById('sale-form-section');
    const buyFormSection = document.getElementById('buy-form-section');
    const servicesContainer = document.getElementById('services-container');

    function hideAllForms() {
        saleFormSection.classList.remove('show-form');
        buyFormSection.classList.remove('show-form');
    }
    
    // Function to scroll smoothly to the form
    function scrollToForm(element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Event listener for Property Sale
    if (saleBox) {
        saleBox.addEventListener('click', function() {
            hideAllForms();
            saleFormSection.classList.add('show-form');
            scrollToForm(saleFormSection);
        });
    }

    // Event listener for Property Buy
    if (buyBox) {
        buyBox.addEventListener('click', function() {
            hideAllForms();
            buyFormSection.classList.add('show-form');
            scrollToForm(buyFormSection);
        });
    }

    // Optional: Add form submission handler (similar to contact form)
    document.getElementById('sale-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Sale Request Submitted! We will contact you soon.');
        // In real use, fetch() data to server here
        document.getElementById('sale-form').reset();
        hideAllForms();
        scrollToForm(servicesContainer); // Scroll back to services
    });

    document.getElementById('buy-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Purchase Request Submitted! We will find the perfect property for you.');
        // In real use, fetch() data to server here
        document.getElementById('buy-form').reset();
        hideAllForms();
        scrollToForm(servicesContainer);
    });

    // NOTE: Make sure your existing contact form validation (from the previous response) 
    // is still working correctly on the form inside the #Contact-us section.
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
        // JS for previewing multiple images
        function previewImages(event) {
            const previewContainer = document.getElementById('image-preview');
            previewContainer.innerHTML = ''; // Clear previous previews
            const files = event.target.files;

            if (files.length === 0) {
                previewContainer.innerHTML = '<p>No images selected</p>';
                return;
            }

            Array.from(files).forEach(file => {
                if (!file.type.startsWith('image/')) return;

                const reader = new FileReader();
                reader.onload = e => {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.classList.add('preview-img');
                    previewContainer.appendChild(img);
                };
                reader.readAsDataURL(file);
            });
        }

  const userData = JSON.parse(localStorage.getItem("userData"));
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const welcomeUser = document.getElementById("welcomeUser");
  const logoutBtn = document.getElementById("logoutBtn");
  const loginLink = document.getElementById("loginLink");
