<template>
    <v-container class="d-flex justify-center align-center">
        <v-img
        :width="250"
        aspect-ratio="1/1"
        cover
        :src="imageUrl"
        ></v-img>
    </v-container>
</template>

<script>
    export default {
        props: ['imageUrl'],
    }
</script>