const galleryItems = document.querySelectorAll('.gallery-item-sec4');
let currentIndex = 0;

const prevBtn = document.getElementById('prevBtn-sec4');
const nextBtn = document.getElementById('nextBtn-sec4');

prevBtn.addEventListener('click', showPrevious);
nextBtn.addEventListener('click', showNext);


function showPrevious() {
    galleryItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    galleryItems[currentIndex].classList.add('active');
  }

  function showNext() {
    galleryItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % galleryItems.length;
    galleryItems[currentIndex].classList.add('active');
  }
