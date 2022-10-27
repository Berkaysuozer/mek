<template>
    <div class="header" :class="{change_color: scrollPosition > 50}">
        <div class="top">
                <div class="container">
                <i class="fa fa-phone header-top__item header-top__item2" style="font-size:24px"></i>
                <span @click="call" class="header-top__item header-top__item2 ">530 823 64 72 </span>
                <i class="fa fa-envelope header-top__item header-top__item2" style="font-size:24px"></i>
                <span class="header-top__item2">mekasansorservis@gmail.com</span>
            </div>
        </div>

        <div class="mek_navbar container">
            <img class="navbar__el" style="height: 50px;" src="../assets/mlogo.png"/>
            <div class="routers">
                <router-link @click="scrollToTop" :class="{color_black: scrollPosition > 50}" class="navbar__el" to="/">Ana Sayfa</router-link>
                <div class="dropdown">
                <button :class="{color_black: scrollPosition > 50}"  style="color:white" class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Hizmetlerimiz
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><router-link @click="scrollToTop" to="/revision" class="decoration-none"> <a class="dropdown-item" href="#">Asansör Revizyon</a></router-link></li>
                    <li><router-link @click="scrollToTop" to="/installation" class="decoration-none"> <a class="dropdown-item" href="#">Asansör Montaj</a></router-link></li>
                    <li><router-link @click="scrollToTop" to="/periodic" class="decoration-none"> <a class="dropdown-item" href="#">Asansör Periyodik Bakım</a></router-link></li>
                    <li><router-link @click="scrollToTop" to="/fault" class="decoration-none"> <a class="dropdown-item" href="#">Asansör Arıza Tespit</a></router-link></li>
                    <li><router-link @click="scrollToTop" to="/annual" class="decoration-none"> <a class="dropdown-item" href="#">Asansör Yıllık Bakım</a></router-link></li>
                    <li><router-link @click="scrollToTop" to="/generalcontrol" class="decoration-none"> <a class="dropdown-item" href="#">Asansör Genel Kontrol</a></router-link></li>
                </ul>
                <button :class="{color_black: scrollPosition > 50}"  style="color:white" class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Ürünler
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><router-link @click="scrollToTop" to="/humanElevator" class="decoration-none"> <a class="dropdown-item" href="#">İnsan Asansörleri</a></router-link></li>
                    <li><router-link @click="scrollToTop" to="/panaromicElevator" class="decoration-none"> <a class="dropdown-item" href="#">Panaromik Asansörler</a></router-link></li>
                    <li><router-link @click="scrollToTop" to="/cargoElevator" class="decoration-none"> <a class="dropdown-item" href="#">Yük Asansörleri</a></router-link></li>
                    <li><router-link @click="scrollToTop" to="/stretcherElevator" class="decoration-none"> <a class="dropdown-item" href="#">Sedye Asansörleri</a></router-link></li>
                    <li><router-link @click="scrollToTop" to="/hidrolicElevator" class="decoration-none"> <a class="dropdown-item" href="#">Hidrolik Asansörler</a></router-link></li>
                    <li><router-link @click="scrollToTop" to="/carElevator" class="decoration-none"> <a class="dropdown-item" href="#">Araç Asansörleri</a></router-link></li>
                </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                scrollPosition: null,
            }
        },
        methods: {
            call() {
                window.open('tel:05308236472');
            },
            updateScroll() {
            this.scrollPosition = window.scrollY
            },
          scrollToTop() {
            window.scrollTo({top : 0,left: 0, behavior: 'instant'});
            }
          },
      mounted() {
            window.addEventListener('scroll', this.updateScroll);
        },
    }
</script>

<style>
    .header-top__item {
      margin-right: 5px;
    }

    .header {
        background-color: rgb(8, 55, 145, .9);
        color: white;
        position: sticky; /* Set the navbar to fixed position */
        top: 0; /* Position the navbar at the top of the page */
        width: 100%; /* Full width */        
        z-index: 999;
    }

    .top {
        background-color: black;
        color: white;
        padding: 10px;
    }

    .mek_navbar {
        display: flex;
        align-items: center;
        justify-content: space-between!important;
    }

    @media screen and (max-width: 673px) {header-top__item
      .mek_navbar {
        flex-direction: column;
      }
      .header-top__item2 {
        font-size: 14px!important;
     }
    }

    .navbar__el {
        margin: 10px 0px;
        text-decoration: none;
        color: white;
    }

    .change_color {
       background-color:white;
       border-bottom: 1px solid lightgray;
       transition: .2s;
   }
   .routers {
    display: flex;
    align-items: center;
    
   }

    .color_black {
        color: black!important;
    }

    .decoration-none {
        text-decoration: none!important;
    } 
</style>