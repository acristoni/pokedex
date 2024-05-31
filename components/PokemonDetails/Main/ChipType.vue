<template>
    <v-chip :color="chipColor" dark>
      {{ type }}
    </v-chip>
</template>
  
<script>
    export default {
        props: [ 'type' ],
        computed: {
        chipColor() {
            const typeColors = {
                fire: 'red',
                water: 'blue',
                grass: 'green',
                electric: 'yellow',
                psychic: 'purple',
                ice: 'cyan',
                dragon: 'orange',
                dark: 'brown',
                fairy: 'pink',
                poison: 'purple'
            };
            
            return typeColors[this.type.toLowerCase()] || 'grey';
        }
        }
    }
</script>