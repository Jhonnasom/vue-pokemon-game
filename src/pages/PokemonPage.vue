<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quien es este Pokemon?</h1>

    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer" />

    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame">Play Again</button>
    </template>
  </div>
</template>

<script>
import PokemonOptions from "../components/PokemonOptions.vue";
import PokemonPicture from "../components/PokemonPicture.vue";
import getPokemonOptions from "../helpers/getPokemonOptions";

// console.log(getPokemonOptions());

export default {
  name: "PokemonPage",
  components: {
    PokemonOptions,
    PokemonPicture,
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
    };
  },
  methods: {
    async mixPokemonsArr() {
      this.pokemonArr = await getPokemonOptions();

      // Floor es para redondear y se multiplica por 4 xq quiero que este # este entre 0 y 3
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(pokemonId) {
      this.showPokemon = true;
      this.showAnswer = true;

      if (pokemonId === this.pokemon.id) {
        this.message = "Correcto, es " + this.pokemon.name + "!";
      } else {
        this.message = "Ooops, era " + this.pokemon.name + "!";
      }
      console.log("Hola mundo", this.showPokemon);

      // if (pokemonId === this.pokemon.id) {
      //   this.showPokemon = true;
      //   this.message = "Correcto, es " + this.pokemon.name + "!";
      //   console.log("Resolviste correctamente");
      // } else {
      //   console.log("Pokemon incorrecto");
      //   this.message = "Ooops, era " + this.pokemon.name + "!";
      //   this.showPokemon = false;
      // }
      // setTimeout(() => {
      //   this.showPokemon = false;
      //   this.mixPokemonsArr();
      // }, 2000);
    },
    newGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemon = null;
      this.mixPokemonsArr();
    },
  },
  mounted() {
    this.mixPokemonsArr();
  },
};
</script>

<style></style>
<!--  -->
