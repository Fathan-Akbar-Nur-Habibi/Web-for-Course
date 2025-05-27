  feather.replace(); // Wajib untuk render ikon Feather
      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
      })

      // Scroll Logic
  const scrollContainer = document.getElementById('recommendedCarousel');
  const scrollLeftBtn = document.getElementById('scrollLeft');
  const scrollRightBtn = document.getElementById('scrollRight');

  scrollLeftBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
      left: -300, // adjust scroll distance
      behavior: 'smooth'
    });
  });

  scrollRightBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  });

// Scroll logic Most Popular
  const popularCarousel = document.getElementById('popularCarousel'); 
  const popularScrollLeftBtn = document.getElementById('popularScrollLeft'); 
  const popularScrollRightBtn = document.getElementById('popularScrollRight'); 

  popularScrollLeftBtn.addEventListener('click', () => {
    popularCarousel.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  });

  popularScrollRightBtn.addEventListener('click', () => {
    popularCarousel.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  });

 // ===== Scroll Logic for Trending =====
  const trendingCarousel = document.getElementById('trendingCarousel'); 
  const trendingScrollLeftBtn = document.getElementById('trendingScrollLeft'); 
  const trendingScrollRightBtn = document.getElementById('trendingScrollRight');

  trendingScrollLeftBtn.addEventListener('click', () => {
    trendingCarousel.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  });

  trendingScrollRightBtn.addEventListener('click', () => {
    trendingCarousel.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  });