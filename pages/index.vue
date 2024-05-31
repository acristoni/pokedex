<template>
    <v-container>
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
    </v-container>
</template>
  
<script setup>  
    const pokemons = ref([])      
    const { data, pending, error } = await useFetch('https://pokeapi.co/api/v2/pokemon',{});
    pokemons.value = data.value.results;
</script>      