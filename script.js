/* =============================================
   NGOZAI WEBSITE - INTERACTIVE FUNCTIONALITY
   ============================================= */

(function () {
    'use strict';

    /* =============================================
       PAGE LOADER
       ============================================= */
    window.addEventListener('load', function () {
        var loader = document.getElementById('page-loader');
        if (loader) {
            setTimeout(function () {
                loader.classList.add('hidden');
            }, 300);
            setTimeout(function () {
                loader.remove();
            }, 800);
        }
    });

    /* =============================================
       SMOOTH SCROLLING
       ============================================= */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href === '#') return;
            var target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                var offset = 80; // Account for fixed navbar
                var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* =============================================
       NAVBAR SCROLL EFFECT
       ============================================= */
    var navbar = document.querySelector('.navbar');

    function handleNavbarScroll() {
        if (window.pageYOffset > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavbarScroll, { passive: true });

    /* =============================================
       HAMBURGER MENU TOGGLE
       ============================================= */
    var hamburger = document.getElementById('hamburger');
    var navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            var isOpen = navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Close menu when clicking on a link
        navMenu.querySelectorAll('.nav-link').forEach(function (link) {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu on Escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.focus();
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (navMenu.classList.contains('active') &&
                !navMenu.contains(e.target) &&
                !hamburger.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }

    /* =============================================
       INTERSECTION OBSERVER - FADE-IN ANIMATIONS
       ============================================= */
    var fadeInObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    var fadeInObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, fadeInObserverOptions);

    // Observe all elements with .fade-in class
    document.querySelectorAll('.fade-in').forEach(function (el) {
        fadeInObserver.observe(el);
    });

    /* =============================================
       TIMELINE REVEAL ANIMATION
       ============================================= */
    var timelineObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                // Stagger the animation based on item index
                var items = document.querySelectorAll('.timeline-item');
                var index = Array.prototype.indexOf.call(items, entry.target);
                setTimeout(function () {
                    entry.target.classList.add('is-visible');
                }, index * 150);
                timelineObserver.unobserve(entry.target);
            }
        });
    }, fadeInObserverOptions);

    document.querySelectorAll('.timeline-item').forEach(function (item) {
        timelineObserver.observe(item);
    });

    /* =============================================
       ANIMATED STATS COUNTER
       ============================================= */
    function animateCounter(element, target, suffix, duration) {
        duration = duration || 2000;
        var start = 0;
        var increment = target / (duration / 16);
        var current = start;

        var timer = setInterval(function () {
            current += increment;
            if (current >= target) {
                element.textContent = target + suffix;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, 16);
    }

    var statsObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(function (stat) {
                    // Only animate stats with data-count-target attribute
                    if (stat.dataset.countTarget) {
                        var target = parseInt(stat.dataset.countTarget, 10);
                        var suffix = stat.dataset.countSuffix || '';
                        animateCounter(stat, target, suffix);
                    }
                    // Non-animated stats (like "2-4") remain unchanged
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, fadeInObserverOptions);

    var statsCard = document.querySelector('.stats-card');
    if (statsCard) {
        statsObserver.observe(statsCard);
    }

    /* =============================================
       PARALLAX EFFECT - HERO BACKGROUND
       ============================================= */
    var parallaxElements = document.querySelectorAll('.gradient-orb');
    var ticking = false;

    function updateParallax() {
        var scrolled = window.pageYOffset;
        // Only apply parallax when hero section is in view
        if (scrolled < window.innerHeight * 1.5) {
            parallaxElements.forEach(function (element, index) {
                var speed = 0.3 + (index * 0.1);
                element.style.transform = 'translate(' +
                    (Math.sin(scrolled * 0.002 + index) * 10) + 'px, ' +
                    (scrolled * speed * 0.3) + 'px)';
            });
        }
        ticking = false;
    }

    window.addEventListener('scroll', function () {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }, { passive: true });

    /* =============================================
       ACTIVE NAVIGATION LINK HIGHLIGHTING
       ============================================= */
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-link');

    function updateActiveLink() {
        var current = '';
        sections.forEach(function (section) {
            var sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 120) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });

    /* =============================================
       BACK TO TOP BUTTON
       ============================================= */
    var backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        function toggleBackToTop() {
            if (window.pageYOffset > 500) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }

        window.addEventListener('scroll', toggleBackToTop, { passive: true });

        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* =============================================
       COOKIE CONSENT BANNER
       ============================================= */
    var cookieBanner = document.getElementById('cookie-consent');
    var cookieAccept = document.getElementById('cookie-accept');
    var cookieDecline = document.getElementById('cookie-decline');

    if (cookieBanner) {
        // Check if user has already made a choice
        var cookieChoice = localStorage.getItem('ngozai-cookie-consent');

        if (!cookieChoice) {
            // Show banner after a short delay
            setTimeout(function () {
                cookieBanner.classList.add('visible');
                cookieBanner.setAttribute('aria-hidden', 'false');
            }, 1500);
        }

        function hideCookieBanner(choice) {
            localStorage.setItem('ngozai-cookie-consent', choice);
            cookieBanner.classList.remove('visible');
            cookieBanner.setAttribute('aria-hidden', 'true');
        }

        if (cookieAccept) {
            cookieAccept.addEventListener('click', function () {
                hideCookieBanner('accepted');
            });
        }

        if (cookieDecline) {
            cookieDecline.addEventListener('click', function () {
                hideCookieBanner('declined');
            });
        }
    }

    /* =============================================
       CONTACT FORM VALIDATION & SUBMISSION
       ============================================= */
    var contactForm = document.getElementById('contact-form');

    if (contactForm) {
        var formFields = {
            name: {
                input: document.getElementById('contact-name'),
                error: document.getElementById('name-error'),
                validate: function (value) {
                    if (!value.trim()) return 'Please enter your full name.';
                    if (value.trim().length < 2) return 'Name must be at least 2 characters.';
                    return '';
                }
            },
            email: {
                input: document.getElementById('contact-email'),
                error: document.getElementById('email-error'),
                validate: function (value) {
                    if (!value.trim()) return 'Please enter your email address.';
                    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRe.test(value.trim())) return 'Please enter a valid email address.';
                    return '';
                }
            },
            company: {
                input: document.getElementById('contact-company'),
                error: document.getElementById('company-error'),
                validate: function (value) {
                    if (!value.trim()) return 'Please enter your company name.';
                    return '';
                }
            },
            message: {
                input: document.getElementById('contact-message'),
                error: document.getElementById('message-error'),
                validate: function (value) {
                    if (!value.trim()) return 'Please tell us how we can help.';
                    if (value.trim().length < 10) return 'Please provide a bit more detail (at least 10 characters).';
                    return '';
                }
            }
        };

        var privacyCheckbox = document.getElementById('contact-privacy');
        var privacyError = document.getElementById('privacy-error');
        var submitBtn = document.getElementById('form-submit-btn');
        var formSuccess = document.getElementById('form-success');
        var formErrorMsg = document.getElementById('form-error-msg');

        // Real-time validation on blur
        Object.keys(formFields).forEach(function (key) {
            var field = formFields[key];
            if (field.input) {
                field.input.addEventListener('blur', function () {
                    validateField(field);
                });
                // Clear error on input
                field.input.addEventListener('input', function () {
                    clearFieldError(field);
                });
            }
        });

        function validateField(field) {
            var errorMsg = field.validate(field.input.value);
            if (errorMsg) {
                field.input.classList.add('input-error');
                field.error.textContent = errorMsg;
                field.error.classList.add('visible');
                return false;
            } else {
                clearFieldError(field);
                return true;
            }
        }

        function clearFieldError(field) {
            field.input.classList.remove('input-error');
            field.error.textContent = '';
            field.error.classList.remove('visible');
        }

        function validatePrivacy() {
            if (!privacyCheckbox.checked) {
                privacyError.textContent = 'Please accept the privacy policy to continue.';
                privacyError.classList.add('visible');
                return false;
            } else {
                privacyError.textContent = '';
                privacyError.classList.remove('visible');
                return true;
            }
        }

        if (privacyCheckbox) {
            privacyCheckbox.addEventListener('change', function () {
                if (privacyCheckbox.checked) {
                    privacyError.textContent = '';
                    privacyError.classList.remove('visible');
                }
            });
        }

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Hide previous status messages
            formSuccess.classList.remove('visible');
            formErrorMsg.classList.remove('visible');

            // Validate all fields
            var isValid = true;
            Object.keys(formFields).forEach(function (key) {
                if (!validateField(formFields[key])) {
                    isValid = false;
                }
            });

            if (!validatePrivacy()) {
                isValid = false;
            }

            if (!isValid) {
                // Focus the first invalid field
                var firstInvalid = contactForm.querySelector('.input-error');
                if (firstInvalid) firstInvalid.focus();
                return;
            }

            // Show loading state
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;

            // Attempt to submit to Formspree (or show success for demo)
            var formAction = contactForm.getAttribute('action');

            if (formAction && formAction.indexOf('YOUR_FORM_ID') === -1) {
                // Real Formspree submission
                var formData = new FormData(contactForm);

                fetch(formAction, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                })
                .then(function (response) {
                    submitBtn.classList.remove('loading');
                    submitBtn.disabled = false;

                    if (response.ok) {
                        formSuccess.classList.add('visible');
                        contactForm.reset();
                    } else {
                        formErrorMsg.classList.add('visible');
                    }
                })
                .catch(function () {
                    submitBtn.classList.remove('loading');
                    submitBtn.disabled = false;
                    formErrorMsg.classList.add('visible');
                });
            } else {
                // Demo mode: simulate successful submission
                setTimeout(function () {
                    submitBtn.classList.remove('loading');
                    submitBtn.disabled = false;
                    formSuccess.classList.add('visible');
                    contactForm.reset();
                }, 1500);
            }
        });
    }

    /* =============================================
       CARD HOVER ENHANCEMENT
       ============================================= */
    document.querySelectorAll('.problem-card, .solution-card, .why-point, .testimonial-card').forEach(function (card) {
        card.addEventListener('mouseenter', function () {
            this.style.transition = 'all 0.3s ease';
        });
    });

    /* =============================================
       CONSOLE EASTER EGG
       ============================================= */
    console.log('%c👋 Hello from Ngozai!', 'color: #0078D4; font-size: 20px; font-weight: bold;');
    console.log('%cInterested in making Microsoft Copilot actually work? Let\'s talk!', 'color: #8661C5; font-size: 14px;');
    console.log('%cEmail: hello@ngozai.com', 'color: #00BCF2; font-size: 12px;');

})();
