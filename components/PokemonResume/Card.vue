<template>
  <v-card 
    class="d-flex flex-column pa-4 justify-center align-center"
    hover
    @mouseenter="playPokemonCry"
    @click="goToDetailsPage"
  >
    <PokemonResumeImage :imageUrl="pokemonData?.sprites.front_default"/>
    <h4>#{{ pokemonData?.id }}</h4>
    <h4>{{ capitalizeFirstLetters(name) }}</h4>
  </v-card>
</template>

<script>
  export default {
    props: ['name', 'url'],
    async setup(props) {
      const pokemonData = ref(null)
      const pokemonUrl = props.url;
      const { data } = await useFetch(pokemonUrl);
      pokemonData.value = data.value
      return {
        pokemonData
      }
    },
    methods: {
      async playPokemonCry() {
        if (this.pokemonData && this.pokemonData.cries && this.pokemonData.cries.latest) {
          const audioUrl = this.pokemonData.cries.latest;
          const audio = new Audio(audioUrl);
          try {
            await audio.play();
          } catch (error) {
            console.error('Erro ao reproduzir o som:', error);
          }
        } else {
          console.error('URL do áudio não encontrada.');
        }
      },
      goToDetailsPage() {
        navigateTo(`/details/${this.pokemonData.id}`)
      }
    }
  }
</script>