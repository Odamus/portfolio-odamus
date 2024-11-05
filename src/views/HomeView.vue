
<template>

<div id="home">
<h1>Accueil</h1>

  <div class="presentation">
    <img src="../assets/images/workodam.jpg" class="workodam" alt="workodam"/>
    <p class="txtpresent">Bonjour, je m'appelle Odam SVAY, j'ai travaillé 17ans au sein d'une entreprise d'équipementerie automobile Japonaise, je suis à ce jours en reconversion car mes priorité ont changés.</br> Et oui à ce jour passion et famille m'anime c'est pourquoi j'ai décidé de réaliser une formation dev wev avec le CEF. Vous trouveriez ici mes infos, compétences, et mes derniers projets!</p>
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
    width: 25%;
  }


  .workodam{
    padding-right: 50px;
    margin-left: 20%;
  }

  .txtpresent{
    padding-right: 70px;
  }

  .presentation{
    display: flex;
    flex-direction: row;
    align-content: space-between;
  }

  @media only screen and (max-width: 768px) {
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

  @media only screen and (min-width: 768px) and (max-width: 1200px) {
  
    #home{
    background-color: #2c3e50;
    height: 500px;
    color: white;
    margin-top: 65px;
   
  }
}

</style>

<script>
</script>