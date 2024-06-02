<template>
    <v-container>
        <v-row>
            <PokemonDetailsResumeSheet 
                :imageUrl="pokemonData?.sprites.other.dream_world.front_default"
            />
            <PokemonDetailsMainSheet :pokemonData="pokemonData"/>
        </v-row>
    </v-container>
</template>
  
<script setup>  
    const pokemonData = ref(null)  
    const route = useRoute()
    
    const { data } = await useFetch(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`,{});
    pokemonData.value = data.value;

    const storedPokemonsString = localStorage.getItem('visitedPokemons');
    let storedPokemonsArray = JSON.parse(storedPokemonsString);
    if (!storedPokemonsArray) {
        storedPokemonsArray = []
    }

    const indexPokemonOnHistory = 
        storedPokemonsArray.findIndex(pokemon => pokemon.name === pokemonData.value?.forms[0].name)
    
    if (indexPokemonOnHistory === -1) {
        const newPokemonToHistoty = { 
            name: pokemonData.value?.forms[0].name,
            url: `https://pokeapi.co/api/v2/pokemon/${route.params.id}`
        }

        if (storedPokemonsArray.length) {
            storedPokemonsArray = [
                ...storedPokemonsArray, 
                newPokemonToHistoty
            ]
        } else {
            storedPokemonsArray = [
                newPokemonToHistoty
            ]
        }
        localStorage.setItem('visitedPokemons', JSON.stringify(storedPokemonsArray));
    }
</script>      