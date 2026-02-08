/* =============================================
   NGOZAI WEBSITE - INTERACTIVE FUNCTIONALITY
   ============================================= */

(function () {
    'use strict';

    /* =============================================
       PAGE LOADER
       Remove the loader immediately, or after a brief delay.
       Handles the case where 'load' already fired before
       this script runs by checking document.readyState.
       ============================================= */
    function hideLoader() {
        var loader = document.getElementById('page-loader');
        if (loader) {
            loader.classList.add('hidden');
            setTimeout(function () {
                loader.remove();
            }, 600);
        }
    }

    if (document.readyState === 'complete') {
        hideLoader();
    } else {
        window.addEventListener('load', hideLoader);
    }

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
                var offset = 80;
                var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                var navMenu = document.getElementById('nav-menu');
                var hamburger = document.getElementById('hamburger');
                if (navMenu && hamburger) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });

    /* =============================================
       NAVBAR SCROLL EFFECT
       ============================================= */
    var navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });

    /* =============================================
       HAMBURGER MENU
       ============================================= */
    var hamburger = document.getElementById('hamburger');
    var navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            var isOpen = navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Close on Escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.focus();
            }
        });

        // Close when clicking outside
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
    var observerOptions = {
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
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(function (el) {
        fadeInObserver.observe(el);
    });

    /* =============================================
       TIMELINE REVEAL ANIMATION
       ============================================= */
    var timelineObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var items = document.querySelectorAll('.timeline-item');
                var index = Array.prototype.indexOf.call(items, entry.target);
                setTimeout(function () {
                    entry.target.classList.add('is-visible');
                }, index * 150);
                timelineObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.timeline-item').forEach(function (item) {
        timelineObserver.observe(item);
    });

    /* =============================================
       ANIMATED STATS COUNTER
       ============================================= */
    function animateCounter(element, target, suffix, duration) {
        duration = duration || 2000;
        var increment = target / (duration / 16);
        var current = 0;

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
                entry.target.querySelectorAll('.stat-number').forEach(function (stat) {
                    if (stat.dataset.countTarget) {
                        var target = parseInt(stat.dataset.countTarget, 10);
                        var suffix = stat.dataset.countSuffix || '';
                        animateCounter(stat, target, suffix);
                    }
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    var statsCard = document.querySelector('.stats-card');
    if (statsCard) {
        statsObserver.observe(statsCard);
    }

    /* =============================================
       PARALLAX - HERO BACKGROUND
       ============================================= */
    var parallaxElements = document.querySelectorAll('.gradient-orb');
    var ticking = false;

    function updateParallax() {
        var scrolled = window.pageYOffset;
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
       ACTIVE NAVIGATION LINK
       ============================================= */
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function () {
        var current = '';
        sections.forEach(function (section) {
            if (window.pageYOffset >= section.offsetTop - 120) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }, { passive: true });

    /* =============================================
       BACK TO TOP BUTTON
       ============================================= */
    var backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 500) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }, { passive: true });

        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* =============================================
       COOKIE CONSENT BANNER
       ============================================= */
    var cookieBanner = document.getElementById('cookie-consent');
    var cookieAccept = document.getElementById('cookie-accept');
    var cookieDecline = document.getElementById('cookie-decline');

    if (cookieBanner) {
        var cookieChoice = localStorage.getItem('ngozai-cookie-consent');

        if (!cookieChoice) {
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
                validate: function (v) {
                    if (!v.trim()) return 'Please enter your full name.';
                    if (v.trim().length < 2) return 'Name must be at least 2 characters.';
                    return '';
                }
            },
            email: {
                input: document.getElementById('contact-email'),
                error: document.getElementById('email-error'),
                validate: function (v) {
                    if (!v.trim()) return 'Please enter your email address.';
                    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())) return 'Please enter a valid email address.';
                    return '';
                }
            },
            company: {
                input: document.getElementById('contact-company'),
                error: document.getElementById('company-error'),
                validate: function (v) {
                    if (!v.trim()) return 'Please enter your company name.';
                    return '';
                }
            },
            message: {
                input: document.getElementById('contact-message'),
                error: document.getElementById('message-error'),
                validate: function (v) {
                    if (!v.trim()) return 'Please tell us how we can help.';
                    if (v.trim().length < 10) return 'Please provide a bit more detail (at least 10 characters).';
                    return '';
                }
            }
        };

        var privacyCheckbox = document.getElementById('contact-privacy');
        var privacyError = document.getElementById('privacy-error');
        var submitBtn = document.getElementById('form-submit-btn');
        var formSuccess = document.getElementById('form-success');
        var formErrorMsg = document.getElementById('form-error-msg');

        function validateField(field) {
            var msg = field.validate(field.input.value);
            if (msg) {
                field.input.classList.add('input-error');
                field.error.textContent = msg;
                field.error.classList.add('visible');
                return false;
            }
            field.input.classList.remove('input-error');
            field.error.textContent = '';
            field.error.classList.remove('visible');
            return true;
        }

        function validatePrivacy() {
            if (!privacyCheckbox.checked) {
                privacyError.textContent = 'Please accept the privacy policy to continue.';
                privacyError.classList.add('visible');
                return false;
            }
            privacyError.textContent = '';
            privacyError.classList.remove('visible');
            return true;
        }

        // Real-time validation
        Object.keys(formFields).forEach(function (key) {
            var field = formFields[key];
            if (field.input) {
                field.input.addEventListener('blur', function () { validateField(field); });
                field.input.addEventListener('input', function () {
                    if (field.input.classList.contains('input-error')) {
                        field.input.classList.remove('input-error');
                        field.error.textContent = '';
                        field.error.classList.remove('visible');
                    }
                });
            }
        });

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
            formSuccess.classList.remove('visible');
            formErrorMsg.classList.remove('visible');

            var isValid = true;
            Object.keys(formFields).forEach(function (key) {
                if (!validateField(formFields[key])) isValid = false;
            });
            if (!validatePrivacy()) isValid = false;

            if (!isValid) {
                var firstInvalid = contactForm.querySelector('.input-error');
                if (firstInvalid) firstInvalid.focus();
                return;
            }

            submitBtn.classList.add('loading');
            submitBtn.disabled = true;

            var formAction = contactForm.getAttribute('action');

            if (formAction && formAction.indexOf('YOUR_FORM_ID') === -1) {
                fetch(formAction, {
                    method: 'POST',
                    body: new FormData(contactForm),
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
                // Demo mode
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
       SHOWCASE TOGGLE BUTTON
       ============================================= */
    var toggleButton = document.querySelector('.toggle-button');
    if (toggleButton) {
        function activateToggle() {
            toggleButton.classList.toggle('active');
        }
        toggleButton.addEventListener('click', activateToggle);
        toggleButton.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                activateToggle();
            }
        });
    }

    /* =============================================
       CONSOLE
       ============================================= */
    console.log('%cHello from Ngozai!', 'color: #0cc0df; font-size: 20px; font-weight: bold;');
    console.log('%cInterested in making Microsoft Copilot actually work? Let\'s talk!', 'color: #ffde59; font-size: 14px;');
    console.log('%cEmail: hello@ngozai.com', 'color: #0cc0df; font-size: 12px;');

})();
