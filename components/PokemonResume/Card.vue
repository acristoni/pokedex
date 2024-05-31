<template>
  <v-card class="d-flex flex-column pa-4 justify-center align-center">
    <PokemonResumeImage :imageUrl="pokemonData?.sprites.front_default"/>
    <span>#{{ pokemonData?.id }}</span>
    <span>{{ name }}</span>
  </v-card>
</template>

<script>
  export default {
    props: ['name', 'url'],
    async setup(props) {
      const pokemonData = ref(null)
      const pokemonUrl = props.url;
      const { data, pending, error } = await useFetch(pokemonUrl,{});
      pokemonData.value = data.value;

      return {
        pokemonData
      }
    }
  }
</script>