document.addEventListener("DOMContentLoaded", function() {

  const fullScreenButtons = document.querySelectorAll('.swiper-fullscreen');
  
  fullScreenButtons.forEach(fullScreenButton => {
    
    fullScreenButton.addEventListener('click', (e) => {
      
      if(document.fullscreenElement){
        document.exitFullscreen();
        return;
      }

      const swiperContainer = e.target.closest(`.swiper`);

      if (swiperContainer.requestFullscreen) {
        swiperContainer.requestFullscreen();
      }

    });

  });

})