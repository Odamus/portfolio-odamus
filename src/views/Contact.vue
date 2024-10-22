<template>
    <div id="contact">
        <div class="contactme">
            <div class="contactinfo">
                <div class="contitle"><h1>Contact info</h1></div>
                <div class="eleminfo"><a href="https://maps.app.goo.gl/Lue5UgRSDNVP2fnU7" target="_blank"><img src="../assets/images/location.png" class="icons" alt="iclocation"/></a></div>
                <div class="eleminfo"><address class="adresse">19-21 Rue Nicolas Appert,<br> 59650 Villeneuve-d'Ascq</address></div>
                <div class="eleminfo"><a href="mailto:odamsoluces@gmail.com"><img src="../assets/images/email.png" class="icons" alt="icmail"/></a></div>
                <div class="eleminfo"><address class="mail"><a href="mailto:odamsoluces@gmail.com">odamsoluces@gmail.com</a></address></div>
                <div class="eleminfo"><a href="tel:+33606060606"><img src="../assets/images/phone.png" class="icons" alt="icphone"/></a></div>
                <div class="eleminfo"><address class="telephone"><a href="tel:+33606060606">+33 606060606</a></address></div>
            </div>

            <div class="entrercontact">
                <h1 class="t1contact">Send your message</h1>
                <span class="txt-caption">Merci d'intégrer votre demande ci-dessous, je répondrais dans les plus bref délais.</span>
                <div class="container-flui w-25">
                    <div class="leform">
                        <form ref="form" @submit.prevent="sendEmail">
                            <label>Name</label>
                            <input type="text" name="user_name">
                            <label>Email</label>
                            <input type="email" name="user_email">
                            <label>Message</label>
                            <textarea name="message"></textarea>
                            <input type="submit" value="Send">
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
            
    
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  methods: {
    sendEmail() {
      emailjs
        .sendForm('service_iwd4so8', 'template_bmhjk8e', this.$refs.form, {
          publicKey: 'NblvYicoC4bxo5cha',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    },
  },
};

</script>

<style>
    .h1{
        color: black;
    }

    .contactme {
        display: flex;
        flex-direction: row;
        height: 700px;
        margin-top: 120px;
    }

    .contactinfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 800px;
        padding-left: 100px;
        padding-right: 300px;
    }
    
    .contitle {
        display: flex;
        text-align: left;
    }

    .eleminfo{
        display: flex;
        margin-bottom: 10px;
    }

    .adresse{
        margin-bottom: 30px;
    }

    .icons {
        width: 100px;
    }

    .leform {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 400px;
        margin-top: 20px;
    }

</style>