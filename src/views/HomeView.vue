<script setup>
</script>

<template>
  <main id="index">
    <div>
      <section>
          <h1>Recettes simples et rapides</h1>
          <p>
            Bienvenue sur le meilleur site pour trouver la recette parfaite! 
            Vous trouverez une grande sélection de recettes variées pour surprendre.
          </p>
        </section>
        <section>
          <h2>Discover new recipes</h2>
        </section>
        <section>
          <h2>Categories</h2>
        </section>
    </div>

    <div><a href="/catalogue">View all recipes</a></div>
  </main>
</template>

<style scoped>
  #index {
    width: calc(100vw - 80px);
    min-height: 100vh;
    padding: 2em;
    position: absolute;
    top: 0;
    left: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #index h1 {
    font-size: 50px;
    color: #00BD7E;
    margin-left: -0.07em;
  }

  #index h2 {
    margin-top: 1em;
    font-size: 30px;
    color: #599883;
  }

  #index div:first-of-type > section:first-of-type p {
    margin-top: -1em;
  }

  #index div:nth-of-type(2) {
    display: flex;
    justify-content: center;
  }

  #index div:nth-of-type(2) a {
    padding: 1em 2em;
    border-radius: 10px;
    background-color: #599883;
    color: white;
  }

  #index div:nth-of-type(2) a:hover {
    background-color: #00BD7E;
  }
</style>
