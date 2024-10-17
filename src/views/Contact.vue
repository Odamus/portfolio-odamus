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
                <div>
                    <form class="form" @submit.prevent="submitForm">
                        <label for="name">Name:</label>
                        <input type="text" id="name" v-model="formData.name" required>

                        <label for="email">Email:</label>
                        <input type="text" id="email" v-model="formData.email" required>

                        <button type="submit">Submit</button>


                    </form>
                </div>
            </div>
        </div>
    </div>
            
    
</template>

<script>

export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
            },
        };
    },

}

</script>

<style>
    .h1{
        color: black;
    }

    .contactme {
        display: flex;
        flex-direction: row;
        height: 600px;
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

</style>