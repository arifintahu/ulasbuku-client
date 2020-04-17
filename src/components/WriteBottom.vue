<template>
  <div>
    <v-bottom-navigation
      grow
      fixed
    >
      <v-btn>
        <span>PREVIEW</span>
        <v-icon color="teal">mdi-home</v-icon>
      </v-btn>

      <v-btn>
        <span>SAVE DRAFT</span>
        <v-icon color="teal">mdi-card</v-icon>
      </v-btn>

      <v-btn>
        <span>PUBLISH</span>
        <v-icon color="teal">mdi-mail</v-icon>
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