<template>
    <v-img
        :width="181"
        aspect-ratio="1/1"
        cover
        :src="imageUrl"
    ></v-img>
</template>

<script>
    export default {
        props: ['imageUrl'],
    }
</script>