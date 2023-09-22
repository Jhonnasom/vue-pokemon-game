<template>
  <h1>¿Quien es este Pokemon?</h1>

  <PokemonPicture :pokemonId="5" :showPokemon="true" />
  <PokemonOptions :pokemons="pokemonArr" />
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
    };
  },
  methods: {
    async mixPokemonsArr() {
      this.pokemonArr = await getPokemonOptions();
    },
  },
  mounted() {
    this.mixPokemonsArr();
  },
};
</script>

<style></style>
<!--  -->
