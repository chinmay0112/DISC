document.addEventListener('DOMContentLoaded', function () {
    const contentCards = document.querySelector('.content-cards');
    const iconLeft = document.querySelector('.fa-arrow-left');
    const iconRight = document.querySelector('.fa-arrow-right');
  
    let scrollAmount = 0;
    const cardWidth = document.querySelector('.content-card').offsetWidth;
    const totalCards = document.querySelectorAll('.content-card').length;
  
    iconLeft.addEventListener('click', function () {
        scrollAmount -= cardWidth;
        if (scrollAmount < 0) {
            scrollAmount = 0;
        }
        contentCards.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
  
    iconRight.addEventListener('click', function () {
        scrollAmount += cardWidth;
        if (scrollAmount > (totalCards - 1) * cardWidth) {
            scrollAmount = (totalCards - 1) * cardWidth;
        }
        contentCards.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
  });

  function changeFontSize(size) {
    const body = document.body;
    const currentSize = parseInt(window.getComputedStyle(body).fontSize);

    switch (size) {
        case 'normal':
            body.style.fontSize = '16px';
            break;
        case 'larger':
            body.style.fontSize = (currentSize + 1) + 'px';
            break;
        case 'largest':
            body.style.fontSize = (currentSize + 2) + 'px';
            break;
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
   
    
}