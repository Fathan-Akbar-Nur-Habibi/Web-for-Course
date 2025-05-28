const mostPopularTab = document.getElementById('mostPopular');
  const trendingTab = document.getElementById('trending');
  const btnMostPopular = document.getElementById('btnMostPopular');
  const btnTrending = document.getElementById('btnTrending');
  const underline = document.getElementById('tabUnderline');

  function activateTab(tabName) {
    if (tabName === 'mostPopular') {
      mostPopularTab.classList.remove('d-none');
      trendingTab.classList.add('d-none');
      btnMostPopular.classList.add('active');
      btnTrending.classList.remove('active');
      moveUnderline(btnMostPopular);
    } else {
      trendingTab.classList.remove('d-none');
      mostPopularTab.classList.add('d-none');
      btnTrending.classList.add('active');
      btnMostPopular.classList.remove('active');
      moveUnderline(btnTrending);
    }
  }

  function moveUnderline(button) {
    underline.style.width = `${button.offsetWidth}px`;
    underline.style.left = `${button.offsetLeft}px`;
  }

  btnMostPopular.addEventListener('click', () => activateTab('mostPopular'));
  btnTrending.addEventListener('click', () => activateTab('trending'));

  // Inisialization
  window.addEventListener('DOMContentLoaded', () => moveUnderline(btnMostPopular));
  window.addEventListener('resize', () => {
    const activeBtn = document.querySelector('.tab-menu button.active');
    moveUnderline(activeBtn);
  });

// bbutton scroll
 document.querySelector('.left-btn').addEventListener('click', () => {
    document.querySelector('.trending-scroll').scrollBy({
      left: -320,
      behavior: 'smooth'
    });
  });

  document.querySelector('.right-btn').addEventListener('click', () => {
    document.querySelector('.trending-scroll').scrollBy({
      left: 320,
      behavior: 'smooth'
    });
  });
