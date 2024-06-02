<template>
  <v-container class="template-container">
    <div
      style="width: 100%; display: flex; justify-content: center; padding: 4;"
    >
      <v-text-field
        v-model="searchTerm"
        label="Procure um Pokemon"
        variant="solo"
        @keyup.enter="searchPokemon"
      ></v-text-field>
    </div>
    <v-row>
      <template v-for="(pokemon) in pokemons" :key="index">  
        <v-col
          cols="6"
          md="3"
        >
          <PokemonResumeCard 
            :name="pokemon.name" 
            :url="pokemon.url"
          />
        </v-col>
      </template>
    </v-row>
    <div
      style="width: 100%; display: flex; justify-content: center;"
    >
      <v-btn 
        class="mt-4"
        @click="handleGetMorePokemonsButton"
      >See more Pokemons</v-btn>
    </div>
  </v-container>
</template>
  
<script setup>  
  const pokemons = ref([]);    
  const nextUrl = ref(null);
  const searchTerm = ref('');

  const { data } = await useFetch('https://pokeapi.co/api/v2/pokemon',{});
  pokemons.value = data.value.results;
  nextUrl.value = data.value.next;

  const handleGetMorePokemonsButton = async () => {
    if (nextUrl.value) {
      const { data: newData } = await useFetch(nextUrl.value,{});
      pokemons.value = [...pokemons.value, ...newData.value.results];
      nextUrl.value = newData.value.next;
    }
  }

  const searchPokemon = () => {
    if (searchTerm.value) {
      navigateTo(`/details/${searchTerm.value}`);
    }
  } 
</script>      