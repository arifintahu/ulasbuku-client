<template>
  <v-container>

    <v-sheet width="100%" height="auto" elevation="2">
      <v-container class="content pa-6 ">
        <div class="d-flex my-2">
          <v-avatar size="64" class="mr-1" color="grey">
             <v-img :src="avatar"></v-img>
          </v-avatar>
          <div class="mx-2">
            <div class="display-1">
              {{profile.name}}
            </div>
            <div v-html="profile.desc"></div>
            <div class="font-weight-light">{{profile.username}}</div>
          </div>
        </div>
      </v-container>
    </v-sheet>

  </v-container>
</template>

<script>

	export default {
    components: {
    },
		data: () => ({
      profile : {
        name : 'Miftahul Arifin',
        desc : 'Electrical engineer who turned out to software developer. <br> Web Application Developer and also Big Data Developer',
        username : '@arifintahu'
      }
		})
	}
</script>

<style scoped>
	.body-content {
		line-height: 1.7rem;
		white-space: pre-line;
	}
</style>