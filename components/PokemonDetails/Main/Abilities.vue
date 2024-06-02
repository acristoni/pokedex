<template>
    <v-container class="justify-center align-center">
        <PokemonDetailsMainTitle name="Abilities"/>
        <div 
            v-for="(ability, index) in abilities" 
            :key="index" 
            style="display: flex; justify-content: center;"
        >
            <span>{{ capitalizeFirstLetters(ability.ability.name) }}</span>
        </div>
    </v-container>
</template>

<script>
    export default {
        props: [ 'abilities' ],
    }
</script>