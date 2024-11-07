
<template>

<div id="home">
<h1>Accueil</h1>

  <div class="presentation">
    <img src="../assets/images/workodam.jpg" class="workodam" alt="workodam"/>
    <p class="txtpresent">Bonjour, je m'appelle Odam SVAY, j'ai travaillé 17 ans au sein d'une entreprise d'équipementerie automobile japonaise, je suis à ce jour en reconversion car mes priorités ont changé.<br/> Et oui, à ce jour passion et famille m'animent, c'est pourquoi j'ai décidé de réaliser une formation dev wev avec le CEF. Vous trouverez ici mes infos, compétences et mes derniers projets!</p>
  </div>
</div>

</template>

<style scoped>
  #home{
    background-color: #2c3e50;
    height: 500px;
    color: white;
    margin-top: 90px;
  }

  h1{
    padding-left: 30%;
    padding-top: 30px;
  }
  

  .workodam{
    width: 550px;
    padding:20px 50px 20px 0px;
    margin-left: 20%;
  }

  .txtpresent{
    padding-right: 70px;
    display: flex;
    align-items: center;
  }

  .presentation{
    display: flex;
    flex-direction: row;
    align-content: space-between;
  }

  /* Mobil */
  @media only screen and (max-width: 360px) {

    .presentation {
      width: 100%;
      flex-direction: column;
      font-size: x-small;
      align-items: center;
    }

    #home {
      width: auto;
      height: 100%;
      margin-top: 65px;

    }

    .workodam {
    width: 180px;
    height: 138px;
  }
  } 

  @media only screen and (min-width: 361px) and (max-width: 768px) {
    .presentation {
      width: 100%;
      flex-direction: column;
    }

    #home {
      width: auto;
      height: 100%;
      margin-top: 65px;

    }

    .workodam{
    width: 50%;
  }

  }

  @media only screen and (min-width: 769px) and (max-width: 1200px) {

    .presentation {
      align-items: center;
    }
  
    #home{
    background-color: #2c3e50;
    height: 500px;
    color: white;
    margin-top: 65px;
   
  }

  .workodam{
    width: 45%;
    height: 35%;
  }
}

</style>

<script>
</script>