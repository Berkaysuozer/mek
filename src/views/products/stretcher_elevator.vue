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
              <p style="margin:10px">Sedye Asansörleri</p>
            </div>
          </div>
          <img class="slider_img" src="../../assets/asansor/page-background.jpg"/>
      </swiper-slide>
    </swiper>
  </div>
  <div class="container second-section">
      <div class="row">
        <div class="col-12 text-left">
          <div class="second-section__title">Sedye Asansörleri </div>
          <div class="second-section__desc">
 
          <br><br>  Sedye asansörleri adından da anlaşılacağı gibi sedye taşımak için tasarlanmış dayanıklı ve yüksek ağırlıklı kaldırma sistemleridir. Sağlık tesislerinde kullanılan sedye asansörleri sedye taşımak üzere tasarlanmış olup 1600 kg, 2000 kg ve 2500 kg taşıma kapasitelerine ulaşmaktadır ancak hız 0,63 m/sn ile 2,5 m/sn arasında olabilmektedir.

          <br><br> Profas asansörü sağlık merkezleriniz için özel olarak üretilmekte ve sizlere asansörler sunmaktadır. asansör, tasarım aşamasından imalat ve montaj aşamasına kadar her adımı uzmanlar tarafından gerçekleştirmektedir.  

          <br><br> <strong>Sedye Kaldırma Nedir?</strong>
          <br><br> Elektrikli tahrikli sedye asansörleri çift hızlı (1 m/s’ye kadar) veya kademesiz hız setli (3,15 m/s’ye kadar) olabilir ve projeye uygun olarak imal edilir. Asansör projesinde hastanenin yatak sayısı dikkate alınır, trafik hesabı sonucunda asansör sayısı, kapasitesi ve hızı belirlenir ve tüm bunlardan sonra proje çıkar.

          <br><br> Kapılar isteğe ve ihtiyaca göre manuel veya otomatik olarak yan yana/merkezden açılır veya elektrostatik boyalı ve set/desenli paslanmaz sac ile kaplanır.

          <br><br> Profas asansörün imalatı ve montajı yapılan sedyeli asansörler TSE standartlarına uygun ölçülerde yapılmaktadır. Örneğin kapılar laminant veya paslanmaz çelik ile kaplanır ve Impact kayışlarla donatılarak proje sonlandırılır. Bu işlem, kabine giriş ve çıkışlarında meydana gelebilecek darbeler ortaya çıkmadan önce hastaya ve kabine verilebilecek zararı ortadan kaldırır.

          <br><br> Sedyeli asansörler sağlık merkezleri için yapıldığından kabin zemini anti bakteriyel PVC homing malzeme ile kaplanmalıdır. Kabin aydınlatmasından iç tasarıma kadar hasta düşünülerek tasarlanmıştır. Oluşabilecek aksiliklere karşı önlem olarak bu asansörlere çeşitli sistemler eklenmektedir. Profas asansör üretim, montaj ve montaj sonrası aşamalarda belirlenen kural ve yükümlülükler dahilinde mutlak surette üretimini gerçekleştirmektedir. Üretimi tamamlanan asansörler, Servis süresince aynı kalite standartlarında periyodik bakım ve servis hizmetine alınmalıdır. Profas asansör sizlere kaliteli çıkışlar ve güvenli inişler sunarken bakım onarım hizmetini de titizlikle yerine getirir.
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