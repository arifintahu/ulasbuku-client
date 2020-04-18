<template>
  <div>
    <v-bottom-navigation
      grow
      fixed
    >
      <v-btn>
        <span>LIKE</span>
        <v-icon color="teal">mdi-heart</v-icon>
      </v-btn>

      <v-btn :to="{ name : 'Home'}">
        <span>HOME</span>
        <v-icon color="teal">mdi-home</v-icon>
      </v-btn>

      <v-btn>
        <span>NEXT</span>
        <v-icon color="teal">mdi-arrow-right-bold</v-icon>
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