<template>
    <footer class="footergnl">
        <div class="columns">
            <div class="columntxt">
                <p>Dernière mise à jour : {{ updateDate }}</p>
            </div>
            <div class="column">
                <a href="https://fr.linkedin.com/" target="_blank"><img src="../assets/images/linkedin.png" class="iconreseau" alt="open to linkedin"/></a>
                <a href="https://github.com/" target="_blank"><img src="../assets/images/github.png" class="iconreseau" alt="open to github"/></a>
                <a href="https://x.com/?lang=fr" target="_blank"><img src="../assets/images/twitterx.png" class="iconx" alt="open to x"/></a>
            </div>
        </div>         
    </footer>
</template>

<script>    

export default {
    data(){
        return {
            updateDate: ''
        };
    },

    created() {
        this.updateDate = this.formatDate(new Date());
    },

    methods: {
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric'};
            return date.toLocaleDateString('fr-FR', options);
        }
    }
}
    
</script>

<style scoped>

footer {
    background-color: #2c3e50;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    color: white;
    text-align: center;
    border-top: 5px solid #4e6c71;
}

.columns {
    display: flex;
    justify-content: space-around;
    margin-top: 10px 0 10px;
}

.columntxt {
    padding-top: 10px;
}

.iconreseau {
    height: 30px;
    margin: 10px;
    margin-bottom: 10px;   
}

.iconx {
    width: 50px;
    height: 50px;
}


</style>

