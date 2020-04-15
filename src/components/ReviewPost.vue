<template>
  <v-container>

    <v-sheet width="100%" height="auto" elevation="2">
    	<v-img
    		v-if="content.imageSrc"
          	:src="content.imageSrc"
          	height="400"
          	class="grey darken-4"
        ></v-img>
        <v-container class="content pa-6 ">
        	<section id="title">
        		<div class="display-2">{{content.title}}</div>
		        <div class="body-1 py-2">
		            <v-avatar size="24" class="mr-1" color="grey">
		               <v-img :src="avatar"></v-img>
		            </v-avatar>
		            {{content.writer}}
		        </div>
        	</section>
        	<section id="body">
        		<div class="body-1 text-justify body-content py-6">
        			{{content.body}}
        		</div>
        	</section>
        </v-container>
    </v-sheet>

  </v-container>
</template>

<script>
	export default {
		props: ['content'],
		data: () => ({

		})
	}
</script>

<style scoped>
	.body-content {
		line-height: 1.7rem;
		white-space: pre-line;
	}
</style>