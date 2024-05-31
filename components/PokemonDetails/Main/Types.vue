<template>
    <v-container class="d-flex justify-center align-center">
      <div v-for="(type, index) in types" :key="index">
        <span style="padding: 10px;">{{ type.type.name }}</span>
      </div>
    </v-container>
</template>
  
<script>
    export default {
        props: [ 'types' ],
    }
</script>