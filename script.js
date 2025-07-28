// Product info function
function showProductInfo() {
    const productInfo = `
🔥 CAMISETA DISCONNECT EDICIÓN DORADA 🔥

✨ CARACTERÍSTICAS:
• Material: 100% Algodón Premium
• Color: Negro con Logo Dorado
• Tallas disponibles: S, M, L, XL, XXL
• Diseño exclusivo de Disconnect Events

📦 ENVÍO:
• Envío gratuito en Barcelona
• Entrega en 2-3 días laborables
• Packaging premium incluido

💎 EDICIÓN LIMITADA:
Solo disponible por tiempo limitado.
¡No te quedes sin la tuya!

¿Tienes alguna pregunta?
Contáctanos: Carlesmonistrol@gmail.com
Tel: 675 308 293
    `;
    
    alert(productInfo);
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.custom-navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Fade in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in class to elements
    document.querySelectorAll('.event-card, .product-card, .contact-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Mobile menu close on link click
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });

    // Add hover effects to event cards
    document.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add hover effects to product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Button click effects
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        const heroImage = document.querySelector('.hero-image');
        
        if (heroImage) {
            heroImage.style.transform = `translateY(${rate}px)`;
        }
    });

    // Loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // Add dynamic typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = function() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }

    // Form validation (if forms are added later)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add your form validation logic here
            console.log('Form submitted');
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'alert alert-success';
            successMessage.textContent = '¡Mensaje enviado correctamente!';
            form.appendChild(successMessage);
            
            setTimeout(() => {
                successMessage.remove();
            }, 3000);
        });
    });

    // Add click-to-scroll indicator
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    scrollIndicator.innerHTML = '<i class="fas fa-chevron-down"></i>';
    scrollIndicator.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        color: var(--primary-color);
        font-size: 2rem;
        cursor: pointer;
        animation: bounce 2s infinite;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollIndicator);
    
    scrollIndicator.addEventListener('click', () => {
        document.querySelector('#events').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Hide scroll indicator after scrolling
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    });

    // Add CSS for bounce animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateX(-50%) translateY(0);
            }
            40% {
                transform: translateX(-50%) translateY(-10px);
            }
            60% {
                transform: translateX(-50%) translateY(-5px);
            }
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Add loading screen
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.createElement('div');
    loadingScreen.id = 'loading-screen';
    loadingScreen.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #C7DCFF 0%, #ffffff 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    loadingScreen.innerHTML = `
        <div style="text-align: center;">
            <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p style="margin-top: 1rem; color: #333; font-weight: 500;">Cargando Disconnect Events...</p>
        </div>
    `;
    
    document.body.appendChild(loadingScreen);
    
    window.addEventListener('load', function() {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }, 1000);
    });
}); 

// Error handling for resources
window.addEventListener('error', function(e) {
    console.warn('Resource failed to load:', e.target.src || e.target.href);
});

// Mobile detection and optimization
function isMobileDevice() {
    return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Disable complex animations on mobile for better performance
function optimizeForMobile() {
    if (isMobileDevice()) {
        // Add mobile optimization class
        document.body.classList.add('mobile-optimized');
        
        // Disable floating animations
        const floatingElements = document.querySelectorAll('.floating-card, .floating-stat, .floating-element');
        floatingElements.forEach(element => {
            element.style.animation = 'none';
            element.style.transform = 'none';
            element.style.position = 'relative';
        });
        
        // Disable hero image animation
        const heroImages = document.querySelectorAll('.hero-image img');
        heroImages.forEach(img => {
            img.style.animation = 'none';
            img.style.transform = 'none';
        });
        
        // Disable pulse animations
        const pulseElements = document.querySelectorAll('.team-icon, .safety-icon, .work-icon');
        pulseElements.forEach(element => {
            element.style.animation = 'none';
            element.style.transform = 'none';
        });
        
        // Reduce transition times for better performance
        const allElements = document.querySelectorAll('*');
        allElements.forEach(element => {
            const computedStyle = window.getComputedStyle(element);
            if (computedStyle.transitionDuration !== '0s') {
                element.style.transitionDuration = '0.2s';
            }
        });
    }
}

// Update DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    // Remove loading state
    document.body.classList.remove('loading');
    
    // Mobile optimization
    optimizeForMobile();
    
    // Instagram browser detection and optimization
    if (isInstagramBrowser()) {
        console.log('Instagram browser detected, applying optimizations');
        document.body.classList.add('instagram-browser');
        
        // Disable animations for Instagram
        const style = document.createElement('style');
        style.textContent = `
            .instagram-browser * {
                animation: none !important;
                transition: none !important;
                transform: none !important;
            }
            .instagram-browser .floating-card,
            .instagram-browser .floating-stat,
            .instagram-browser .floating-element {
                position: relative !important;
                display: block !important;
                margin: 15px auto !important;
            }
        `;
        document.head.appendChild(style);
        
        // Show "Open in Browser" banner
        showOpenInBrowserBanner();
    }
    
    // Fallback for missing Bootstrap
    if (typeof bootstrap === 'undefined') {
        console.warn('Bootstrap not loaded, using fallbacks');
        // Add basic mobile menu functionality
        const toggler = document.querySelector('.navbar-toggler');
        const collapse = document.querySelector('.navbar-collapse');
        if (toggler && collapse) {
            toggler.addEventListener('click', function() {
                collapse.classList.toggle('show');
            });
        }
    }
}); 

// Optimize on window resize
window.addEventListener('resize', function() {
    optimizeForMobile();
});

// Add "Open in Browser" button for Instagram users
if (isInstagramBrowser()) {
    document.addEventListener('DOMContentLoaded', function() {
        const openBrowserBtn = document.createElement('div');
        openBrowserBtn.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                background: #C7DCFF;
                color: #333;
                padding: 10px;
                text-align: center;
                font-size: 14px;
                font-weight: 600;
                z-index: 9999;
                border-bottom: 1px solid #a8c4f0;
            ">
                📱 Para mejor experiencia, abre en tu navegador
                <button onclick="this.parentElement.parentElement.remove()" style="
                    background: none;
                    border: none;
                    color: #333;
                    font-size: 16px;
                    float: right;
                    cursor: pointer;
                ">×</button>
            </div>
        `;
        document.body.insertBefore(openBrowserBtn, document.body.firstChild);
        
        // Adjust page padding to account for banner
        document.querySelector('.hero-banner').style.paddingTop = '50px';
    });
} 