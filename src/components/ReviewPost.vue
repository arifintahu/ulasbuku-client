<template>
  <v-container>

    <v-sheet width="100%" height="auto" elevation="2">
    	<v-img
    		v-if="content.imageSrc"
          	:src="content.imageSrc"
          	height="400"
          	class="grey darken-4"
        ></v-img>
        <v-container class="content pa-6">
        	<section id="title">
        		<v-list-item class="px-0">
			      <v-list-item-content>
			        <v-list-item-title class="display-2">{{content.title}}</v-list-item-title>
			        <v-list-item-subtitle class="body-1">
			            <v-list-item-avatar size="24" class="mr-1" color="grey">
			               <v-img :src="avatar"></v-img>
			            </v-list-item-avatar>
			            {{content.writer}}
			        </v-list-item-subtitle>
			      </v-list-item-content>
			    </v-list-item>
        	</section>
        	<section id="body">
        		<div class="body-2">
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