<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/about">Catalogue</RouterLink>
      </nav>   
    </div>
  </header>

  <div id="header">
    <h1>Recettes simples et rapides</h1>
    <p>Bienvenue sur le meilleur site pour trouver la recette parfaite! Vous trouverez une grande sélection de recettes variées pour surprendre.</p>
  </div>

  <div id="content">
    <div>

    </div>
  </div>
</template>

<style scoped>
  * {
  }

  nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 75px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #2d2d2d;
  }

  #header {
    position: absolute;
    top: 2em;
    left: 125px;
  }
</style>
