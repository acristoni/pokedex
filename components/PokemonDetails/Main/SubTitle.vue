<template>
    <v-container class="d-flex justify-center align-center">
        <h4>#{{ number }}</h4>
    </v-container>
</template>

<script>
    export default {
        props: ['number'],
    }
</script>