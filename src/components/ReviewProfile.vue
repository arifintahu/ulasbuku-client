<template>
  <div>

    <div class="d-flex my-2">
        <v-avatar size="64" class="mr-1" color="grey">
           <v-img :src="avatar"></v-img>
        </v-avatar>
        <div class="mx-2">
          <div class="title">
            {{profile.name}}
          </div>
          <div v-html="profile.desc"></div>
          <div class="font-weight-light">{{profile.username}}</div>
        </div>
    </div>

  </div>
</template>

<script>
	export default {
		props: ['profile'],
		data: () => ({

		})
	}
</script>

<style scoped>
</style>