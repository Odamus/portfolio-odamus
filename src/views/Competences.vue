<template>
  <div id="skills">
    <section class="section1">
      <div class="title1"><h1>Compétences</h1></div>
      <div class="content1">
        <div class="hardskills"><h2>Hard Skills</h2></div>
        <div class="competences">
          <div class="blocgauche">
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

          <div class="blocdroit">
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

    .content1 {
    display: block;
    flex-direction: column;
    justify-content: space-between;
    width: auto;
    height: auto;
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
    position: relative;
    display: block;
    justify-content: flex-start;
    margin-left: 300px;

}

.frontendt {
  margin-top: 20px;
}

.blocdroit {
    position: relative;
    display: block;
    justify-content: flex-start;
    margin-right: 100px;
    padding-left: 500px;
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
    position: relative;
    flex-direction: column;
    margin-left: 40%;
}

.softskills {
    display: flex;
    justify-content: center;
}

    /* Block dev Hard Skills */

.progressBar {
    color: rgb(0, 0, 0);
    width: 350px;
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

    
</style>