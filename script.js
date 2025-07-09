 // Smooth scroll untuk anchor
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e){
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      document.querySelector(hash).scrollIntoView({
        behavior: "smooth"
      });
      // Close mobile nav if needed
    }
  });
});

// Scroll To Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function() {
  // Show/hide scroll top button
  if (document.body.scrollTop > 260 || document.documentElement.scrollTop > 260) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};
scrollTopBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Produk hover efek (tambahan interaksi)
document.querySelectorAll('.produk-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('is-hovered');
  });
  card.addEventListener('mouseleave', () => {
    card.classList.remove('is-hovered');
  });
});

// Newsletter form validation
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const emailInput = document.getElementById('email');
  const formMsg = document.getElementById('formMsg');
  const email = emailInput.value.trim();

  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    formMsg.textContent = "Email wajib diisi.";
    emailInput.style.border = "2px solid #d81b60";
    return;
  }
  if (!emailRegex.test(email)) {
    formMsg.textContent = "Format email tidak valid.";
    emailInput.style.border = "2px solid #d81b60";
    return;
  }
  // Success
  formMsg.textContent = "Terima kasih! Kode diskon sudah dikirim ke email Anda.";
  formMsg.style.color = "#ffe4ed";
  emailInput.value = '';
  emailInput.style.border = "2px solid #32b67a";
  setTimeout(() => {
    formMsg.textContent = "";
    emailInput.style.border = "none";
  }, 3800);
});

// Efek animasi saat produk dihover
document.querySelectorAll('.produk-card').forEach(card => {
  card.addEventListener('mousemove', function(e) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top;  // y position within the element.
    card.style.transform = `translateY(-12px) scale(1.03) rotate(${(x-130)/35}deg)`;
  });
  card.addEventListener('mouseleave', function() {
    card.style.transform = '';
  });
});

// Navbar shadow ketika discroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 30) {
    navbar.style.boxShadow = '0 2px 16px 0 rgba(216, 27, 96, 0.14)';
  } else {
    navbar.style.boxShadow = '';
  }
});
