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
        <img class="slider_img" src="../../assets/newFolder/edwin-chen-bIghQbDIcY4-unsplash.jpg"/>
      </swiper-slide>
    </swiper>
  </div>

  <div class="container second-section">
      <div class="row">
        <div class="col-12 text-left">
          <div class="second-section__title">
            Asansör Montaj
          </div>
          <div class="second-section__desc">
            Yeni bir elektrikli insan ve yük asansörünü, EN 81-1 / A3, Hidrolik tarhikli insan ve yük asansörünü, EN 81/2 / A3 standartında, Elektrikli ve Hidrolik Servis Asansörleri EN 81-3 / A1 standartında yapmakta CE işareti iliştirmekteyiz.

Montajda öncelikle tesise uygun, sisteme güvenilir, şık, son teknoloji ürünü bir asansör olması gerekir. Montaj ekibi alanında uzman mühendis ve teknikerlerden oluşmaktadır. Servis ekibimiz montaj ile ilgili çalışmalarını müşterilerinin isteklerine göre en uygun şekilde projelendirip, montaj sürecini projeye uygun olarak tamamlar ve asansör teslimini yapması için asansörü son kontrol ekibimize teslim eder. Son kontrol ekibimiz asansörün projeye uygunluğunu kontrol edip, asansörü eksiksiz bir şekilde müşterimize teslimatını gerçekleştirmektedir

Montajını yaptığımız asansörlere 5 (beş) yıl yedek parça garantisi veriyoruz.

Binalarda kullanılan asansörlerde birçok sebepten dolayı yenilenme ihtiyacı vardır. Asansörün ömrünü tamamlamış aksamının değişerek yenilenmesi olacağı gibi, yasal etiket denetimleri sonucunda da asansör yenilenme işlemi ihtiyacı doğabilir. Aktif olarak çalışan bir asansörün, en son asansör yönetmeliğinde belirtilen güvenlik ve konfor seviyesine getirilmelidir.
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