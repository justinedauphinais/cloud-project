<script setup>

import { onMounted, computed, ref, reactive } from 'vue';

import FiltreList from "@/components/FiltreList.vue";
import ListItem from "@/components/ListItem.vue";

import axios from 'axios';

//const recipes = [];
const recipes = reactive({
  value: computed(() => {
    return recipes.value;
  })
});

onMounted(() => {
  getRecipes();
});

function getRecipes() {
  axios.get('http://localhost:3000/recipes')
      .then(response => {

        recipes.value = response.data;
        console.log(recipes.value);
      })
      .catch(error => {
        console.log(error);
      });
}

//todo ici mettre la logique pour les filtres


//todo ici mettre la logique pour les recettes


</script>

<template>
    <main id="catalogue">
      <FiltreList />
      <ListItem :recipes="recipes" />
    </main>
</template>

<style scoped>
  #catalogue {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 1em;
    width: 88vw;
    height: 100vh;
  }
   /*#catalogue div {
    padding: 1em 2em;
    border-radius: 10px;
    background-color: #599883;
  }

  #catalogue div a {
    color: white; 
  }

  #catalogue div:hover {
    background-color: #00BD7E;
  }*/
</style>