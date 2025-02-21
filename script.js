let lastScrollTop = 0; // Store the last scroll position

// Fetch and insert the nav.html content
fetch('nav.html')
    .then(response => response.text()) // Get the text content of the file
    .then(data => {
        document.getElementById('nav-placeholder').innerHTML = data;

        // Now select the navbar after it's loaded
        const navbar = document.querySelector('nav');

        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop) {
                // If scrolling down, move navbar up
                navbar.style.transform = "translateY(-100%)";
            } else {
                // If scrolling up, bring navbar back
                navbar.style.transform = "translateY(0)";
            }

            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scrolling issues
        });
    })
    .catch(error => console.error('Error loading navigation:', error));

// Fetch and insert the footer.html content
fetch('footer.html')
    .then(response => response.text()) // Get the text content of the file
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
