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
              <p style="margin:10px">Hidrolik Asansörler</p>
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
            Hidrolik Asansörler
          </div>
          <div class="second-section__desc">
          <br> <br>  Kaldırma   işi, hidrolik   sıvısını,kabini   doğrudan   veya   dolaylı   olarak   etkileyen   bir kaldırıcıya  sevk  eden  ve  elektirikli  tahrik  edilen  bir pompa  vasıtasıyla  gerçekleşen asansörlerdir. Bu  asansörlerde  aşağı  yön hareketi  kabinin kendi  ağırlığı  ile gerçekleşmektedir.

          <br> <br>  Hidrolik asansörlerde  makine dairesi genel olarak, ilk durak seviyesinde bulunur.Burada bir yağ     kazanı ve  bunun üzerinde hidrolik makinesi (düzeneği), kumanda panosu ve hidrolik sıvısının içinden geçtiği hortumlar bulunmaktadır.

          <br> <br>  Asansör kuyusu içinde;kabin,varsa karşı ağırlık silindir piston sistemi,askı tertibatı ve tamponlar  bulunmaktadır. Hidrolik  asansörler  elektriğin  tahrik  ettiği  pompanın  yağı itmesiyle  pistonların  kabini  kaldırması  esasına  göre  çalışır.Pompalanan  yağ,hidrolik makinesinden   belirli   şartları   yerine   getirerek   geçip   borular   vasıtasıyla   silindiri harekete    geçirirler.Silindir  kabine   doğrudan veya  dolaylı  olarak  bağlanmış olabilir.Silindirin ittiği kabin alınan kumanda ile gerekli kata taşınır.

          <br> <br>  Hidrolik  asansörler  genellikle;konutlarda,villa  ve  evlerde,tadilat  gören  binalarda;bina statiğine ek yük getirilmesinin   istenmediği  hidrolik asansördurumlarda(örneğin     eski    eser tadilatı),fabrikalarda,alış veriş merkezlerinde panaromik olarak kullanılırlar.Asansörler genel   olarak   yapılan   sözleşmeler   gereği   aylık,6   aylık   ve   yıllık   olarak   gerekli bakımlardan  geçmelidir.Hidrolik  asansörler  7  veya  daha  az  katlı  trafiği  çok  yoğun olmayan binalarda kullanılmaktadır.

          <br> <br>  Engelliler için yasal olarak belirlenen koşulları özel mekanlarda da gerçekleştirmeyi kendimize hedef edindik. Asansörlerimiz her türlü yapısal konuma uygun olup tarafımızdan uzmanlıkla monte edilmektedir.

          <br> <br>  Güvenlik ve kullanıcı memnuniyeti tarafımızdan garanti edilmektedir. Yaşam kalitenizin artışını diliyoruz. BLM kaldırma platformu ile engelli ve tekerlekli sandalye kullanan insanlar 100 cm’lik yükseklik farklarını güvenilir bir yapıda geçebilmektedir.
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