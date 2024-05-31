<template>
    <v-container class="d-flex justify-center align-center">
      <div v-for="(type, index) in types" :key="index">
        <PokemonDetailsMainChipType :type="type.type.name"/>
      </div>
    </v-container>
</template>
  
<script>
    export default {
        props: [ 'types' ],
    }
</script>