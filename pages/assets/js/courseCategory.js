document.addEventListener('DOMContentLoaded', function() {
    // Select the tab buttons
    const btnMostPopular = document.getElementById('btnMostPopular');
    const btnTrending = document.getElementById('btnTrending');
    
    // Select the content divs using their correct IDs from the HTML
    const mostPopularContent = document.getElementById('mostPopularContent');
    const trendingContent = document.getElementById('trendingContent');
    
    // Select the underline element
    const tabUnderline = document.getElementById('tabUnderline');

    /**
     * Activates a specified tab and updates the underline position.
     * @param {HTMLElement} activeButton - The tab button that was clicked/activated.
     * @param {HTMLElement} targetContent - The content div to display.
     */
    function activateTab(activeButton, targetContent) {
        // Remove 'active' class from all tab buttons
        document.querySelectorAll('.tab-menu a').forEach(btn => btn.classList.remove('active'));
        
        // Hide all tab content divs
        document.querySelectorAll('.tab-content').forEach(content => content.classList.add('d-none'));

        // Add 'active' class to the clicked button
        activeButton.classList.add('active');

        // Show the target content div
        targetContent.classList.remove('d-none');

        // Move the underline
        moveUnderline(activeButton);
    }

    /**
     * Moves the underline below the given button.
     * @param {HTMLElement} button - The button element to align the underline with.
     */
    function moveUnderline(button) {
        if (!button || !tabUnderline) return; // Exit if elements are not found

        // Get the bounding rectangle of the button and the parent tab menu
        const buttonRect = button.getBoundingClientRect();
        const tabMenuRect = button.closest('.tab-menu').getBoundingClientRect();
        
        // Set the width and left position of the underline
        tabUnderline.style.width = `${buttonRect.width}px`;
        // Calculate left position relative to the tab menu container
        tabUnderline.style.left = `${buttonRect.left - tabMenuRect.left}px`;
    }

    // Add event listeners to the tab buttons
    if (btnMostPopular && mostPopularContent) {
        btnMostPopular.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior (page refresh)
            activateTab(btnMostPopular, mostPopularContent);
        });
    }

    if (btnTrending && trendingContent) {
        btnTrending.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior (page refresh)
            activateTab(btnTrending, trendingContent);
        });
    }

    // --- Initialization and Resize Handling ---

    // Initialize the underline position when the page loads
    // This ensures 'Most Popular' is active by default
    if (btnMostPopular && tabUnderline) {
        // Ensure that mostPopularContent is visible on load
        mostPopularContent.classList.remove('d-none');
        trendingContent.classList.add('d-none'); // Ensure trending is hidden
        btnMostPopular.classList.add('active'); // Ensure most popular button is active
        moveUnderline(btnMostPopular);
    }

    // Adjust underline position on window resize
    window.addEventListener('resize', () => {
        // Find the currently active tab button
        const activeBtn = document.querySelector('.tab-menu a.active');
        if (activeBtn) {
            moveUnderline(activeBtn);
        }
    });

    // --- Scroll Buttons (Optional: if these elements exist in your HTML) ---
    // Make sure these elements ('.left-btn', '.right-btn', '.trending-scroll') exist in your HTML
    // if you want this part of the code to function.

    const leftScrollBtn = document.querySelector('.left-btn');
    const rightScrollBtn = document.querySelector('.right-btn');
    const trendingScrollContainer = document.querySelector('.trending-scroll');

    if (leftScrollBtn && trendingScrollContainer) {
        leftScrollBtn.addEventListener('click', () => {
            trendingScrollContainer.scrollBy({
                left: -320,
                behavior: 'smooth'
            });
        });
    }

    if (rightScrollBtn && trendingScrollContainer) {
        rightScrollBtn.addEventListener('click', () => {
            trendingScrollContainer.scrollBy({
                left: 320,
                behavior: 'smooth'
            });
        });
    }
});