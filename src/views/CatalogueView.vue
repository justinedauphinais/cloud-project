<script setup>
</script>

<template>
    <main id="catalogue">

        <div><router-link to="/recette">View detailed recipe</router-link></div>
    </main>
</template>

<style scoped>
   #catalogue div {
    padding: 1em 2em;
    border-radius: 10px;
    background-color: #599883;
  }

  #catalogue div a {
    color: white; 
  }

  #catalogue div:hover {
    background-color: #00BD7E;
  }
</style>