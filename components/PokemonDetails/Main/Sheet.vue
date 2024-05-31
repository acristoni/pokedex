<template>
    <v-col
        cols="12"
        md="8"
    >
        <v-sheet
            min-height="70vh"
            rounded="lg"
        >
            <PokemonDetailsMainTitle :name="pokemonData?.forms[0].name"/>
            <PokemonDetailsMainSubTitle :number="pokemonData?.id"/>
            <PokemonDetailsMainTypes :types="pokemonData?.types" />
        </v-sheet>
    </v-col>
</template>

<script>
    export default {
        props: ['pokemonData'],
    }
</script>