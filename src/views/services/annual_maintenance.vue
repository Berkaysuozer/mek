<template>
    <div>
        <swiper
        :spaceBetween="30"
        :effect="'fade'"
        :navigation="true"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <img class="slider_img" src="../../assets/newFolder/petr-magera-UlH5Bj0-9aU-unsplash.jpg"/>
        </swiper-slide>
      </swiper>
    </div>

    <div class="container second-section">
      <div class="row">
        <div class="col-12 text-left">
          <div class="second-section__title">
            Asansör YIllık Bakım
          </div>
          <div class="second-section__desc">
            Asansörler kullanım amacı gereği tüm gün çalışan makinelerdir. Bu yüzden doğru projelendirilmemiş montajında eksiklikler bulunan yada revize edilmesi gereken asansörler kısa aralıklara arıza vermektedirler.          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
  
  // Import Swiper styles
  import "swiper/css";  
  import "swiper/css/effect-fade";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  
  
  // import required modules
  import { EffectFade, Navigation, Pagination,Autoplay } from "swiper";
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [EffectFade, Navigation, Pagination, Autoplay],
      };
    },
  };
  </script>