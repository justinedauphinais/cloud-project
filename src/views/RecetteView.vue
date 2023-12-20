<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import axios from 'axios';

const route = useRoute();

const recetteId = ref(null);
const nomRecette = ref('');
const imageRecette = ref('');

onMounted(() => {
    recetteId.value = route.params.id;

  axios.get(`http://localhost:3000/recipes/${recetteId.value}`)
    .then(response => {
        nomRecette.value = response.data[0].nom;
        imageRecette.value = response.data[0].image;
    })
    .catch(error => {
        console.log(error);
    });
});

</script>

<template>
    <main id="recette">
        <div>
            <span></span>
            <img :src="imageRecette" alt="recipe_image"> 
            <span></span>
        </div>
        <div class="infos_recette">
            <p>caca</p>
        </div>
               
        <h1>{{ nomRecette }}</h1>

    </main>
</template>

<style scoped>
    #recette {
        width: calc(100vw - 80px);
        min-height: 100vh;
        position: absolute;
        top: 0;
        left: 80px;
        display: flex;
        flex-direction: column;
    }

    #recette div:not(.infos_recette) {
        width: 100%;
        display: flex;
        align-items: center;
    }

    #recette div span {
        flex-grow: 1;
        height: 50px;
        background-color: #00BD7E;
    }

    #recette img {
        width: 525px;
        height: 375px; 
        border-radius: 10px;
        margin: 0px auto;
        box-shadow: 0px 0px 10px white;
    }

    #recette > .infos_recette {
        width: 360px;
        height: 400px;
        position: absolute;
        left: 40px;
        top: 250px;
        padding: 10px;
        background-color: rgba(248, 248, 248, 1);
        border-radius: 5px;
        color: black;
    }

    #recette h1 {
        width: 525px;
        font-size: 50px;
        font-weight: 600;
        margin: 0px auto;
        color: #00BD7E;
        text-align: center;
        border-bottom: 1px solid #00BD7E;
    }
</style>