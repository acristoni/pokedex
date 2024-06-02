<template>
  <v-app id="inspire">  
    <v-app-bar>  
      <v-app-bar-title>
        <NuxtLink to="/">
          <h1>Pokedex</h1>
        </NuxtLink>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <NuxtLink to="/history">
        <v-btn icon>
          <v-icon>mdi-history</v-icon>
        </v-btn>
      </NuxtLink>
    </v-app-bar>
    <v-main class="bg-main">
      <slot></slot>
    </v-main>
  </v-app>
</template>

<style scoped>
  .bg-main {
    background: url('assets/images/pokemonbg.jpg') no-repeat center center fixed;
    background-size: cover;
  }
</style>