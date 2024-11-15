
<template>
  <div v-if="isOpen" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container" ref="target">
        <table class="tbl-style">
          <thead>
            <tr>
              <th>Projets:  </th>
              <th>Réalisation d'un CV</th>
              <th>Rédaction d'un Cahier des Charges</th>
              <th>Dynamisation d'un espace de commentaire</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Date de création:</td>
              <td>09-04-2024</td>
              <td>28-07-2024</td>
              <td>21-08-2024</td>
            </tr>

            <tr>
              <td>Technologie utilisée :</td>
              <td>HTML / CSS</td>
              <td>Word / Excel</td>
              <td>NodeJs / JavaScript</td>
            </tr>

            <tr>
              <td>Lien d'accès :</td>
              <td><a href="/public/CV-Odam.html" target="_blank">Accès au CV</a></td>
              <td><a href="/public/CdCetdevislasocketterie.pdf" target="_blank">Accès au Cahier des charges</a></td>
              <td><a href="/public/EspaceCom.html" target="_blank">Accès à l'espace de commentaire dynamique</a></td>
            </tr>

            <tr>
              <td>Lien repository GitHub :</td>
              <td><a href="https://github.com/Odamus/Devoir-CEF-CV.git">Lien vers repository Github du CV</a></td>
              <td>Pas de lien github, accès direct via la mini ci-dessous</td>
              <td><a href="https://github.com/Odamus/Devoir-CEF-Dynamiser-un-espace-commentaire.git">Lien vers le repository Github du l'Espace de commentaire dynamique</a></td>
            </tr>

            <tr>
              <td>Mini :</td>
              <td><a href="/public/CV-Odam.html" target="_blank"><img src="../assets/images/cvodampic.png" class="mini" alt="open cv"></a></td>
              <td><a href="/public/CdCetdevislasocketterie.pdf" target="_blank"><img src="../assets/images/Cdcetdevis.png" class="mini" alt="open cahier des charges"></a></td>
              <td><a href="/public/EspaceCom.html" target="_blank"><img src="../assets/images/espacecom.png" class="mini" alt="open espace com"></a></td>
            </tr>

          </tbody>
        </table>
        <div class="modal-footer">
          <slot name="footer">
            <div>
              <button @click.stop="emit('modal-close')">X</button>
            </div>
          </slot>  
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";
import {onClickOutside} from '@vueuse/core'

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["modal-close"]);

const target = ref(null)
onClickOutside(target, ()=>emit('modal-close'))

</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto; /* Active le défilement si nécessaire */

}

.modal-container {
  width: 900px;
  margin: 50px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  max-height: 70%; /* Hauteur max pour faire défiler */
  overflow-y: auto; /* Permet le défilement vertical */
  
}

.tbl-style {
  border-collapse: collapse;
  min-width: 400px;
  width: auto;
  box-shadow: 0 5px 50px rgba(0,0,0,0.15);
  margin: 100px auto;
  border: 2px solid midnightblue;
  
}

thead tr {
  background-color: #2c3e50;
  color: #fff;
  text-align: left
}

th, td {
  padding: 15px 20px;
}

tbody tr, td, th {
  border: 1px solid #ddd;
}

tbody tr:nth-child(even){
  background-color: #f3f3f3;
}

.mini {
  width: 100px;
  height: 150px;

}

.mini:hover {
  box-shadow: 7px 7px 7px #2c3e50;
}

a {
  color: rgb(24, 61, 182);
}

a:hover {
  color: rgb(20, 150, 194);
}


</style>
