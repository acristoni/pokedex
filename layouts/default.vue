<template>
  <v-app id="inspire">  
    <v-app-bar style="padding: 12px;">  
      <v-app-bar-title>
        <NuxtLink to="/">
          <v-img
            :width="181"
            src="assets/images/pokemon.png"
            cover
          ></v-img>
        </NuxtLink>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <NuxtLink to="/history">
        <v-btn icon>
          <v-icon>mdi-history</v-icon>
        </v-btn>
      </NuxtLink>
    </v-app-bar>
    <v-main class="bg-main" style="margin-top: 24px;">
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