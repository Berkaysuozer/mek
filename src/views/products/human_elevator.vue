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
              <p style="margin:10px">İnsan  Asansörleri</p>
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
            İnsan Asansörleri
          </div>
          <div class="second-section__desc">
            İnsan taşınmasını amaçlayan asansörlerdir. Kapasiteleri kadar, konfor ve kullanım rahatlığı ön planda tutularak tasarlanırlar.


            İnsan Asansörleri genel olarak konutlarda kullanılır ve 1. sınıf asansörler kategorisine girer. Bunun dışındaki (iş yerleri, oteller vs.) asansör grupları 2. sınıf olarak adlandırılır.

            Diğer tipleri, dispanser (1600 ve 2000 kg beyan yüklü) ve hastanelerin (2000 ve 2600 kg beyan yüklü) ihtiyaçlarını karşılayan özellikle hastane yataklarındaki hastaların tıbbi yardım cihazlarıyla taşınması için tasarımlanan SINIF 3 asansörleri ve bu aradaki boyutlardan seçilen SINIF 2 asansörleridir.
            <br>
            <br>
            <strong>
              SINIF 1 ASANSÖRLERİ
            </strong>   
            <br>
            <br>      
            320 ve 400 kg beyan yüklü küçük kabinler yalnız insan taşımak için kullanılır.
            630 kg beyan yüklü orta boy kabinler insan taşımaya ek olarak özürlü kişiler için normal tekerlekli sandalye ve çocuk arabalarının taşınması içinde kullanılabilir.
            1000 kg beyan yüklü büyük boy kabinler, orta boy kabinlerin taşıyabileceği yüklerin yanı sıra, tutamakları sökülebilen sedyelerin, tabutların ve mobilyaların taşınması içinde kullanılabilirler.
            <br>
            <br>
            <strong>            SINIF 2 ASANSÖRLERİ</strong>
            <br>
            <br>
            Sınıf 1 ve Sınıf 3 özelliklerini birlikte taşıyabilen, beyan yüküne göre konut dışı yerlerde ve sağlık tesislerinde de kullanılabilen asansörlerdir.
            <br>
            <br>
            <strong> SINIF 3 ASANSÖRLERİ</strong>
            <br>
            <br>
            Özel olarak hasta taşımak amacıyla tasarımlanmış asansörlerdir.

            1600 kg ve 2000 kg beyan yüklü asansörlerin kabinleri, çoğu dispanser ve hastaların ihtiyacını karşılar.
            2500 kg beyan yüklü asansörlerin kabinleri, özellikle hastane yataklarındaki hastaların tıbbi yardım cihazlarıyla birlikte taşınması için uygundur.        </div>
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

  <style lang="scss">
    .content_services {
      position: absolute;
        top: 300px;
        z-index: 10000;
        color: white;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        padding: 20px;
        left:32%;
        margin:-35px -35px 0 0;

        @media screen and (max-width: 1500px) {            
          left: 0!important;
          margin:0;
          padding: 0;        
      }

      &-title {
        font-size: 70px;
      width: 100%;
      font-weight: bold;
      }

    }
  </style>