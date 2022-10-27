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
              <p style="margin:10px">Yük Asansörleri</p>
            </div>
          </div>
          <img class="slider_img" src="../../assets/asansor/page-background.jpg"/>
      </swiper-slide>
    </swiper>
  </div>
  <div class="container second-section">
      <div class="row">
        <div class="col-12 ">
          <div class="second-section__title">
            Yük Asansörleri
          </div>
          <div class="second-section__desc">
            Her asansöre ağırlık kapasitesi ve kullanılabilecek yükleme yöntemiyle ilgili bir sınıflandırma atanır. Yükleme sınıflandırması, asansörün güvenli bir şekilde çalışması için kullanım amacına uygun olmalıdır. <br>

            <br> <br>Çoğu yolcu asansörü ve standart yük asansörü, Sınıf A veya “Genel Yük Yüklemesi”ne atanır. Asansöre binen veya inen tek parça bir yükün ağırlığı, asansör kapasitesinin yüzde 25’inden fazla olamaz. Yük sadece elle veya el arabası ile yüklenebilir veya boşaltılabilir. El arabası kullanılıyorsa, ağırlığı yüzde 25’lik yükleme kısıtlamasının bir parçası olarak düşünülmelidir.

            <br> <br> asansörler A Sınıfı yükleme için tasarlanmıştır. Diğer yükleme türleri asansöre daha fazla yük bindirir. Bir asansörün yükleme sınıfı bilinmiyorsa, A Sınıfı gibi ele alınmalıdır. Başka herhangi bir sınıftan yükleme yöntemi kullanmak tehlikeli olabilir.

            <br><br>   B Sınıfı, yalnızca motorlu taşıtları taşıması amaçlanan yük asansörleri için geçerlidir. Bu asansörler, asansörün belirtilen kapasitesine kadar bir ağırlığa sahip bir aracı taşıyabilir.

            <br><br> C1 Sınıfı, bir asansörü yüklemek veya boşaltmak için endüstriyel bir kamyonun kullanılmasına izin verir. Kamyonun ve yükün toplam ağırlığı, asansörün ağırlık kapasitesinden fazla olamaz. Forklift çalışırken asansörde kalabilir.

            <br> <br> C2 Sınıfı, asansörün belirtilen kapasitesinin yüzde 150’sine kadar platformda yüklemeye izin verir. Asansörün kapasitesine eşit ağırlığa sahip tek parça bir yük, bir forklift veya forklift ile platforma yüklenebilir. Asansör çalıştırılmadan önce yükleme cihazı çıkarılmalıdır.

            <br><br> C3 Sınıfı, yükleme ve boşaltma sırasındaki statik ağırlığın nominal yükten fazla olmadığı durumlarda yoğun konsantrasyon yüklemesine izin verir. Yükün ağırlığı ve onu taşımak için kullanılan ekipman, asansörün belirtilen kapasitesinden fazla olmamalıdır. C3 sınıfı asansörler genellikle asansörün kapasitesine eşit tek parça yükleri taşımak için kullanılır.

            <br><br> Sınırlı kullanım/sınırlı uygulama (LULA) asansörleri veya erişilebilirlik asansörleri için C sınıfı yüklemeye izin verilmez.
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