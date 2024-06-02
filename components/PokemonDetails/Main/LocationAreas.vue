<template>
    <v-container class="justify-center align-center">
        <PokemonDetailsMainTitle name="Location Area"/>
        <div 
            v-for="(location, index) in locationAreas" 
            :key="index" 
            style="display: flex; justify-content: center;"
        >
            <span>{{ capitalizeFirstLetters(location.location_area.name) }}</span>
        </div>
    </v-container>
</template>

<script setup lang="ts">
    const props = defineProps({
        'locationAreasUrl': String
    })
    
    const locationAreas = ref([])  
    
    const getLocalizationsInfo = async () => {
        const { data, pending, error } = await useFetch(props.locationAreasUrl,{});
        locationAreas.value = data.value;
    }
    
    getLocalizationsInfo()
</script>