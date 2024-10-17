<template>
  <div id="skills">
    <section class="section2">
      <div class="content2">
        <div class="title2"><h1 class="title2">Compétences</h1></div>
        <div class="hardskills"><h2 class="hardskill">Hark Skills</h2></div>
        <div class="competences">
          <div class="blocgauche">
            <div class="skillsdev">
              <h2 class="skilldev">Compétences Dev</h2>
            </div>
            <div class="frontendt"><h3 class="frontend">FRONT-END</h3></div>
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

            <div class="frontendt"><h3 class="frontend">DIVERS</h3></div>
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
              <h2 class="skillpro">Compétences Professionelle</h2>
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

          <div class="blocbas">
            <div class="softskills">
              <h1 class="softskill">SOFT Skills</h1>
            </div>

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
        </div>
  
      </div>
    </section>
  </div>  
</template>

<style>
    #skills{
        background-image: url("src/assets/images/fondskill.jpg");
        background-size: cover;
        height: 1650px;
    }
    .h1{
        color: #2c3e50;
    }

    .content2 {
    display: block;
    flex-direction: column;
    justify-content: space-between;
    width: auto;
    height: auto;
}

.title2{
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.competences {
    display: flex;
    position: absolute;
    flex-wrap: wrap;
    column-gap: 7em;
    align-content: space-between;
    width: 100%;
}

.hardskills {
    display: flex;
    justify-content: center;
}

.blocgauche {
    position: relative;
    display: block;
    justify-content: flex-start;
    margin-left: 300px;
}

.blocdroit {
    position: relative;
    display: block;
    justify-content: flex-start;
    margin-right: 100px;
    margin-top: 40px;
}

.blocbas {
    position: relative;
    flex-direction: column;
    margin-left: 40%;
    margin-top: 40px;
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