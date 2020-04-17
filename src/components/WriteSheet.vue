<template>
  <div>
  	<v-sheet width="100%" height="2300px" elevation="2">
  		<v-container class="pa-6">
  			<div id="title">
  				<v-textarea
		          solo
		          name="input-title"
		          label="Title"
		          single-line
		          class="display-1"
		          flat
		          rows="1"
         		  row-height="12"
		        ></v-textarea>
  			</div>
  			<div id="body">
  				<v-textarea
		          solo
		          name="input-body"
		          label="Write here"
		          class="body-1"
		          flat
		        ></v-textarea>
  			</div>
  		</v-container>
  	</v-sheet>
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