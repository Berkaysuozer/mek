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
        :autoplay="{
          'delay': 3000,
        }" 
        class="mySwiper"
      >
        <swiper-slide>
          <div class="mySwiper_title text-center">
            <div class="witr_swiper_content ">              
              <h1>MEK ASANSÖR</h1>
              <h2><span class="mySwiper_subTitle">Asansörünüzün Bakımını Geciktirmeyin</span></h2>
              <p style="margin:10px">Sizlerde uygun fiyatlarla ve iyi işcilikle asansörünüzün bakımınızı yaptırmak için bizlerle iletişim geçiniz.</p>
              <div class="mySwiper_buttons d-flex align-items-center justify-content-center">
                <router-link @click="scrollToTop" class="navbar__el" to="/about">
                  <div class="overlay-button mt-4">
                     Bize Ulaşın
                  </div> 
              </router-link>
                <div>
                  <a 
                  class="d-flex align-items-center justify-content-center"
                  target="_blank" 
                  href="https://wa.me/905308236472"
                  style="color:white; text-decoration:none">
                    <img class ="whats_app_img"
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="">
                    <p>WhatsApp</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img class="slider_img" src="../../assets/asansor/AS1.jpg"/>
          </swiper-slide
        ><swiper-slide>
          <div class="mySwiper_title text-center">
            <div class="witr_swiper_content ">              
              <h1>MEK ASANSÖR</h1>
              <h2><span class="mySwiper_subTitle">Asansör Montajında Doğru Tercih</span></h2>
              <p style="margin:10px">Sizlerde uygun fiyatlarla ve iyi işcilikle asansörünüzün montajını yaptırmak için bizlerle iletişim geçiniz.</p>
              <div class="mySwiper_buttons d-flex align-items-center justify-content-center">
                <router-link class="navbar__el" to="/about">
                  <div class="overlay-button mt-4">
                     Bize Ulaşın
                  </div> 
              </router-link>
                <div>
                  <a 
                  class="d-flex align-items-center justify-content-center"
                  target="_blank" 
                  href="https://wa.me/905308236472"
                  style="color:white; text-decoration:none">
                    <img class ="whats_app_img"
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="">
                    <p>WhatsApp</p>
                  </a>
                </div>
              </div>
            </div>
            </div><img class="slider_img" src="../../assets/asansor/AS2.jpg"/>
          </swiper-slide
        ><swiper-slide>
          <div class="mySwiper_title text-center">
            <div class="witr_swiper_content ">              
              <h1>MEK ASANSÖR</h1>
              <h2><span class="mySwiper_subTitle">Asansörünüzün Bakımını Geciktirmeyin</span></h2>
              <p style="margin:10px">Sizlerde uygun fiyatlarla ve iyi işcilikle asanösrünüzün bakımınızı yaptırmanız için bizlerle iletişim geçiniz.</p>
              <div class="mySwiper_buttons d-flex align-items-center justify-content-center">
                <router-link class="navbar__el" to="/about">
                  <div class="overlay-button mt-4">
                     Bize Ulaşın
                  </div> 
              </router-link>
                <div>
                  <a 
                  class="d-flex align-items-center justify-content-center"
                  target="_blank" 
                  href="https://wa.me/905308236472"
                  style="color:white; text-decoration:none">
                    <img class ="whats_app_img"
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="">
                    <p>WhatsApp</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img class="slider_img" src="../../assets/asansor/AS3.jpg"/>
          </swiper-slide
        ><swiper-slide>
          <div class="mySwiper_title text-center">
            <div class="witr_swiper_content ">              
              <h1>MEK ASANSÖR</h1>
              <h2><span class="mySwiper_subTitle">Asansör Montajında Doğru Tercih</span></h2>
              <p style="margin:10px">Sizlerde uygun fiyatlarla ve iyi işcilikle asansörünüzün montajını yaptırmak için bizlerle iletişim geçiniz.</p>
              <div class="mySwiper_buttons d-flex align-items-center justify-content-center">
                <router-link class="navbar__el" to="/about">
                  <div class="overlay-button mt-4">
                     Bize Ulaşın
                  </div> 
              </router-link>
                <div>
                  <a 
                  class="d-flex align-items-center justify-content-center"
                  target="_blank" 
                  href="https://wa.me/905308236472"
                  style="color:white; text-decoration:none">
                    <img class ="whats_app_img"
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="">
                    <p>WhatsApp</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img class="slider_img" src="../../assets/asansor/güzelbirresim.jpg"/>
        </swiper-slide>
      </swiper>
    </div>

    <div class="container second-section">
      <div class="row">
        <div class="col-12 text-center">
          <div class="second-section__title">
            Daha hızlı. Daha kolay. Daha yenilikçi.
          </div>
          <div class="second-section__desc">
            Kaliteli bir asansör; uygun tasarım, verimli malzeme seçimi, kusursuz imalat, yüksek kalitede montaj ve kalite kontrol süreçleri doğru işletme ile üretilebilir. Fakat bütün bu sürecin doğru işlemesi müşterinin gereksinimlerini eksiksiz belirleyen satışa bağlıdır.
            Bu yüzden Mek Asansör her zaman hizmetinizde...
          </div>
        </div>
      </div>
    </div>

    <div class="overlay-image mt-4 text-center">
        <div class="overlay-image-background d-flex align-items-center justify-content-center flex-column">
            <div class="title" style="font-size:30px">Asansör Bakım & Arıza & Montaj & Yenileme</div>
            <div class="description mt-4">
              Nitelikli Ekip, Nitelikli Ekipman, Nitelikli Servis Hizmetleri.
            </div>
            <router-link class="navbar__el" to="/about">
              <div class="overlay-button mt-4">
              Bize Ulaşın
             </div> 
          </router-link>
        </div>
    </div>
    

    <div class="middle-section container mt-4">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4 ass-tulip">
            <div class="card text-center" style="width: 18rem;">
              <img class="card-img-top" src="../../assets/asansor/insan-asansorleri-107283.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">İnsan Asansörleri</h5>
                <p class="card-text">İnsan taşınmasını amaçlayan asansörlerdir. Kapasiteleri kadar, konfor ve kullanım rahatlığı ön planda tutularak tasarlanırlar. İnsan Asansörleri genel olarak konutlarda kullanılır </p>
                <p  class="btn btn-primary">
                 <router-link @click="scrollToTop" to="/humanElevator" class="decoration-none"> <a class="middle-buton-text" href="#">Devamını Gör</a></router-link>
                </p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4 ass-tulip">
            <div class="card text-center" style="width: 18rem;">
              <img class="card-img-top" src="../../assets/asansor/panoramik-asansor1.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Panaromik Asansörler</h5>
                <p class="card-text">Panoramik asansörlerin çalışma prensibi olarak diğer insan asansörlerinden farkı olduğu söylenemez. şeffaf malzemelerle çevrelenmiş kuyulara konuşlandırılabildiği gibi, sadece yüzeyi şeffaf, diğerleri inşaat malzemelerinden inşa edilmiş kuyulara da kurulabilir.</p>
                <p  class="btn btn-primary">
                 <router-link @click="scrollToTop" to="/panaromicElevator" class="decoration-none"> <a class="middle-buton-text" href="#">Devamını Gör</a></router-link>
                </p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4 ass-tulip">
            <div class="card text-center" style="width: 18rem;">
              <img class="card-img-top" src="../../assets/asansor/yük.png" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Yük Asansörleri</h5>
                <p class="card-text">Her asansöre ağırlık kapasitesi ve kullanılabilecek yükleme yöntemiyle ilgili bir sınıflandırma atanır. Yükleme sınıflandırması, asansörün güvenli bir şekilde çalışması için kullanım amacına uygun olmalıdır..</p>
                <p  class="btn btn-primary">
                 <router-link @click="scrollToTop" to="/cargoElevator" class="decoration-none"> <a class="middle-buton-text" href="#">Devamını Gör</a></router-link>
                </p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4 ass-tulip">
            <div class="card text-center" style="width: 18rem;">
              <img class="card-img-top" src="../../assets/asansor/sedyeasansorleri12.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Sedye Asansöerleri</h5>
                <p class="card-text">Sedye asansörleri adından da anlaşılacağı gibi sedye taşımak için tasarlanmış dayanıklı ve yüksek ağırlıklı kaldırma sistemleridir. </p>
                <p  class="btn btn-primary">
                 <router-link @click="scrollToTop" to="/stretcherElevator" class="decoration-none"> <a class="middle-buton-text" href="#">Devamını Gör</a></router-link>
                </p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4 ass-tulip">
            <div class="card text-center" style="width: 18rem;">
              <img class="card-img-top" src="../../assets/asansor/hidrolik-asansorler-41765-8807866204.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Hidrolik Asansörler</h5>
                <p class="card-text">
Kaldırma işi, hidrolik sıvısını,kabini doğrudan veya dolaylı olarak etkileyen bir kaldırıcıya sevk eden ve elektirikli tahrik edilen bir pompa vasıtasıyla gerçekleşen asansörlerdir. </p>
                <p  class="btn btn-primary">
                 <router-link @click="scrollToTop" to="/hidrolicElevator" class="decoration-none"> <a class="middle-buton-text" href="#">Devamını Gör</a></router-link>
                </p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4 ass-tulip">
            <div class="card text-center
            " style="width: 18rem;">
              <img class="card-img-top" src="../../assets/asansor/arac.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Araç Asansörleri</h5>
                <p class="card-text">Sizlerde uygun fiyatlarla ve iyi işcilikle asanösrünüzün bakımınızı yaptırmanız için bizlerle iletişim geçiniz.</p>
                <p  class="btn btn-primary">
                 <router-link @click="scrollToTop" to="/carElevator" class="decoration-none"> <a class="middle-buton-text" href="#">Devamını Gör</a></router-link>
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>

    <div class="overlay-image mt-4 overlay-image-bottom">
        <div class="overlay-image-background d-flex align-items-center justify-content-center flex-column">
            <div class="title" style="font-size:30px">"Asansörde Doğru Tercih"</div>
            <div class="description mt-4">
Farklı tipte araba asansörleri ve güç üniteleri hakkında bilgi sahibi olmak, garajınız için doğru olanı seçmenize yardımcı olabilir. İşte en yaygın araba asansörü türlerinden birkaçı.
            </div>
        </div>
    </div>

    <div class="whats_app">
      <a
      target="_blank" 
      href="https://wa.me/905308236472"
      >
        <img class ="whats_app_img"
         src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="">
      </a>
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
    methods: {
    scrollToTop() {
          window.scrollTo({top : 0,left: 0, behavior: 'instant'});
       }
    }
  };
  </script>
  
  <style>
    @import './style.scss';

    .card-text {
      overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    }

    .middle-buton-text {
      color:white!important;
      text-decoration :none;
    }
  </style>