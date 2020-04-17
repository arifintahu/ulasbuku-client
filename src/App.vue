<template>
  <v-app style="background: #FAFAFA">
    <v-system-bar color="white"></v-system-bar>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="white"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"/>

      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <router-link :to="{ name : 'Home'}" style="text-decoration: none">
          <span class="headline text--primary text-uppercase">Ulas Buku</span>
        </router-link>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      />
      <v-spacer />
      <v-btn color="primary" class="mx-2 hidden-sm-and-down" :to="{ name : 'Write'}">Tulis Ulasan</v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn
        icon
        large
      >
        <v-avatar
          size="32px"
          item
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          /></v-avatar>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      class="hidden-md-and-up"
    >
      <SideBar></SideBar>
    </v-navigation-drawer>

    <v-content>
      <router-view></router-view>
    </v-content>
    
  </v-app>
</template>

<script>
import SideBar from '@/components/SideBar.vue';

export default {
  name: 'App',
  components: {
    SideBar
  },
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>
