<template>

  <div id="nav">
    <router-link to="/" @click.prevent="scrollTo('home')">
      <img src="../assets/images/logoodam.jpg" id="logo" alt="logo odam"/>
    </router-link>
    <router-link to="/" @click.prevent="scrollTo('home')">Accueil</router-link>
    <a href="/notfound">Compétences</a>
    <a href="/notfound">Projets</a>
    <a href="/notfound">Contact</a>


    <!--Liens fonctionnels ci-dessous / ci-dessus liens vers la page 404
    <a href="/#skills">Compétences</a>
    <a href="/#projets">Projets</a>
    <a href="/#contact">Contact</a>-->

  </div>

</template>

<script>
export default {
  name: 'App',
  methods: {
    scrollTo(sectionId) {
      const section = document.getElementById(sectionId);
      section.scrollIntoView({behavior: 'smooth'});
      return {x: 0, y: 0}
    }
  }
};
</script>

<style scoped>
#nav {
  text-decoration: none;
  width: 100%;
  height: 90px;
}

@media only screen and (max-width: 360px) {
  #nav {
    height: 50px;
    font-size: xx-small;
    padding-left: 5px;
  }

  #nav a {
    margin-right: 10px;
  }

  #logo {
    width: 30px;
  }
}

@media only screen and (min-width: 361px) and (max-width: 768px) {
  #nav {
    height: 80px;
    font-size: x-small;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1200px) {
  #nav {
  height: 80px;
  font-size: small;
  }  
}

</style>