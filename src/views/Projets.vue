<template>
  <div id="projets">
      <div class="titleproj"><h1>Projets</h1></div>

    <div class="boxmodal">
      <div id="cv" class="shadpic"><button @click="openModal"><img src="../assets/images/cvodampic.png" alt="cvodampic"></button></div>
      <div class="shadpic"><button @click="openModal"><img src="../assets/images/Cdcetdevis.png" alt="cdcpic"></button></div>
      <div class="shadpic"><button @click="openModal"><img src="../assets/images/espacecom.png" alt="espacecompic"></button></div>
    </div>
  </div>

  <ModalComponent :isOpen="isModalOpened" @modal-close="closeModal" @submit="submitHandler" name="first-modal">
  </ModalComponent>
  
</template>

<script setup>
import { ref } from "vue";
import ModalComponent from "../components/ModaleComponent.vue";

const isModalOpened = ref(false);

const openModal = () => {
  isModalOpened.value = true;
};
const closeModal = () => {
  isModalOpened.value = false;
};

const submitHandler = ()=>{
  //here you do whatever
}
</script>

<style>

.titleproj {
  margin-left: auto;
  margin-right: auto;
}

.boxmodal {
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
    width: auto;
}

.modal-header{
  display: flex;
  flex-direction: column;
}

.modal-body{
  display: flex;
  flex-direction: column;
}

.modal-footer{
  display: flex;
  flex-direction: column;
}

.shadpic:hover {
  max-height: fit-content;
  box-shadow: 7px 7px 7px #2c3e50;
}

.shadpic {
  display: flex;
  width: auto;
}


</style>