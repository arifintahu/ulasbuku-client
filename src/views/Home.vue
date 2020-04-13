<template>
  <v-container>
    <v-row>
  	  <v-col lg="4" md="4" class="hidden-sm-and-down">
  	  	<SideBar></SideBar>
  	  </v-col>
  	  <v-col lg="8" md="8" sm="12">
  	  	<div class="content">
	      <CardPost image="true"></CardPost>
	      <CardPost></CardPost>
	      <CardPost></CardPost>
	      <CardPost></CardPost>
	      <CardPost></CardPost>
	    </div>
  	  </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import SideBar from '@/components/SideBar.vue';
import CardPost from '@/components/CardPost.vue'


export default {
  name: 'Home',
  components: {
    SideBar,
    CardPost
  }
}
</script>
