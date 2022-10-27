<template>
    <div class="contact-us">
        <div class="contact-us-background">
            <div class="container">
                <div class="row">
                    <div class="call-us text-center">
                        <div class="desc" style="font-size: 35px;">
                            Bizi Arayın
                        </div>
                        <div class="title" style="font-size:45px">
                            +90(530) 823 64 72
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6">
                        <i class=" icon_item fa fa-whatsapp" style="font-size:24px"></i> Telefon : 0530 823 64 72  <br>
                        <i class=" icon_item fa fa-envelope" style="font-size:24px"></i>  mekasansorservis@gmail.com  <br>
                        <i class=" icon_item fa fa-home" style="font-size:24px"></i> Güneşli, Bağcılar/İSTANBUL <br>
                        <i class=" icon_item fa fa-clock-o" style="font-size:24px"></i> Pazartesi-Cuma 09:00 & 19:00 <br>
                    </div>
                    <div class="col-12 col-md-6">
                        <form @submit.prevent="sendEmail()" ref="form">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Adınız</label>
                                <input type="name"  class="form-control" id="from_name" name="from_name"  placeholder="Adınız">
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1" class="mt-3">Email</label>
                                <input type="email" id="email_id" class="form-control"  name="email_id" placeholder="isim@hotmail.com">
                            </div>  
                            <div class="form-group">
                                <label for="exampleFormControlInput1 mt-4" class="mt-3">Telefon Numarası</label>
                                <input type="number" id="number_id" class="form-control" name="number_id" placeholder="Telefon Numaranız">
                            </div>                            

                            <div class="form-group">
                                <label for="exampleFormControlTextarea1" clasS="mt-3">Mesajınız</label>
                                <textarea class="form-control" id="message" name="message" rows="3" placeholder="Mesajınızı buraya yazabilirsiniz. Ekiplerimiz en kısa sürede size geri dönüş sağlayacaktır."></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary mt-3">Gönder</button>
                        </form>
                    </div>
                </div>
            </div>
                <div class="footer">
                <hr>
               <p>{{ new Date().getFullYear() }} - <strong>BerkaySuozer Yazılım</strong></p>
            </div>
        </div>
    </div>
</template>

<script>
    import emailjs from '@emailjs/browser';

    export default {
        name: 'footer',
        methods: {
        sendEmail() {
        emailjs.sendForm('service_gy7wfhm', 'template_4ksrgwk', this.$refs.form, 'zf04lm9jp2ixVgBK8', {
            email_id : this.$refs.form.email_id,
            number_id : this.$refs.form.number_id,
            message : this.$refs.form,
            from_name : this.$refs.form.from_name,
        })
            .then((result) => {
                console.log(result);
                console.log('SUCCESS!', result.text);
            }, (error) => {
                console.log('FAILED...', error.text);
          });
        }
      }
    }
</script>

<style lang="scss">
    .footer {
        height: auto;
        width: 100%;
        text-align:center;
        padding:10px;
        color:#ffffff;
    }
    .contact-us {
      background-image: url('../assets/asansor/page-background.jpg');
      background-position: bottom;
      background-attachment: fixed;
      margin-top: 25px;
  }
    .contact-us-background {
      opacity: 0.93;
      color: white;
  }
  .call-us {
    margin : 70px 0px!important;
  }

  @media screen and (max-width: 600px) {
    .call-us {
    .title {
        font-size: 35px!important;
    }
  }
}
</style>