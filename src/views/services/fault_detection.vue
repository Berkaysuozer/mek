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
        <img class="slider_img" src="../../assets/newFolder/kirklai-kDoWvQ6iQDY-unsplash.jpg"/>
      </swiper-slide>
    </swiper>
  </div>

  <div class="container second-section">
      <div class="row">
        <div class="col-12 text-left">
          <div class="second-section__title">
            Asansör Arıza Tespit
          </div>
          <div class="second-section__desc">
            Royal Asansör, makine dairesiz asansörler, insan asansörleri, elektrikli asansörler, sedye asansörleri, yük asansörleri, servis asansörleri, panoramik asansörler ve Engelli asansörlerinin bakım, revizyon, montaj, kurulum, onarım ve servis hizmetlerini vermektedir.

Asansörlerinizin ve çevre birimlerinin kullanım ömürleri sonunda sorun çıkarması durumunda, konusunda uzman personelimiz arıza tesbitiyle soruna müdahale edilip güvenle çalışması sağlanır.

Asansörlerinin servis bakım onarımlarında kullanılan yedek parça ve ekipmalar Ülkemizin ve dünyanın önde gelen üreticilerinin ürünleri olup kalite olarak birinci sınıftır.

Servis Bakım Onarımda görev yapan teknik personelimiz konusunda uzman olup tüm eğitim ve sertifikaları tamdır. Böylece arızanın tesbitinden onarım ve tamiratın yapılmasına kadar geçen süre son derece kısadır.        </div>
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