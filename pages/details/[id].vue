<template>
   <span>{{ pokemonData?.id }}</span>
   <span>{{ pokemonData?.base_experience }}</span>
</template>
  
<script setup>  
    const pokemonData = ref([])  
    const route = useRoute()
    
    const { data, pending, error } = await useFetch(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`,{});
    pokemonData.value = data.value;
</script>      