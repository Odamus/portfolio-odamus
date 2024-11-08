<template>
  <div id="skills">
    <section class="section1">
      <div class="title1"><h1>Compétences</h1></div>
      <div class="content1">
        <div class="hardskills"><h2>Hard Skills</h2></div>
        <div class="row">
          <div class="col-6 blocgauche">
            <div class="skillsdev">
              <h2 class="skilldev">COMPETENCES DEV</h2>
            </div>
            <div class="frontendt"><h3>Front-End</h3></div>
            <div><p class="p2">HTML</p></div>
            <div class="progressBar">
              <div class="proghtml"></div>
            </div>

            <div><p class="p2">CSS</p></div>
            <div class="progressBar">
              <div class="progcss"></div>
            </div>

            <div><p class="p2">JavaScript</p></div>
            <div class="progressBar">
              <div class="progjs"></div>
            </div>

            <div class="frontendt"><h3>Divers</h3></div>
            <div><p class="p2">WINDOWS</p></div>
            <div class="progressBar">
              <div class="progwindows"></div>
            </div>

            <div><p class="p2">EXCEL</p></div>
            <div class="progressBar">
              <div class="progexcel"></div>
            </div>

            <div><p class="p2">SONY VEGAS</p></div>
            <div class="progressBar">
              <div class="progsonyvegas"></div>
            </div>
          </div>

          <div class="col-6 blocdroit">
            <div class="skillspro">
              <h2 class="skillpro">COMPETENCE PROFESSIONNELLE</h2>
            </div>

            <div>
              <p class="p2">
                Utilisation des outils de résolutions de problèmes
              </p>
            </div>
            <div class="progressBar">
              <div class="progoutilsprob"></div>
            </div>

            <div>
              <p class="p2">Gestion de groupes de travail pluridisciplinaire</p>
            </div>
            <div class="progressBar">
              <div class="progleadworkgrp"></div>
            </div>

            <div><p class="p2">Dispense de formations</p></div>
            <div class="progressBar">
              <div class="progformations"></div>
            </div>

            <div>
              <p class="p2">Utilisations d'outils d'amélioration continu</p>
            </div>
            <div class="progressBar">
              <div class="progameliocontinu"></div>
            </div>
          </div>
        </div>
      </div>
    </section> 
  </div>
    
  <section class="section2">
    <div class="softskills">
        <h2>Soft Skills</h2>
    </div>
        <div id="competences" class="blocbas">
            <div><p class="p2">LEADERSHIP</p></div>
            <div class="progressBar">
              <div class="progleadership"></div>
            </div>
  
            <div><p class="p2">TRAVAIL D'EQUIPE</p></div>
            <div class="progressBar">
              <div class="progworkgrp"></div>
            </div>
  
            <div><p class="p2">COMMUNICATION</p></div>
            <div class="progressBar">
              <div class="progcommunication"></div>
            </div>
  
            <div><p class="p2">RESOLUTION DE PROBLEMES</p></div>
            <div class="progressBar">
              <div class="progproblemsolving"></div>
            </div>
  
            <div><p class="p2">ADAPTIBILITE</p></div>
            <div class="progressBar">
              <div class="progadapt"></div>
            </div>
  
            <div><p class="p2">RIGUEUR</p></div>
            <div class="progressBar">
              <div class="progrigor"></div>
            </div>

            <div><p class="p2">EMPATHIE</p></div>
            <div class="progressBar">
              <div class="progempathy"></div>
            </div>

            <div><p class="p2">INTELLIGENCE EMOTIONNELLE</p></div>
            <div class="progressBar">
              <div class="progemotionalintel"></div>
            </div>

            <div><p class="p2">CREATIVITE</p></div>
            <div class="progressBar">
              <div class="progcreativity"></div>
            </div> 
        </div>
      </section>

</template>

<style scoped>
    #skills{
        background-image: url("src/assets/images/fondskill.jpg");
        background-size: cover;
        height: 750px;
    }
    .h1{
        color: #2c3e50;
    }

    h2 {
      font-weight: bold;
    }

    .title1{
    display: flex;
    justify-content: center;
    background-color: #2c3e50;
    border-top: 5px solid #4e6c71;
    border-bottom: 5px solid #4e6c71;
    color: azure;
    padding-top: 10px;
    padding-bottom: 10px;
}

    /* Section 1 flex and style */

    .p2 {
      margin-bottom: 0;
      margin-top: 20px;
    }

    .row {
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: nowrap;
    }

.competences {
    display: flex;
    position: absolute;
    flex-wrap: wrap;
    column-gap: 7em;
    align-content: space-between;
    width: 100%;
    margin-top: 20px;
}

.hardskills {
  display: flex;
  justify-content: center;
  background-color: #bbbdc0;
  border-top: 5px solid #4e6c71;
  border-bottom: 5px solid #4e6c71;
  color: #4e6c71;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 10px;
}

.blocgauche {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: flex-start;
    padding-top: 20px;

}

.frontendt {
  margin-top: 20px;
}

.blocdroit {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 20px;
}

.skillspro {
  margin-bottom: 50px;
}

 /* Section 2 flex and style */

 .section2 {
    background-image: url("src/assets/images/fondskill.jpg");
    background-size: cover;
    height: 700px;
 }

.softskills {
  background-color: #bbbdc0;
  border-top: 5px solid #4e6c71;
  border-bottom: 5px solid #4e6c71;
  color: #4e6c71;
  padding-top: 5px;
  padding-bottom: 5px;
}

.blocbas {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    padding-left: 239px;
    padding-right: 239px;
}

.softskills {
    display: flex;
    justify-content: center;
}

    /* Block dev Hard Skills */

.progressBar {
    color: rgb(0, 0, 0);
    width: 400px;
    height: 20px;
    border: 2px solid #2c3e50;
    position: relative;
}
  
.proghtml::before {
    position: absolute;
    width: 20%;
    height: 100%;
    background-color: #2c3e50;
    content: " ";
}

.progcss::before {
    position: absolute;
    width: 20%;
    height: 100%;
    background-color: #2c3e50;
    content: " ";
}

.progjs::before {
    position: absolute;
    width: 20%;
    height: 100%;
    background-color: #2c3e50;
    content: " ";
}

.progwindows::before {
    position: absolute;
    width: 70%;
    height: 100%;
    background-color: #2c3e50;
    content: " ";
}

.progexcel::before {
    position: absolute;
    width: 50%;
    height: 100%;
    background-color: #2c3e50;
    content: " ";
}

.progsonyvegas::before {
    position: absolute;
    width: 50%;
    height: 100%;
    background-color: #2c3e50;
    content: " ";
}

/* Block pro Hard Skills */

.progoutilsprob::before {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #2c3e50;
    content: " ";
}

.progleadworkgrp::before {
    position: absolute;
    width: 90%;
    height: 100%;
    background-color: #2c3e50;
    content: " ";
}

.progformations::before {
    position: absolute;
    width: 90%;
    height: 100%;
    background-color: #2c3e50;
    content: " ";
}

.progameliocontinu::before {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #2c3e50;
    content: " ";
}

/* Block Soft Skills */

.progleadership::before {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #2c3e50;
    content: " ";
}

.progworkgrp::before {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #2c3e50;
    content: " ";
}

.progcommunication::before {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #2c3e50;
    content: " ";
}

.progproblemsolving::before {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #2c3e50;
    content: " ";
}

.progadapt::before {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #2c3e50;
    content: " ";
}

.progrigor::before {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #2c3e50;
    content: " ";
}

.progempathy::before {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #2c3e50;
    content: " ";
}

.progemotionalintel::before {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #2c3e50;
    content: " ";
}

.progcreativity::before {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #2c3e50;
    content: " ";
}

@media only screen and (max-width: 360px) {
  .progressBar {
    width: 100px;
  }

  .blocbas {
    padding: 0px 0px 0px 0px;
  }

  .p2 {
    font-size: xx-small;
  }

  .skillpro, .skilldev, h3 {
    font-size: X-small;
    padding-top: 30px;
    font-weight: bold;
  }

  .blocgauche, .blocdroit {
    padding-left: 20px;
  }

  .blocdroit {
    margin-left: 0px;
    padding-right: 0px;
  }

}

@media only screen and (min-width: 361px) and (max-width: 768px) {
  
  .progressBar {
    width: 150px;
  }

  .blocbas {
    padding: 0px 0px 0px 0px;
  }

  .p2 {
    font-size: xx-small;
  }

  .skillpro, .skilldev, h3 {
    font-size: medium;
    padding-top: 30px;
  }

  .blocgauche, .blocdroit {
    padding-left: 40px;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1200px) {
  
  .progressBar {
    width: 270px;
  }

  .p2 {
    font-size: small;
  }

  .skillpro, .skilldev, h3 {
    font-size: medium;
    padding-top: 30px;
  }

  .blocgauche, .blocdroit {
    padding-left: 150px;
  }

}


    
</style>