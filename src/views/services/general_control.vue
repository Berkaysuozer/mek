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
        <img class="slider_img" src="../../assets/newFolder/izhak-agency-JwsC35NIU5s-unsplash.jpg"/>
      </swiper-slide>
    </swiper>
  </div>
  <div class="container second-section">
      <div class="row">
        <div class="col-12 ">
          <div class="second-section__title">
            Asansör Genel Kontrol
          </div>
          <div class="second-section__desc">
            <br>
  <br>
<strong>

  Asansör bakımında neler yapılır?

</strong>
  <br>
  <br>
Asansör için garanti süresi boyunca aylık bakım ve servis hizmetlerinin asansörü monte eden veya onun yetkili servisi tarafından yapılması gerekiyor. Garanti süresi içinde bina sorumlusu ile asansörü monte eden veya onun yetkili servisi arasında aylık bakım ve servis hizmetleri sözleşmesi yapılması zorunlu oluyor. Asansör bakımında neler yapılır?

Asansör monte eden, yaptığı her tip ve özellikteki asansörün yedek parçalarını 10 yıl süreyle temin etmek ve kendisince monte edilen asansöre aylık bakım ve servis hizmeti veren bir başka asansör monte edenin veya onun yetkili servisinin veya bina sorumlusunun bu konudaki talebini acilen ve normal piyasa koşullarında karşılamak zorunda oluyor.

Bununla birlikte asansör monte eden, kendi bilgi ve becerisini içeren ticari sırları saklı kalmak kaydıyla, yedek parçaların yanı sıra bakım hizmeti verilebilmesini temin eden diğer araç ve bilgileri de ilgililere sağlar. Asansörü monte eden, asansöre müdahale edilmesine engel olunması amacıyla çeşitli cihaz ve şifreleme yöntemlerini kullanmış ise,  ilgilinin asansöre müdahale edebilmesi için gerekli tüm bilgi ve imkânı sağlamak zorundadır.

Bakımın kapsamı
<br>
  <br>

MADDE 7 – (1) Can ve mal güvenliğinin devamını sağlamak için; asansörün ve tüm aksamlarının bakımı, bakım ve işletme kılavuzlarında yer alan talimatlara göre yapılmalıdır.
<br>
  <br>
<strong>
  a) Bakım;

</strong><br>
  <br>
1) Yağlama ve temizlemeyi,
<br>
  <br>
2) Kontrolleri,
<br>
  <br>
3) Kurtarma çalışmalarını,
<br>
  <br>
4) Ayarlama işlemlerini,
<br>
  <br>
5) Kullanıma veya yıpranmaya bağlı olarak meydana gelebilen ve asansörün karakteristiklerini etkilemeyen bileşen onarımı veya değiştirilmesini,

kapsar.
<br>
  <br>
<strong>
  b) Bakım;

</strong><br>
  <br>
1) Yeni bileşenin karakteristikleri orijinali ile aynı olsa dahi makine, asansör kabini, kapısı, kontrol paneli, kılavuz ray gibi bir ana bileşenin veya güvenlik aksamının değiştirilmesini,
<br>
  <br>
2) Asansörün yerinin değiştirilmesini,
<br>
  <br>
3) Asansörün hız, taşıyabildiği yük v.b. gibi herhangi bir karakteristiğinin değiştirilmesi de dahil modernizasyonunu,
<br>
  <br>
4) İtfaiye tarafından yapılan kurtarma çalışmalarını,
<br>
  <br>
5) Asansör boşluğunun (kuyusunun) dış bölümlerinin temizlenmesini,
<br>
  <br>
6) Asansör kabini iç kısmının temizlenmesini,

kapsamaz.
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