<template>
  <v-container class="template-container">
    <div
      style="width: 100%; display: flex; justify-content: center; padding: 4;"
    >
      <v-card style="padding: 8px;">
        <h1>History</h1>
      </v-card>
    </div>
    <v-row>
      <template v-if="pokemons.length">
        <template v-for="(pokemon, index) in pokemons" :key="index">  
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
      </template>
      <template v-else>
        <div
          style="width: 100%; display: flex; justify-content: center; padding: 20px;"
        >
          <v-card style="padding: 8px;">
            <h2>There is no Pokemon visited</h2>
          </v-card>
        </div>
      </template>
    </v-row>
    <div
      style="width: 100%; display: flex; justify-content: center;"
    >
      <v-btn 
        class="mt-4"
        @click="handleCleanHistoryButton"
      >Clean History</v-btn>
    </div>
  </v-container>
</template>
  
<script setup>  
  const pokemons = ref([]);    

  const storedPokemons = localStorage.getItem('visitedPokemons');
  if (storedPokemons) {
    pokemons.value = JSON.parse(storedPokemons);
  }

  const handleCleanHistoryButton = () => {
    localStorage.removeItem('visitedPokemons');
    pokemons.value = [];
  } 
</script>      