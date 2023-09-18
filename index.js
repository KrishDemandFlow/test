<script>

const swiper = new Swiper('.swiper.is-office', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  
  spaceBetween:20,
  
  autoplay: {
            delay: 800,
            disableOnInteraction: false,
        },

 

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button.swiper-btn-next',
    prevEl: '.swiper-button.swiper-btn-prev',
  },

 
});

</script>
