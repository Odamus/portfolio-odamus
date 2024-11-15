<template>
    <div id="contact">
        <div class="contactme">
            <div class="contactinfo">
                <div class="contitle"><h2>Contact info</h2></div>
                <div class="eleminfo"><a href="https://maps.app.goo.gl/Lue5UgRSDNVP2fnU7" target="_blank"><img src="../assets/images/location.png" class="icons" alt="iclocation"/></a></div>
                <div class="eleminfo"><a href="https://maps.app.goo.gl/Lue5UgRSDNVP2fnU7" target="_blank"><address class="adresse">19-21 Rue Nicolas Appert,<br> 59650 Villeneuve-d'Ascq</address></a></div>
                <div class="eleminfo"><a href="mailto:odamsoluces@gmail.com"><img src="../assets/images/email.png" class="icons" alt="icmail"/></a></div>
                <div class="eleminfo"><address class="mail"><a href="mailto:odamsoluces@gmail.com">odamsoluces@gmail.com</a></address></div>
                <div class="eleminfo"><a href="tel:+33606060606"><img src="../assets/images/phone.png" class="icons" alt="icphone"/></a></div>
                <div class="eleminfo"><address class="telephone"><a href="tel:+33606060606">+33 606060606</a></address></div>
            </div>

            <div class="entrercontact">
                <h2 class="t1contact">Me contacter</h2>
                <span class="txt-caption">Merci d'intégrer votre demande ci-dessous, je répondrais dans les plus bref délais.</span>
                    <div class="leform">
                        <form id="formulaire" ref="form" name="champscontact" @submit.prevent="sendEmail">
                           
                            <label>Nom / Prénom</label>
                            <input class="namearea" type="text" name="user_name" v-model="formData.name" required minlength="2" size="30" placeholder="Your Name">

                           <label>Email</label>
                           <input class="mailarea" type="email" name="user_email" v-model="formData.email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}$" size="30" required placeholder="yourmail@example.com"> 

                            <label>Message</label>
                            <textarea class="messarea" name="message" v-model="formData.message" required minlength="4" maxlength="60" rows="4" placeholder="Your message."></textarea>
                           
                           <input type="submit" value="Envoyer">
                        </form>

                        <div v-if="showPopup" class="popup">
                            <p>Votre message a été envoyé avec succès !</p>
                            <button @click="closePopup">Fermer</button>
                        </div>

                    </div>
            </div>
        </div>
    </div>
            
    
</template>

<script>
import emailjs from '@emailjs/browser';

export default {

    data() {
        return {
        formData: {
            name: '',
            email: '',
            message: ''
          },
        showPopup: false
        };
    },

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

        // Afficher le pop-up de confirmation
      this.showPopup = true;

        // Réinitialiser le formulaire
        this.formData = {
            name: '',
            email: '',
            message: ''
          };
        },
        closePopup() {
            this.showPopup = false;
        }
    }
};


</script>

<style scoped>

    #contact {
        background-color: #2c3e50;
        color: azure;
    }

    a {
        color: azure;
        text-decoration: none;
        opacity: 0.7;  
    }

    a:hover {
        opacity: 1;
        text-decoration: underline;
    }

    .contactinfo, .entrercontact {
        margin-top: 30px;
    }

    .h1{
        color: black;
    }

    .contactme {
        display: flex;
        flex-direction: row;
        height: 700px;
        margin-top: 90px;
        border-top: 5px solid #4e6c71;
    }

    .contactinfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 800px;
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
        display: block;
        margin:auto;
        text-align: center;
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
        width: 90%;
        margin-left: 0;
        margin-top: 30px;
        color: #2c3e50;
    }

    label {
        float: left;
    }

    input[type=text], [type=email], textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-top: 6px;
        margin-bottom: 16px;
        resize: vertical;
    }

    input[type=submit] {
        background-color: #2c3e50;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    input[type=submit]:hover {
        background-color: #45607c;
    }

    .popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px;
        background-color: white;
        border: 1px solid #ccc;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        z-index: 1000;
}

/* Breakpoints pour RWD */

@media only screen and (max-width: 360px) {

    .entrercontact, .contactme {
        width: 100%;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        max-height: 100%;
    }

    h1 {
        text-decoration: underline;
    }

    h1, span {
        font-size: small;
    }

    .contactme {
        margin-top: 65px;
    }

    .contactinfo {
        padding: 0;
        width: 50%;
    }

    .icons {
        width: 35px;
        height: 45px;
    }

    .adresse, .mail, .telephone {
        font-size: xx-small;
    }

    .leform {
        font-size: xx-small;
        margin-right: 0px;
        margin-bottom: 80px;
    }

}
    
@media only screen and (min-width: 361px) and (max-width: 768px) {
    .entrercontact, .contactme {
        width: 100%;
        max-width: 100%;
    }

    .contactme {
        margin-top: 65px;
    }

    .contactinfo {
        padding: 0;
        width: 50%;
    }

    .icons {
        width: 35px;
        height: 45px;
    }

    .adresse, .mail, .telephone {
        font-size: x-small;
    }

    .leform {
        font-size: smaller;
    }

}

@media only screen and (min-width: 769px) and (max-width: 1200px) {
    .entrercontact, .contactme {
        width: 100%;
        max-width: 100%;
    }

    .contactinfo {
        padding: 0;
        width: 50%;
    }

    .icons {
        width: 60px;
        height: 70px;
    }

    .adresse, .mail, .telephone {
        font-size: x-small;
    }

    .leform {
        font-size: smaller;
    }

}    
</style>