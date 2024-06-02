<template>
    <v-container class="d-flex justify-center align-center">
        <h2>{{ capitalizeFirstLetters(name) }}</h2>
    </v-container>
</template>

<script>
    export default {
        props: ['name'],
    }
</script>