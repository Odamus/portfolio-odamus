<template>

  <div id="nav">
    <router-link to="/" @click.prevent="scrollTo('home')">
      <img src="../assets/images/logoodam.jpg" id="logo" alt="logo odam"/>
    </router-link>
    <router-link to="/" @click.prevent="scrollTo('home')">Accueil</router-link>
    <a href="/#skills">Compétences</a>
    <a href="/#projets">Projets</a>
    <a href="/#contact">Contact</a>
    <a href="/#cv">CV</a>
    <!--        <router-link to="/" @click.prevent="scrollTo('home')">Accueil</router-link>-->

    <!--        <router-link to="/competences" @click.prevent="scrollTo('skills')">Compétences</router-link>-->

    <!--        <router-link to="/notfound">Projets</router-link>-->
    <!--    -->

    <!--        <router-link to="/contact" @click.prevent="scrollTo('contact')">Contact</router-link>-->

    <!--        <router-link to="/cv">CV</router-link>-->


    <!-- Lien scrollable fonctionnelle -
    <router-link to="/competences" @click.prevent="scrollTo('skills')">Compétences</router-link>

    <router-link to="/projets" @click.prevent="scrollTo('projets')">Projets</router-link>

    <router-link to="/contact" @click.prevent="scrollTo('contact')">Contact</router-link>

    <router-link to="/cv">CV</router-link> -->
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
}
</style>