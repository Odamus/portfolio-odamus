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
  background-color: #2c3e50;
  color: azure;
  display: flex;
  justify-content: center;
  border-top: 5px solid #4e6c71;
  border-bottom: 5px solid #4e6c71;
  padding-top: 10px;
  padding-bottom: 10px;
}

.boxmodal {
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
    margin-top: 10px;
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