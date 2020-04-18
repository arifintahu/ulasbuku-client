<template>
  <div>
  	<v-sheet width="100%" height="auto" elevation="2">
  		<v-img
			v-if="image"
			:src="url"
			height="400"
			class="grey darken-4"
	    ></v-img>
  		<v-container class="pa-6 pb-12">
  			<v-file-input
				:rules="rules"
				accept="image/png, image/jpeg, image/bmp"
				placeholder="Pick an image cover"
				prepend-icon="mdi-camera"
				label="Cover Image"
				show-size
				v-model="image"
				v-on:change="showImg"
			></v-file-input>
  			<div id="title">
  				<v-textarea
		          solo
		          name="input-title"
		          label="Title Text"
		          single-line
		          class="display-1"
		          flat
		          auto-grow
		          rows="1"
		          v-model="title"
		        ></v-textarea>
  			</div>
  			<div id="body">
  				<v-textarea
		          solo
		          name="input-body"
		          label="Body Text"
		          class="subtitle-1"
		          flat
		          auto-grow
		          v-model="body"
		        ></v-textarea>
  			</div>
  		</v-container>
  	</v-sheet>
  </div>
</template>

<script>
	export default {
		data: () => ({
			title: '',
			body: '',
			image: '',
			url: '',
			rules: [
		        value => !value || value.size < 5000000 || 'Image size should be less than 5 MB!',
		      ],
		}),
		methods: {
			showImg: function() {
				const file = this.image;
				this.url = URL.createObjectURL(file);
			}
		}
	}
</script>

<style scoped>
</style>