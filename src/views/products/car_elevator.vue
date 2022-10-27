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
              <p style="margin:10px">Araç Asansörleri</p>
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
            ARAÇ ASANSÖRLERİ
          </div>
          <div class="second-section__desc">
            <br> <br> Farklı tipte araba asansörleri ve güç üniteleri hakkında bilgi sahibi olmak, garajınız için doğru olanı seçmenize yardımcı olabilir. İşte en yaygın araba asansörü türlerinden birkaçı. 

            <br> <br><strong>Dört direkli kaldırma</strong>
            <br> <br>Dört direkli bir araba asansörü, ağır hizmet tipi bir otomatik asansördür ve çok fazla alan gerektiren en büyük araç asansörü türüdür. Bu güç üniteleri profesyonel otomobil mağazalarında son derece popüler olsa da, çoğunun ortalama bir ev garajına sığması pek olası değildir. Bu asansörler genellikle altı fitten uzundur ve en az dört fit genişliğe sahiptir.

            <br> <br><strong>İki direkli kaldırma</strong>
            <br> <br>Dört direkli asansörlerden daha küçük olmasına rağmen, iki direkli asansörler, örneğin bir rampa asansöründen daha fazla garaj zemin alanı gerektirir. İki direkli bir asansör simetrik veya asimetrik stillerde gelebilir; ikincisi, arabayı biraz daha geriye konumlandırarak, araba kapılarını hasar riski olmadan daha kolay açmanıza olanak tanır. Dört direkli kardeşinden daha ucuz ve daha küçük olan bu asansör türü, profesyonel düzeyde bir asansör isteyenler için ancak bir ev veya daha küçük bir garaj için popüler bir seçenektir.

            <br> <br><strong>Taşınabilir araba asansörleri</strong>
            <br> <br>2 direkli veya 4 direkli bir araba asansörünün portatif olması muhtemel olmasa da, diğerlerinden daha kolay katlanan versiyonları bulabilmenize rağmen, portatif araba asansörlerini makaslı kaldırıcılar veya rampalar gibi daha küçük güç üniteleri şeklinde bulabilirsiniz. . Aşağıdaki her iki kaldırma stili hakkında daha fazla bilgi.

            <br> <br><strong>Rampa tarzı araba asansörleri</strong>
            <br> <br>Bu tip portatif asansör, sürülebilen bir modeldir. Arabayı çok yükseğe kaldıramayan bu asansörler hala arabanın üzerinde ve hatta bir dereceye kadar altında çalışmanıza izin veriyor. Depolanması kolay ve diğer tam boyutlu modellerden çok daha ucuz olan rampa asansörleri, daha hafif otomatik çalışma için kullanışlıdır.

            <br> <br> <strong>Makaslı araba asansörü</strong>
            <br> <br>Makaslı platformlar, araçları kaldıran metal çerçeveli, akordeon (veya makas) tarzı bir güç mekanizmasına sahiptir. Bu asansörler, kullanılmadıkları zaman pratik olarak zemin seviyesine kadar küçülebildikleri ve diğer büyük modellere göre depolanması çok daha kolay olduğu için daha küçük garajlar için popülerdir.layı yenilenme ihtiyacı vardır. Asansörün ömrünü tamamlamış aksamının değişerek yenilenmesi olacağı gibi, yasal etiket denetimleri sonucunda da asansör yenilenme işlemi ihtiyacı doğabilir. Aktif olarak çalışan bir asansörün, en son asansör yönetmeliğinde belirtilen güvenlik ve konfor seviyesine getirilmelidir.
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