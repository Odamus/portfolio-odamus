<template>
  <HomeView/>
  <Competences/>
  <Projets/>
  <Contact/>
</template>

<script>
import TheNavigation from '../components/TheNavigation.vue';
import HomeView from '../views/HomeView.vue';
import Competences from '../views/Competences.vue';
import Contact from '../views/Contact.vue';
import Projets from '../views/Projets.vue';
import PieddePage from '../views/PieddePage.vue';

export default {
  name: 'Accueil',
  components: {TheNavigation, HomeView, Competences, Projets, Contact, PieddePage}
}
</script>