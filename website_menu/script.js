// Language Toggle
const langToggle = document.getElementById('lang-toggle');
const enElements = document.querySelectorAll('.lang-en');
const kaElements = document.querySelectorAll('.lang-ka');

langToggle.addEventListener('click', () => {
    document.body.classList.toggle('georgian');

    enElements.forEach(el => el.style.display = document.body.classList.contains('georgian') ? 'none' : 'block');
    kaElements.forEach(el => el.style.display = document.body.classList.contains('georgian') ? 'block' : 'none');

    // Update scroll to reflect language toggle
    if (window.location.hash) {
        const anchor = document.querySelector(window.location.hash);
        if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});

// Dark Mode Toggle
const darkToggle = document.getElementById('dark-toggle');
const prefersDark = localStorage.getItem('theme') === 'dark';

if (prefersDark) {
    document.body.classList.add('dark-mode');
}

darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Dietary Filter
const filters = document.querySelectorAll('.diet-filter input');

filters.forEach(filter => {
    filter.addEventListener('change', () => {
        const active = Array.from(filters).filter(f => f.checked).map(f => f.value);
        const items = document.querySelectorAll('.menu-item');

        items.forEach(item => {
            const match = active.some(category => item.classList.contains(category));
            item.style.display = match ? 'flex' : 'none';
        });
    });
});

// Show/hide Back to Top button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// Scroll-to-anchor with offset fix
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            e.preventDefault();
            const yOffset = -80;
            const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    });
});

// Lightbox Image Viewer
function openLightbox(img) {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
    <div class="lightbox-content">
      <img src="${img.src}" alt="${img.alt}" />
      <button class="lightbox-close" onclick="document.body.removeChild(this.parentNode.parentNode)">✕</button>
    </div>
  `;
    document.body.appendChild(overlay);
}

document.getElementById('signupButton').addEventListener('click', () => {
    const email = document.getElementById('emailInput').value;
    if (email && email.includes('@')) {
        alert(`Thanks for subscribing, ${email}!`);
        document.getElementById('emailInput').value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});
