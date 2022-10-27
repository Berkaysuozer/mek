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
        <img class="slider_img" src="../../assets/asansor/güzelbirresim.jpg"/>
      </swiper-slide>
    </swiper>
  </div>


  <div class="container second-section">
      <div class="row">
        <div class="col-12 text-left">
          <div class="second-section__title">
            Asansör Revizyon
          </div>
          <div class="second-section__desc">
            Zaman içinde yıpranmış estetik rahatsızlık vermeye başlayan asansör; binanın değerini kaybetmesine neden olurken kullanım
             açısından da tehlikeli olabilmektedir. Bursa Asvip Asansör, güvenlik standartlarının arttırılması ve daha güvenli bir kullanım 
             için asansör revizyon hizmeti sunmaktadır. Asansör revizyonunda; yeni ürünlerin piyasaya sürülmesi ile daha estetik bir görünüme 
             kavuşmuş olur. Yüksek oranda enerji tasarrufu sağlanarak asansörün daha konforlu çalışması sağlanmaktadır. Asvip Asansör, değişen
              teknolojik gelişmelere uygun şekilde güvenli, konforlu, verimli, ekonomik ve estetik açıdan kaliteli sistemlerle mevcut asansörleri 
              yenilemektedir. Her teknolojik araç gibi asansörler de ekonomik ömürlerini zamanla tamamlamaktadır. Kullanımla birlikte mekanik aksamlar
               yıpranarak arızalara yol açmaktadır. Asansör revizyonu ile birlikte güvenli kullanım sağlanmış olur. Güvenlik, revizyonda en önemli unsur
                olarak görülmektedir. Asansör revizyonu, kullanıcılara daha pek çok avantaj sağlamaktadır. Revizyon ile daha az bekleme süresi,
                 seyir konforu, düşük arızalanma oranı ve enerji tasarrufu garantisi verilmektedir. Müşterilerine Asvip Asansör olarak, CE belgesine 
                 sahip malzemeler ile hizmet veren firmamız asansör revizyonu ile güvenlik ve konfor sağlayan asansörleri sunmaktadır. Firmamız için 
                 son derece önemli olan bina yapısı, kullanıcı beklentileri ve dilekleri, uzman ve deneyimli teknik personelimiz tarafından dikkate
                  alınarak en uygun revizyon işlemi tamamlanmaktadır.
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