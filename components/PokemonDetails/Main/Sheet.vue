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
            <v-container>
                <v-row>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <div class="column-content">
                            <PokemonDetailsMainAbilities 
                                :abilities="pokemonData?.abilities"
                            />
                        </div>
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <div class="column-content">
                            <PokemonDetailsMainLocationAreas 
                                :locationAreasUrl="pokemonData?.location_area_encounters" 
                            />
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>
    </v-col>
</template>

<script>
    export default {
        props: ['pokemonData'],
    }
</script>

<style scoped>
    .column-content {
        padding: 16px;
        background-color: #f5f5f5;
        border: 1px solid #ddd;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>