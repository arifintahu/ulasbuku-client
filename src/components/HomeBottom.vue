<template>
  <div>
    <v-bottom-navigation
      grow
      fixed
    >
      <v-btn :to="{ name : 'Profile', params: { username: 'arifintahu' }}">
        <span>PROFILE</span>
        <v-icon color="teal">mdi-account</v-icon>
      </v-btn>

      <v-btn :to="{ name : 'Home'}">
        <span>HOME</span>
        <v-icon color="teal">mdi-home</v-icon>
      </v-btn>

      <v-btn :to="{ name : 'Write'}">
        <span>WRITE</span>
        <v-icon color="teal">mdi-pencil</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
	export default {
		data: () => ({

		})
	}
</script>

<style scoped>
</style>