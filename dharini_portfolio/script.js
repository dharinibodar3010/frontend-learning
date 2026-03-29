document.addEventListener('DOMContentLoaded', () => {

  // Hamburger Menu Logic
  const menuBtn = document.getElementById('menu-btn');
  const sidebar = document.getElementById('sidebar');

  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
  }

  // Close sidebar when clicking outside
  document.addEventListener('click', (e) => {
    if (sidebar && sidebar.classList.contains('active') && !sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
      sidebar.classList.remove('active');
    }
  });

  // Close sidebar when a navigation link is clicked
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (sidebar) sidebar.classList.remove('active');
    });
  });

  // Dark/Light Theme Toggle Logic
  const themeToggle = document.getElementById('theme-toggle');
  const htmlEl = document.documentElement;

  // Check saved theme
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme) {
    htmlEl.setAttribute('data-theme', savedTheme);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      let currentTheme = htmlEl.getAttribute('data-theme');
      let newTheme = currentTheme === 'light' ? 'dark' : 'light';
      htmlEl.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
    });
  }

  // Scroll to Top Button Logic
  const scrollTopBtn = document.getElementById('scroll-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      if(scrollTopBtn) scrollTopBtn.classList.add('show');
    } else {
      if(scrollTopBtn) scrollTopBtn.classList.remove('show');
    }
  });

  // Typing Animation for Hero Section
  const typedSpan = document.querySelector('.typed-text');
  if (typedSpan) {
    const textArray = ["Frontend Developer", "Web Enthusiast", "Creative Coder"];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function typeText() {
      if (charIndex < textArray[textArrayIndex].length) {
        typedSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingDelay);
      } else {
        setTimeout(eraseText, newTextDelay);
      }
    }

    function eraseText() {
      if (charIndex > 0) {
        typedSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, erasingDelay);
      } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(typeText, typingDelay + 1100);
      }
    }

    setTimeout(typeText, newTextDelay);
  }

  // Skills Progress Bar Animation
  const progressBars = document.querySelectorAll('.progress');
  if (progressBars.length > 0) {
    setTimeout(() => {
      progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
      });
    }, 500);
  }
});
