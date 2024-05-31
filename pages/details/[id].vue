<template>
       <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
            <PokemonDetailsResumeSheet 
                :imageUrl="pokemonData?.sprites.other.dream_world.front_default"
            />
            <PokemonDetailsMainSheet :pokemonData="pokemonData"/>
        </v-row>
      </v-container>
    </v-main>
</template>
  
<script setup>  
    const pokemonData = ref(null)  
    const route = useRoute()
    
    const { data, pending, error } = await useFetch(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`,{});
    pokemonData.value = data.value;
</script>      