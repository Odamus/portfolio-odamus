<template>
  <div id="projets">
      <div class="titleproj"><h2>Projets</h2></div>

    <div class="boxmodal">
      <div id="cv" @click="openModal" class="shadpic"><img src="../assets/images/cvodampic.png" alt="cvodampic"></div>
      <div @click="openModal" class="shadpic"><img src="../assets/images/Cdcetdevis.png" alt="cdcpic"></div>
      <div @click="openModal" class="shadpic"><img src="../assets/images/espacecom.png" alt="espacecompic"></div>
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
    margin-top: 30px;
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
  border: 1px solid #2c3e50;
  padding: 10px;
  display: flex;
  width: 25%;
  height: auto;
}

.shadpic img {
  width: 100%;
}

/* Breakpoints pour RWD */

@media only screen and (max-width: 768px) {
    .boxmodal {
      flex-direction: column;
    }

    .shadpic {
      width: 100%;
    }

}

</style>