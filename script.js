/**
 * Clínica Odontológica Seu Dente
 * JavaScript Vanilla ES6+
 * Interações e funcionalidades
 */

// ========================================
// DOM Ready
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initMobileMenu();
    initScrollReveal();
    initSmoothScroll();
    initParallax();
    initActiveNav();
    initDepoimentosCarousel();
    initWhatsappForm();
});

// ========================================
// Header - Scroll Effect
// ========================================
const initHeader = () => {
    const header = document.getElementById('header');
    const scrollThreshold = 50;
    let lastScroll = 0;

    const handleScroll = () => {
        const currentScroll = window.pageYOffset;

        // Efeito de fundo (scrolled)
        if (currentScroll > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Lógica de esconder/mostrar baseado na direção
        if (currentScroll > lastScroll && currentScroll > 200) {
            // Rola para baixo - esconde
            header.classList.add('header-hidden');
        } else {
            // Rola para cima - mostra
            header.classList.remove('header-hidden');
        }

        lastScroll = currentScroll <= 0 ? 0 : currentScroll; // Evita valores negativos
    };

    // Throttle scroll event for performance
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
};

// ========================================
// Mobile Menu
// ========================================
const initMobileMenu = () => {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    const body = document.body;

    // Create overlay if it doesn't exist
    let overlay = document.querySelector('.menu-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        body.appendChild(overlay);
    }

    if (!menuToggle || !nav) return;

    const toggleMenu = () => {
        const isActive = nav.classList.contains('active');

        if (!isActive) {
            // Open
            menuToggle.classList.add('active');
            nav.classList.add('mobile', 'active');
            overlay.classList.add('active');
            body.classList.add('menu-open');
            body.style.overflow = 'hidden';
            menuToggle.setAttribute('aria-expanded', 'true');
        } else {
            closeMenu();
        }
    };

    const closeMenu = () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('menu-open');
        body.style.overflow = '';
        menuToggle.setAttribute('aria-expanded', 'false');

        // Delay removal of 'mobile' class to allow transition
        setTimeout(() => {
            if (!nav.classList.contains('active')) {
                nav.classList.remove('mobile');
            }
        }, 400);
    };

    // Toggle menu on button click
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // Close on overlay click
    overlay.addEventListener('click', closeMenu);

    // Close menu when clicking on nav links
    const navLinks = nav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('active')) {
            closeMenu();
        }
    });

    // Handle resize - close mobile menu on desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && nav.classList.contains('active')) {
            closeMenu();
        }
    });
};

// ========================================
// Scroll Reveal Animation
// ========================================
const initScrollReveal = () => {
    const revealElements = document.querySelectorAll(
        '.servico-card, .depoimento-card, .sobre-content, .info-item, .footer-links, .footer-contact, .footer-brand'
    );

    // Add reveal class to elements
    revealElements.forEach(el => {
        el.classList.add('reveal');
    });

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        revealElements.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                // Add stagger delay based on index
                setTimeout(() => {
                    element.classList.add('active');
                }, (index % 3) * 100);
            }
        });
    };

    // Initial check
    revealOnScroll();

    // Throttled scroll listener
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                revealOnScroll();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
};

// ========================================
// Smooth Scroll for Anchor Links
// ========================================
const initSmoothScroll = () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - headerHeight - 20;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
};

// ========================================
// Parallax Effect for Hero Shapes
// ========================================
const initParallax = () => {
    const shapes = document.querySelectorAll('.hero-shape');

    if (shapes.length === 0) return;

    // Check for touch device - disable parallax on mobile
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleParallax = () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;

        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.1;
            const yPos = -(rate * speed);
            shape.style.transform = `translateY(${yPos}px)`;
        });
    };

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleParallax();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
};

// ========================================
// Active Navigation State
// ========================================
const initActiveNav = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (sections.length === 0 || navLinks.length === 0) return;

    const setActiveNav = () => {
        const scrollPosition = window.pageYOffset + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    // Initial check
    setActiveNav();

    // Throttled scroll listener
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                setActiveNav();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
};

// ========================================
// Utility Functions
// ========================================

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
const debounce = (func, wait = 100) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

/**
 * Throttle function
 * @param {Function} func - Function to throttle
 * @param {number} limit - Limit time in milliseconds
 * @returns {Function} Throttled function
 */
const throttle = (func, limit = 100) => {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// ========================================
// Prefers Reduced Motion
// ========================================
const respectReducedMotion = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        // Disable all animations
        document.documentElement.style.setProperty('--transition-fast', '0.01ms');
        document.documentElement.style.setProperty('--transition-base', '0.01ms');
        document.documentElement.style.setProperty('--transition-slow', '0.01ms');
        document.documentElement.style.setProperty('--transition-slower', '0.01ms');
    }
};

// Check on load
respectReducedMotion();

// Listen for changes
window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', respectReducedMotion);

// ========================================
// Form Validation (if forms are added later)
// ========================================
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

const validatePhone = (phone) => {
    const re = /^[\d\s\-\(\)\+]{10,20}$/;
    return re.test(String(phone));
};

// ========================================
// Lazy Loading Images (if needed)
// ========================================
const initLazyLoading = () => {
    const lazyImages = document.querySelectorAll('img[data-src]');

    if (lazyImages.length === 0) return;

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px'
    });

    lazyImages.forEach(img => imageObserver.observe(img));
};

// Initialize lazy loading
initLazyLoading();

// ========================================
// Depoimentos Carousel
// ========================================
const initDepoimentosCarousel = () => {
    const grid = document.getElementById('depoimentosGrid');
    const container = document.querySelector('.depoimentos-carousel-container');
    const dotsContainer = document.getElementById('carouselDots');

    if (!grid || !container || !dotsContainer) return;

    const cards = grid.querySelectorAll('.depoimento-card');
    let isDragging = false;
    let startX;
    let scrollLeft;
    let currentIndex = 0;
    let autoplayInterval;

    // Create Dots
    const updateDots = () => {
        const totalSlides = Math.ceil(cards.length / getVisibleCards());
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === currentIndex) dot.classList.add('active');
            dot.addEventListener('click', () => {
                goToSlide(i);
                stopAutoplay(); // Parar auto-play quando usuário interage
            });
            dotsContainer.appendChild(dot);
        }
    };

    const getVisibleCards = () => {
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    };

    const goToSlide = (index) => {
        const visibleCards = getVisibleCards();
        const maxIndex = Math.ceil(cards.length / visibleCards) - 1;
        currentIndex = (index > maxIndex) ? 0 : (index < 0) ? maxIndex : index; // Loop infinito

        const cardWidth = cards[0].offsetWidth + 24; // Width + gap
        const offset = currentIndex * (cardWidth * visibleCards);

        grid.style.transform = `translateX(-${offset}px)`;
        updateDots();
    };

    // Auto-play Logic
    const startAutoplay = () => {
        autoplayInterval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 5000);
    };

    const stopAutoplay = () => {
        clearInterval(autoplayInterval);
    };

    // Drag/Touch Logic
    const startDragging = (e) => {
        isDragging = true;
        startX = (e.pageX || e.touches[0].pageX) - grid.offsetLeft;
        scrollLeft = currentIndex;
        grid.style.transition = 'none';
        stopAutoplay();
    };

    const stopDragging = () => {
        if (!isDragging) return;
        isDragging = false;
        grid.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';

        // Snap to nearest slide
        const visibleCards = getVisibleCards();
        const cardWidth = cards[0].offsetWidth + 24;
        const currentTransform = new WebKitCSSMatrix(window.getComputedStyle(grid).transform).m41;
        const index = Math.round(Math.abs(currentTransform) / (cardWidth * visibleCards));
        goToSlide(index);
        startAutoplay();
    };

    const move = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = (e.pageX || e.touches[0].pageX) - grid.offsetLeft;
        const walk = (x - startX);
        const cardWidth = cards[0].offsetWidth + 24;
        const visibleCards = getVisibleCards();
        const baseOffset = currentIndex * (cardWidth * visibleCards);
        grid.style.transform = `translateX(${-baseOffset + walk}px)`;
    };

    // Event Listeners
    container.addEventListener('mousedown', startDragging);
    container.addEventListener('touchstart', startDragging);

    window.addEventListener('mouseup', stopDragging);
    container.addEventListener('touchend', stopDragging);

    container.addEventListener('mousemove', move);
    container.addEventListener('touchmove', move);

    // Pause on Hover
    container.addEventListener('mouseenter', stopAutoplay);
    container.addEventListener('mouseleave', startAutoplay);

    window.addEventListener('resize', () => {
        goToSlide(0);
        updateDots();
    });

    // Initial Setup
    updateDots();
    startAutoplay();
};

// ========================================
// WhatsApp Form Handling
// ========================================
const initWhatsappForm = () => {
    const form = document.getElementById('whatsappForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Capture data
        const name = document.getElementById('form-name').value;
        const phone = document.getElementById('form-whatsapp').value;
        const service = document.getElementById('form-service').value;
        const message = document.getElementById('form-message').value;

        // Destination number
        const whatsappNumber = '5521988894860';

        // Format message
        const text = `Olá, me chamo ${name}, vim através do site e gostaria de uma informação.

- E-mail: (Não solicitado no form atual)
- Telefone: ${phone}
- Assunto/Serviço: ${service}
- Mensagem/Situação: ${message || 'Sem mensagem adicional.'}`;

        // Create URL
        const encodedText = encodeURIComponent(text);
        const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

        // Redirect
        window.open(url, '_blank');
    });
};

// ========================================
// Console Welcome Message
// ========================================
console.log('%c🦷 Clínica Odontológica Seu Dente', 'font-size: 20px; font-weight: bold; color: #4c338c;');
console.log('%cHá 18 anos cuidando do seu sorriso com excelência!', 'font-size: 14px; color: #6B6B6B;');
console.log('%cRealengo, Rio de Janeiro', 'font-size: 12px; color: #9B9B9B;');
