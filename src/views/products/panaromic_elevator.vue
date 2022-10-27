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
        <div class="content_services text-center">
            <div class="content_services-title ">              
              <p style="margin:10px">Panaromik  Asansörler</p>
            </div>
          </div>
          <img class="slider_img" src="../../assets/asansor/page-background.jpg"/>
      </swiper-slide>
    </swiper>
  </div>

  <div class="container second-section">
      <div class="row">
        <div class="col-12 text-left">
          <div class="second-section__title">
            Panaromik Asansörler
          </div>
          <div class="second-section__desc">
            <br> <br>   Panoramik asansörlerin çalışma prensibi olarak diğer insan asansörlerinden farkı olduğu söylenemez. şeffaf malzemelerle çevrelenmiş kuyulara konuşlandırılabildiği gibi, sadece yüzeyi şeffaf, diğerleri inşaat malzemelerinden inşa edilmiş kuyulara da kurulabilir.

            <br> <br>  Bir estetik harikası, binanızın mimarisine ayrı bir özellik katan panoramik asansörler her bina için ayrı ayrı tasarlanır.Kabinin cam ile çerçevelenmiş olması kullanıcısına ayrı bir ferahlık vermekte ve insanlar kapalı bir kabin yerine panoramik asansörleri tercih etmektedir.

            <br> <br>  Panoramik asansörler, alışveriş merkezleri, iş merkezleri, eğlence mekanları, oteller, restoranlar, büyük metro ve tren garlarında daha çok tercih edilir.

            <br> <br>  3 kişiden 22 kişiye kadar çeşitli taşıma kapasiteleri bulunmaktadır.Panoramik asansörün etrafı cam olması nedeniyle kullanıcılarına keyifli bir seyir sağlar. Asansörü kullanan kişi yada kişilerin seyir halindeyken kabin dışını görebilir olması, kapalı asansörlere göre çok daha rahatlatıcı ve asansör korkusu olanlar için huzur vericidir.

            <br> <br>  Panoramik asansörler bina içine monte edilebildiği gibi binanın dış cephesine de monte edilebilir
          Panoramik asansör modelleri, yapının durumuna göre yuvarlak, kare, üçgen v.b. şekillerde olabilir.
          </div>
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