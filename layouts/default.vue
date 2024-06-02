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
    <v-main class="bg-grey-lighten-2">
      <slot></slot>
    </v-main>
  </v-app>
</template>