// Mobile Menu Functionality
        const menuToggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('nav');
        const overlay = document.querySelector('.overlay');
        
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            nav.classList.toggle('active');
            overlay.classList.toggle('active');
            
            // Toggle body scroll when menu is open
            if (nav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        overlay.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

document.addEventListener("DOMContentLoaded", () => {
    // Existing code for first slider
    const slides = document.querySelectorAll(".gallery-slider__slide");
    if (slides.length) {
        [...slides].forEach((slide) => {
            slide.addEventListener("click", () => {
                slides.forEach((s) => s.classList.remove("active"));
                slide.classList.add("active");
            });
        });
    }

    // Function to handle trivia sliders
    function initializeTriviaSlider(slider) {
        const wrapper = slider.querySelector('.trivia-wrapper');
        const slides = slider.querySelectorAll('.trivia-slide');
        const prevButton = slider.querySelector('.trivia-prev');
        const nextButton = slider.querySelector('.trivia-next');
        let currentIndex = 0;

        function updateSlide() {
            wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        nextButton.addEventListener('click', () => {
            if (currentIndex < slides.length - 1) {
                currentIndex++;
                updateSlide();
            }
        });

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlide();
            }
        });
    }

    // Initialize all trivia sliders
    document.querySelectorAll('.trivia-slider').forEach(initializeTriviaSlider);

    // Fade slider for Youngest Laureates
    const fadeSlider = document.querySelector('.fade-slider');
    if (fadeSlider) {
        const slides = fadeSlider.querySelectorAll('.fade-slide');
        const prevButton = fadeSlider.querySelector('.fade-prev');
        const nextButton = fadeSlider.querySelector('.fade-next');
        let currentIndex = 0;

        function updateFadeSlide() {
            slides.forEach((slide, index) => {
                slide.classList.toggle('active', index === currentIndex);
            });
        }

        nextButton.addEventListener('click', () => {
            if (currentIndex < slides.length - 1) {
                currentIndex++;
                updateFadeSlide();
            }
        });

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateFadeSlide();
            }
        });
    }

    // Scroll animations
    const scrollElements = document.querySelectorAll('[data-scroll]');
    const scrollThreshold = window.innerHeight * 0.8;

    function checkScroll() {
        scrollElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < scrollThreshold) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check
});










document.addEventListener("DOMContentLoaded", () => {
	const slides = document.querySelectorAll(".gallery-slider__slide");

	if (!slides.length) return;

	[...slides].forEach((slide) => {
		slide.addEventListener("click", () => {
			slides.forEach((slide) => slide.classList.remove("active"));

			slide.classList.add("active");
		});
	});
});


//Trivia
 const slider = document.querySelector('.trivia-slider');
        const wrapper = slider.querySelector('.trivia-wrapper');
        const slides = wrapper.querySelectorAll('.trivia-slide');
        const prevButton = slider.querySelector('.trivia-prev');
        const nextButton = slider.querySelector('.trivia-next');

        function nextSlide() {
            const current = wrapper.querySelector('.trivia-slide.active');
            let next = current.nextElementSibling;
            if (!next || !next.classList.contains('trivia-slide')) {
                next = slides[0];
            }
            current.classList.remove('active');
            next.classList.add('active');
        }

        function prevSlide() {
            const current = wrapper.querySelector('.trivia-slide.active');
            let prev = current.previousElementSibling;
            if (!prev || !prev.classList.contains('trivia-slide')) {
                prev = slides[slides.length - 1];
            }
            current.classList.remove('active');
            prev.classList.add('active');
        }

        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);

        // Auto-play every 5 seconds
        setInterval(nextSlide, 5000);