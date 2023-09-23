<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quien es este Pokemon?</h1>

    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr" />
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
    };
  },
  methods: {
    async mixPokemonsArr() {
      this.pokemonArr = await getPokemonOptions();

      // Floor es para redondear y se multiplica por 4 xq quiero que este # este entre 0 y 3
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
    },
  },
  mounted() {
    this.mixPokemonsArr();
  },
};
</script>

<style></style>
<!--  -->
