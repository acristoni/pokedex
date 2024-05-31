<template>
    <v-col
        cols="12"
        md="4"
    >
        <v-sheet
            min-height="268"
            rounded="lg"
        >
            <PokemonDetailsResumeImage :imageUrl="imageUrl"/>
        </v-sheet>
    </v-col>
</template>

<script>
    export default {
        props: ['imageUrl'],
    }
</script>