<template>
    <div id="notfound">
        <div>
            <img class="imgnotfound" src="/src/assets/images/404homer.jpg" alt="to 404 error page">

            <p>Oops, we can't find this page go to
                <router-link to="/">Accueil</router-link>
            </p>

        </div>
    </div>
</template>

<script>

</script>

<style>

#notfound {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 35vh;
}

/* Breakpoints pour RWD */

@media only screen and (max-width: 360px) {
    .imgnotfound {
    max-width: 100%;
 }
}

@media only screen and (min-width: 361px) and (max-width: 768px) {
    .imgnotfound {
    max-width: 100%;
 }
}

@media only screen and (min-width: 769px) and (max-width: 1200px) {
    .imgnotfound {
    max-width: 100%;
 }
}

</style>
