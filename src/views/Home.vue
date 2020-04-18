<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <HomeFeatured></HomeFeatured>
      </v-col>
  	  <v-col lg="8" md="8" sm="12">
        <HomeReview></HomeReview>
  	  </v-col>
      <v-col lg="4" md="4" class="hidden-sm-and-down">
        <SideBar></SideBar>
      </v-col>
    </v-row>
    <HomeBottom class="hidden-md-and-up"></HomeBottom>
  </v-container>
</template>

<script>
// @ is an alias to /src
import SideBar from '@/components/SideBar.vue';
import HomeFeatured from '@/components/HomeFeatured.vue';
import HomeReview from '@/components/HomeReview.vue';
import HomeBottom from '@/components/HomeBottom.vue';

export default {
  name: 'Home',
  components: {
    SideBar,
    HomeFeatured,
    HomeReview,
    HomeBottom
  }
}
</script>
